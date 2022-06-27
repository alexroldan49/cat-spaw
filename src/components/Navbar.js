import { NavLink } from "react-router-dom"


function Navbar(){

    return(
        <nav className="nav-bar" >
            <p className="cat-spaw-logo" >Cat Spaw</p>
            <div className="nav-list" >
                <NavLink to="/" ><a href="#" >Home</a></NavLink>
                <NavLink to="/Appointments" ><a href="#" >Appointments</a></NavLink>
                <NavLink to="/Cats" ><a href="#" >Cats</a></NavLink>
                <NavLink to="/About" ><a href="#" >About</a></NavLink>
            </div>
        </nav>
    )
}

export default Navbar