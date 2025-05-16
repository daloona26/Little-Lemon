import "../css/Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero" id="about">
        <div className="description">
          <h1 className="title">Little Lemon</h1>
          <h4 className="sub-heading">Chicago</h4>
          <p className="text">
            Little lemon is the best restaurant in chicago to have the best
            service and diffrent choices of healthy plates and reservations
          </p>
          <a href="/booking">
            <button className="btn">Reserve a table</button>
          </a>
        </div>
        <div className="restaurant">
          <img src="/images/restauranfood.jpg" alt="Restaurant Food" />
        </div>
      </div>
    </>
  );
};

export default Hero;
