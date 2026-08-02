import "./Navbar.css";
// Importing the image gives us its web address, which goes in the img's src below.
import logo from "../photos/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      {/* The logo is wrapped in a link so clicking it goes back to the home page.
          alt is the text screen readers read out, since the logo is an image. */}
      <a href="/" className="navbar-brand">
        <img src={logo} alt="M Bathroom" className="navbar-logo" />
      </a>
      <div className="navbar-inner">
        <a href="/Frequency">Frequency</a>
        <a href="/FActivity">Friend Activity</a>
        <a href="/Profile">Profile</a>
        <button type="button" className="navbar-cta">
          Write a Review
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
