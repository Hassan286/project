import React from "react";
import Navbar from "./../Components/Navbar.jsx";
import Slider from "./../Components/Slider.jsx";
import Hero from "./../Components/Hero.jsx";
import Poster from "./../Components/Poster.jsx";
import Arrival from "../Components/Arrival.jsx";
import Card2 from "./../Components/Card2.jsx";
import Card3 from "./../Components/Card3.jsx";
import arrival from "./../Assets/arrival-1.png";
import arrival2 from "./../Assets/arrival-2.png";
import arrival3 from "./../Assets/arrival-3.png";
import arrival4 from "./../Assets/arrival-4.png";
import saving from "./../Assets/saving-1.png";
import saving2 from "./../Assets/saving-2.png";
import saving3 from "./../Assets/saving-3.png";
import men1 from "./../Assets/men-1.png";
import men2 from "./../Assets/men-2.png";
import men3 from "./../Assets/men-3.png";
import men4 from "./../Assets/men-4.png";
import men5 from "./../Assets/men-5.png";
import men6 from "./../Assets/men-6.png";
import men7 from "./../Assets/men-7.png";
import men8 from "./../Assets/men-8.png";
import Poster1 from "./../Assets/poster-1.png";
import Poster2 from "./../Assets/poster-2.png";
import men9 from "./../Assets/men-9.png";
import men10 from "./../Assets/men-10.png";
import Card4 from "./../Components/Card4.jsx";
import "../Pages/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Slider />
      <Link to="/product">
        <Hero />
      </Link>

      <Arrival title="New Arrival" />
      <div className="card_container">
        <div className="first_container">
          <Link to="/product">
            <Card2 imagePath={arrival} title="Knitted Joggers" />
          </Link>
          <Link to="/product">
            <Card2 imagePath={arrival2} title="Full Sleeve" />
          </Link>
        </div>
        <div className="second_container">
          <Link to="/product">
            <Card2 imagePath={arrival3} title="Active T-Shirts" />
          </Link>
          <Link to="/product">
            <Card2 imagePath={arrival4} title="Urban Shirts" />
          </Link>
        </div>
      </div>

      <Arrival title="Big Saving Zone" />
      <div className="vcard_container">
        <div className="vcard_first">
          <Link to="/product">
            <Card3
              imagePath={saving}
              header="Hawaiian Shirts"
              para="Dress up in summer vibe"
              discount="UPTO 50% OFF"
              button="SHOP NOW"
            />
          </Link>
          <Link to="/product">
            <Card4
              imagePath={saving3}
              header="Printed T-Shirt"
              para="New Designs Every Week"
              discount="UPTO 40% OFF"
              button="SHOP NOW"
            />
          </Link>
        </div>

        <div className="second_container">
          <Link to="/product">
            <Card4
              imagePath={saving2}
              header="Cargo Joggers"
              para="Move with style & comfort"
              discount="UPTO 50% OFF"
              button="SHOP NOW"
            />
          </Link>
        </div>
      </div>
      <div className="card_container">
        <Link to="/product">
          <Card4
            imagePath={men10}
            header="Cargo Joggers"
            para="Move with style & comfort"
            discount="UPTO 50% OFF"
            button="SHOP NOW"
          />
        </Link>
        <Link to="/product">
          <Card4
            imagePath={men9}
            header="Urban Shirts"
            para="Live in Comfort"
            discount="FLAT 60% OFF"
            button="SHOP NOW"
          />
        </Link>
      </div>

      <div className="card_container">
      <Link to="/product">
        <Poster
          imagePath={Poster1}
          title="WE MADE YOUR EVERDAY FASHION BETTER"
          description="In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7"
          button="Shop Now"
        />
         </Link>

        <Poster imagePath={Poster2} />
      </div>

      <Arrival title="Category for Men" />
      <div className="card_container">
        <div className="first_container">
          <Link to="/product">
            <Card2 imagePath={men1} title="Shirts" para="Explore Now!" />
          </Link>
          <Link to="/product">
            <Card2
              imagePath={men2}
              title="Printed T-Shirts"
              para="Explore Now!"
            />
          </Link>
        </div>
        <div className="second_container">
          <Link to="/product">
            <Card2
              imagePath={men3}
              title="Plain T-Shirts"
              para="Explore Now!"
            />
          </Link>
          <Link to="/product">
            <Card2 imagePath={men4} title="Polo Shirts" para="Explore Now!" />
          </Link>
        </div>
      </div>

      {/* responsive task */}
      <div className="card_container">
        <div className="first_container">
        <Link to="/product">
          <Card2
            imagePath={men5}
            title="Hoodies & Sweetshirt"
            para="Explore Now!"
          />
          </Link>
          <Link to="/product">
          <Card2 imagePath={men6} title="Jeans" para="Explore Now!" />
          </Link>
        </div>
        <div className="second_container">
        <Link to="/product">
          <Card2 imagePath={men8} title="Activewear" para="Explore Now!" />
          </Link>
          <Link to="/product">
          <Card2 imagePath={men6} title="Jeans" para="Explore Now!" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
