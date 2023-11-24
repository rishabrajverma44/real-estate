import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
const Header = () => {
    let [menuOppend, setMenuOppend] = useState(false)
    let getMenuStyles = (menuOppend) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOppend && "-100%" }
        }
    }
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100} />
                <OutsideClickHandler onOutsideClick={() => {
                    setMenuOppend(false);
                }}
                >
                    <div className="flexCenter h-menu"
                        style={getMenuStyles(menuOppend)}
                    >
                        <a href="">Residencies</a>
                        <a href="">Contact Us</a>
                        <a href="">Get Started</a>
                        <button className="button">
                            <a href="">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler>

                <div className="menu-icon"
                    onClick={() => setMenuOppend((prev) => !prev)}
                >
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section >
    )
}

export default Header
