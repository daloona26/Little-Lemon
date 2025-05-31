import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/OrderOnline.css";

const OrderOnline = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [message, setMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/app/menu-items/")
      .then((res) => setMenu(res.data))
      .catch(() => setMessage("Failed to load menu"));
  }, []);

  const addItem = (item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [item.id]: { ...item, quantity: (prev[item.id]?.quantity || 0) + 1 },
    }));
  };

  const removeItem = (itemId) => {
    setSelectedItems((prev) => {
      const currentQty = prev[itemId]?.quantity || 0;
      if (currentQty <= 1) {
        const newItems = { ...prev };
        delete newItems[itemId];
        return newItems;
      }
      return {
        ...prev,
        [itemId]: { ...prev[itemId], quantity: currentQty - 1 },
      };
    });
  };

  const calculateTotalPrice = () => {
    return Object.values(selectedItems)
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(selectedItems).length === 0) {
      setMessage("Please select at least one item.");
      return;
    }
    try {
      const orderData = {
        ...formData,
        items: JSON.stringify(
          Object.values(selectedItems).map((item) => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          }))
        ),
      };
      await axios.post("http://localhost:8000/app/order-online/", orderData);
      setMessage("Order placed successfully!");
      setFormData({ name: "", phone: "", address: "" });
      setSelectedItems({});
      navigate("/");
    } catch (err) {
      setMessage("Failed to place order.");
    }
  };

  return (
    <>
      <a href="/" className="link">
        <img src="/images/Logo.svg" alt="Logo" className="order-logo" />
      </a>
      <div className="order-online-container">
        <h2 className="order-online-header">Order Online</h2>
        <form onSubmit={handleSubmit} className="order-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <button
            type="button"
            className="menu-toggle-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "Hide Menu" : "Show Menu"}
          </button>

          <div className={`menu-list ${isMenuOpen ? "active" : ""}`}>
            {menu.map((item) => (
              <div key={item.id} className="menu-item">
                <img src={item.image} alt={item.name} />
                <p className="menu-name">
                  {item.name} - ${item.price}
                </p>
                <div className="menu-actions">
                  <button type="button" onClick={() => addItem(item)}>
                    +
                  </button>
                  <button type="button" onClick={() => removeItem(item.id)}>
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="order-summary">
            <h3>Your Order</h3>
            {Object.keys(selectedItems).length === 0 ? (
              <p className="no-order">No items selected</p>
            ) : (
              <>
                <ul className="order-items-list">
                  {Object.values(selectedItems).map((item) => (
                    <li key={item.id} className="order-item">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="order-item-img"
                      />
                      {item.name} x {item.quantity}
                    </li>
                  ))}
                </ul>
                <h4 className="total-price">Total: ${calculateTotalPrice()}</h4>
              </>
            )}
          </div>

          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </>
  );
};

export default OrderOnline;
