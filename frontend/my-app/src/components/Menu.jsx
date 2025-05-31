import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/MenuPage.css";

const MenuPage = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/app/menu-items/")
      .then((res) => setMenu(res.data))
      .catch(() => console.error("Failed to load menu items"));
  }, []);

  return (
    <div className="menu-page-container">
      {/* Logo */}
      <a href="/" className="link">
        <img src="/images/Logo.svg" alt="Logo" className="menu-logo" />
      </a>

      <h2 className="menu-page-header">Our Menu</h2>

      <div className="menu-grid">
        {menu.length > 0 ? (
          menu.map((item) => (
            <div key={item.id} className="menu-item">
              <div className="menu-item-img-wrapper">
                <img
                  style={{height:"100%"}}
                  src={item.image}
                  alt={item.name}
                  className="menu-item-img"
                />
              </div>
              <p className="menu-item-name">{item.name}</p>
              <p className="menu-item-price">
                ${Number(item.price).toFixed(2)}
              </p>
              <p className="menu-item-description">{item.description}</p>
            </div>
          ))
        ) : (
          <p className="no-menu">No menu items available</p>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
