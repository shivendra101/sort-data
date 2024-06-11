import { Header } from "./components/Header"
import { Content } from "./constants/content"
import { MainContent } from "./components/MainContent";
import { NavPanel } from "./components/NavPanel";
import { useState } from 'react'

export function ContentWrapper() {

    const [data, setData] = useState(Content[0])

    const [nav, setNav] = useState(1)

    const handleNavChange = (index) => {
        setNav(index)
        setData(Content[index - 1])
    }

    const handleHeaderClick = (type) => {
        // setData(prevData => {
            // const newData = [...prevData]
            // newData.sort((a, b) => {
            //     // console.log("aaaa", a, a[type] < b[type], typeof(a[type]))
            //     return a[type] < b[type];
            // });

            const sortedArray = [...data].sort((a, b) => {
                if(type === 'name' || type === 'city'){
                    return a[type].localeCompare(b[type]);
                } else {
                    return a[type] - b[type]
                }
            });
            setData(sortedArray);


            // setData(newData);
        // })
    }



    return (
        <div className="content-wrapper">
            <Header />
            <div className="main-section">
                <NavPanel selectedNav={nav} handleNavChange={(index) => handleNavChange(index)} />
                <MainContent content={data} handleHeaderClick={handleHeaderClick} />
            </div>
        </div>
    )
}