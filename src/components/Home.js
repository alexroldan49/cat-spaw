// import catResting from "./images/cat-raesting.jpg"
function Home(){

    return(
        <>
            <div className="home-containter">
                <img className="resting-cat" src={require("./images/cat-resting.jpg")} alt="Cat Resting" />
                <div>
                    <h1 className="main-page-header" >Treat Your Furry friend</h1>
                    <p className="main-page-text" >insert context of application here</p>
                    <button className="book-appointment" >Book Appointment</button>
                </div>
            </div>
        </>
    )
} export default Home