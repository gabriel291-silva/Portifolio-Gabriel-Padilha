
import "./header.scss"
import {useState,useEffect} from "react"
function Header(){

    const [menuState,setMenuState] = useState(false)
    const [screen,setScreen] = useState()

        function onDrop(){
            setMenuState(true)
            console.log(menuState)
        }
        function offDrop(){
            setMenuState(false)
            console.log(menuState)
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
                    <a onMouseEnter={onDrop} >menu</a>

                    {menuState?
                    <div className="header-menu-hover" onMouseLeave={offDrop}>

                    <ul className="list-dropdown" >
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
                <div className="header-mobile">
                    <div className="menu-mobile" onClick={onDrop}>
                        <img src="http://cdn.onlinewebfonts.com/svg/img_510724.png" alt="" className="menu-mobile-img" />
                    </div>
                    {
                            menuState?
                            <div className="menu-mobile-swrap">
                                <div className="menu-mobile-contents">
                                    <div className="menu-mobile-close-btn">
                                    <button onClick={offDrop}>x</button>
                                </div>     
                            <ul>
                                <li>teste</li>
                                <li>teste</li>
                                <li>teste</li>
                                <li>teste</li>
                            </ul>
                                </div>      
                            </div>
                            :<></>
                        }
                    <div className="logo-header-mobile">
                            <div className="icon-mobile"></div>
                            <h1 className="text-icon-mobile">Portifolio</h1>
                     </div>
                </div>
                <div className="search-mobile">
                    <input type="text" className="input-mobile" />
                    <button className="button-mobile"></button>
                </div>
            </div>
            

        </header>
    )
}

export default Header