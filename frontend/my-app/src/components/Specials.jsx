import "../css/Specials.css";

const Specials = () => {
  return (
    <>
      <section className="container">
        <div className="top">
          <h2>Specials</h2>
          <button className="btn">Online Menu</button>
        </div>
        <div className="buttom">
          <ul className="list">
            <li className="item">
              <img src="/images/greek salad.jpg" alt="Greek Salad" />
              <div className="plate">
                <div className="head">
                  <h4 className="name">Greek Salad</h4>
                  <p className="price">$12.99</p>
                </div>
                <p className="description">
                  Juisy country salad, crisp cucumber, sliced red onion, green
                  pepper, crumbly feta cheese and plamp clamata olives
                </p>
                <a href="#delivery" className="delivery">
                  Order a delivery{" "}
                  <img src="/images/motocycle.png" alt="moto" />
                </a>
              </div>
            </li>
            <li className="item">
              <img src="/images/lemon dessert.jpg" alt="Greek Salad" />
              <div className="plate">
                <div className="head">
                  <h4 className="name">Lemon Dessert</h4>
                  <p className="price">$12.99</p>
                </div>
                <p className="description">
                  Juisy country salad, crisp cucumber, sliced red onion, green
                  pepper, crumbly feta cheese and plamp clamata olives
                </p>
                <a href="#delivery" className="delivery">
                  Order a delivery{" "}
                  <img src="/images/motocycle.png" alt="moto" />
                </a>
              </div>
            </li>
            <li className="item">
              <img src="/images/bruchetta.jpeg" alt="bruchetta" />
              <div className="plate">
                <div className="head">
                  <h4 className="name">Bruchetta</h4>
                  <p className="price">$12.99</p>
                </div>
                <p className="description">
                  Juisy country salad, crisp cucumber, sliced red onion, green
                  pepper, crumbly feta cheese and plamp clamata olives
                </p>
                <a href="#delivery" className="delivery">
                  Order a delivery{" "}
                  <img src="/images/motocycle.png" alt="moto" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Specials;
