import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
   const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) {
      navigate("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Welcome, {user.name}</h2>

      <table border="1" style={{ margin: "0 auto", padding: "10px" }}>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        </tbody>
      </table>

      <br />
      <button onClick={logout}>Logout</button>
    </div>
  );
}
export default Home;
