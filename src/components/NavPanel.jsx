import { navContent } from "../constants/navContent"

export function NavPanel({selectedNav, handleNavChange}) {
    return (
        <div className="nav-panel">
            {
                navContent.map(nav => {
                    return <div 
                            key={nav.id} className={`nav-option ${selectedNav === nav.id ? 'selected' : ''}`} 
                            onClick={() => handleNavChange(nav.id)}
                        >
                            {nav.name}
                        </div>
                })
            }
        </div>
    )
}