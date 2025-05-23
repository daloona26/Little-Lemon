import "../css/Footer.css";
const Footer = () => {
  return (
    <footer className="footer footer-padding">
      <div className="footer-logo">
        <a href="/" className="link">
          <img src="/images/Logo .svg" alt="Logo" />
        </a>
      </div>
      <div className="footer-sub">
        <h4>Navigation</h4>

        <a href="/" className="link">
          Home
        </a>
        <a className="link" href="#about">
          About
        </a>
        <a className="link" href="#menu">
          Menu
        </a>
        <a className="link" href="/reservations">
          Reservations
        </a>
        <a className="link" href="#order-online">
          Order Online
        </a>
        <a className="link" href="/login">
          Login
        </a>
      </div>
      <div className="footer-sub">
        <h4>Contact</h4>

        <a href="#phone" className="link">
          Phone number
        </a>
        <a className="link" href="#email">
          Email
        </a>
      </div>
      <div className="footer-sub">
        <h4>Social Media Links</h4>

        <a href="https://www.facebook.com/" className="link">
          Facebook
        </a>
        <a className="link" href="https://www.instagram.com/">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
