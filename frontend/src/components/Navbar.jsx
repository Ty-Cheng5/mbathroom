import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Home</a>
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
