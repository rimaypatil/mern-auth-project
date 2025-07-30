import { Link } from "react-router-dom";

function Landing() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to the MERN Auth App</h1>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/signup"><button>Sign Up</button></Link>
    </div>
  );
}
export default Landing;
