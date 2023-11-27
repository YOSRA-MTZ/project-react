import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export function AdminLayout(){

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className={"nav-link texte-color"}>Home</NavLink>   
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className={"nav-link"} to={"/products"}>Products</NavLink>   
                        </li>

                        <li className="nav-item">
                            <NavLink className={"nav-link"}>Contacts</NavLink>  
                        </li>

                        <li className="nav-item"> 
                            <NavLink className={"nav-link"}>Connexion</NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
           <Outlet/>
        </>
    )
}