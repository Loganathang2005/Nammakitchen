import "./Home.css";
import Menu from "./Menu";

const Home = () => {
  return (
    <div className="ajay">
      <div className="home">
        <div className="space"></div>
      <h2>Welcome to Namma Kitchen 🍲</h2>
      <p>Delicious South Indian food delivered to your doorstep 🚚</p>

      {/* Hero Images */}
      <div className="hero-images">
        <img src="https://t4.ftcdn.net/jpg/09/12/10/25/360_F_912102578_dpR2r8IstjbBzQWgn2dAegf6SE2gDPNT.jpg" alt="Biryani" />
        <img src="https://static.vecteezy.com/system/resources/thumbnails/053/315/343/small_2x/delicious-tandoori-chicken-indian-cuisine-spicy-foodgraphy-photo.jpeg" alt="Chicken" />
      </div>
      <button className="gopi">Explore</button>
      <br /><br /><br />
      <div className="abi">
        <Menu />
      </div>
    </div>
    </div>
  );
};

export default Home;
