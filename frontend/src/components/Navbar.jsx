import "./Navbar.css";
// Importing the image gives us its web address, which goes in the img's src below.
// This is the cropped copy of restroom.png, trimmed down to just the sign.
import restroomSign from "../photos/restroomsign.png";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        <img src={restroomSign} alt="M Bathroom" className="navbar-logo" />
      </a>
      <div className="navbar-inner">
        <a href="/Frequency">Frequency</a>
        <a href="/FActivity">Friend Activity</a>
        <a href="/Profile">Profile</a>
        <a href="/WriteReview" className="navbar-cta">
          Write a Review
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
