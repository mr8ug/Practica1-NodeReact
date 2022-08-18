import React, { Component } from "react";

import logo from "../fiusac_negro.png"
import Navbar from "./Navbar";
class Header extends Component {
    render() {
        return (
            <header className="App-header">


                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <strong>[AYD1]</strong> PRACTICA 1
                </p>
                
                <Navbar/>
            </header>
        );
    }
}

export default Header;