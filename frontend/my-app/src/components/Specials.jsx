import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Specials.css";

const Specials = () => {
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/app/menu-items/")
      .then((res) => {
        const sortedMenu = res.data.sort((a, b) => b.price - a.price);
        setSpecials(sortedMenu.slice(0, 3));
      })
      .catch(() => console.error("Failed to load menu items"));
  }, []);

  return (
    <>
      <section className="container">
        <div className="top">
          <h2>Specials</h2>
          <a href="/menu">
            <button className="btn">Online Menu</button>
            </a>
        </div>
        <div className="buttom">
          <ul className="list">
            {specials.map((item) => (
              <li key={item.id} className="item">
                <img src={item.image} alt={item.name} />
                <div className="plate">
                  <div className="head">
                    <h4 className="name">{item.name}</h4>
                    <p className="price">${Number(item.price).toFixed(2)}</p>
                  </div>
                  <p className="description">{item.description}</p>
                  <a href="order-online" className="delivery">
                    Order a delivery{" "}
                    <img src="/images/motocycle.png" alt="moto" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Specials;
