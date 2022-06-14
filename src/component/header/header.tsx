
import "./header.scss"
import {useState,useEffect} from "react"
function Header(){

    const [menuState,setMenuState] = useState(false)
    const [screen,setScreen] = useState()

        function onDrop(){
            setMenuState(true)
        }
        function offDrop(){
            setMenuState(false)
        }


console.log(screen)
    return(
        <header>
 <div className="header-contents-desktop">
                <div className="icon-header">
                    <div className="icon-contents"></div>
                    <h1 className="text-icon">Portifolio</h1>
                </div>
                <div className="search-contents">
                    <div className="search">
                    <input/>
                    <button/>
                    </div>
                    
                </div>
                <div className="category-btn">
                    <a>teste</a>
                    <a>teste</a>
                    <a>teste</a>
                    <a onMouseEnter={onDrop} >teste</a>

                    {menuState?
                    <div className="header-menu-hover" onMouseLeave={offDrop}>

                    <ul className="list-dropdown">
                        <li><a href="#">teste</a></li>
                        <li><a href="#">teste</a></li>
                        <li><a href="#">teste</a></li>
                        <li><a href="#">teste</a></li>
                        <li><a href="#">teste</a></li>
                        <li><a href="#">teste</a></li>
                    </ul>
                    </div>: <></>}

                </div>
            </div>
            <div className="header-contents-mobile">
                <div className="header-mobile"></div>
                <div className="search-mobile"></div>
            </div>
            

        </header>
    )
}

export default Header