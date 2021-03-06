import { Button } from "@mui/material"
import { NavLink } from "react-router-dom"
// import catResting from "./images/cat-raesting.jpg"
function Home(){

    return(
        <div className="home">
            <div className="background-circle"></div>
            <div className="home-container">
                <img className="resting-cat" src={require("./images/cat-resting.jpg")} alt="Cat Resting" />
                <div className="home-main-context">
                    <h1 className="main-page-header" >Treat Your Furry Friend</h1>
                    <p className="main-page-text" >insert context of application here</p>
                    <NavLink to="Book-Appointment">
                        <button className="book-appointment-btn" >Book Appointment</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
} export default Home