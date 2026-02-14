import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div style={{ padding: "4rem", textAlign: "center" }}>
      <h1>Welcome to LifeSafe</h1>
      <p>Your secure digital healthcare and medical records platform.</p>


      <Link to="/login">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default Welcome;
