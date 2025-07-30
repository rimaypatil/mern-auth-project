import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({ name: "",phone: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10 || !/^\d{10}$/.test(formData.phone)) {
    alert("Phone number must be exactly 10 digits.");
    return;
  }
    try {
      await axios.post("/api/auth/signup", formData);
      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSignup} style={{ textAlign: "center" }}>
      <h2>Signup</h2>
      <input name="name" placeholder="Name" onChange={handleChange} /><br />
       <input name="phone" placeholder="phone no."  maxLength="10"  onChange={handleChange} /><br />
      <input name="email" placeholder="Email"  onChange={handleChange} /><br />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} /><br />
      <button type="submit">Sign Up</button>
    </form>
  );
}
export default Signup;
