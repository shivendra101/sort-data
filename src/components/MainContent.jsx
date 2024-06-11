
export function MainContent({content, handleHeaderClick}) {

    return (
        <div className="main-content">
            <div className="content-header">
                <div className="header-option" onClick={() => handleHeaderClick('name')}>Name</div>
                <div className="header-option" onClick={() => handleHeaderClick('city')}>City</div>
                <div className="header-option" onClick={() => handleHeaderClick('height')}>Height</div>
                <div className="header-option" onClick={() => handleHeaderClick('weight')}>Weight</div>
            </div>
            {
                content.map((data, index) => {
                    return <div key={index} className="content-row">
                        {
                            Object.keys(data).map((key, i) => {
                                return <div className="option" key={i}> {data[key]}</div>
                            })
                        }
                    </div>
                })
            }
        </div>
    )
}