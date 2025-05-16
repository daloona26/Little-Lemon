import "../css/Nav.css";
const Nav = () => {
  return (
    <>
      <nav className="nav">
        <a href="/" className="link">
          <img src="/images/Logo .svg" alt="Logo" className="logo" />
        </a>
        <ul className="nav-list">
          <li className="list-item">
            <a className="link" href="/">
              Home
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="#about">
              About
            </a>
          </li>{" "}
          <li className="list-item">
            <a className="link" href="#menu">
              Menu
            </a>
          </li>{" "}
          <li className="list-item">
            <a className="link" href="/reservations">
              Reservations
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="#Order-online">
              Order Online
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="#login">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
