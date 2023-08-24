import React from "react"
import { Searchbar } from "./Searchbar"


export function Navbar(props){

    return(
        <nav className={props.darkMode ? "dark": ""}>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
                <Searchbar darkMode={props.darkMode} />
            </div>
            
        </nav>
    )
}