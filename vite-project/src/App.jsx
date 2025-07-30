import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './landing';
import Login from './login';
import Signup from './signup';
import Home from './home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
