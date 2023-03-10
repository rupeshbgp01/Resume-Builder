import "./Home.css"
import front_img from "../images/background1.jpg";

function Home() {
    return (
        <div className="home__container">
            <div className="home__heading">
                <h1>Hello Everyone</h1>
            </div>

            <div className="front__image">
                <img src={front_img} alt="image"></img>
            </div>
        </div>
    );
}
export default Home;