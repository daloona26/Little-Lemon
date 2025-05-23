import "../css/About.css"

const About = () => {
  return (
    <section className="about">
      <div className="about-desc">
        <h1 className="about-title">Little Lemon</h1>
        <h4>chicago</h4>
        <p>
          Meals are ordered by professional crew and they are very healthy and
          tasty.The chef is a professional in healthy food that has the same
          taste od ohteer food
        </p>
      </div>
      <div className="chefs">
        <img  className="img1" src="/images/Mario and Adrian A.jpg" alt="chefs" />
        <img className="img2" src="/images/Mario and Adrian B.jpg" alt="chefs" />
      </div>
    </section>
  );
};

export default About;
