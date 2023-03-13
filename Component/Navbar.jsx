import React from "react";
import "./Navbar.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
class Navbar extends Component{
    state = {clicked : false}
    handleClick = ()=>{
        this.setState({clicked : !this.state.clicked})
    }
    render(){
        return(
            <nav className="Navitems">
                <h1 className="Navbar-logo">Trippy</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                 
                     <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item,index) =>{
                        return   <li key={index}>
                        <Link className={item.cName} to={item.url}> <i className={item.icon}></i>{item.title}</Link>
                    </li>

                    })}
                  <button>Signup</button>
                </ul>
            </nav>
                    )
    }

}
export default Navbar