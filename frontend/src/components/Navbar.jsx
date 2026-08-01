import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <nav className="navbar-left">
        <a href="/">M Bathroom</a>
      </nav>
      <nav className="navbar-inner">
        <a href="/Frequency">Frequency</a>
        <a href="/FActivity">Friend Activity</a>
        <a href="/Profile">Profile</a>
      </nav>
    </nav>
  );
}

export default Navbar;