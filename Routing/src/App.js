import logo from "./logo.svg";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/home";
import { Login } from "./pages/login/login";
import { About } from "./pages/about/about";
import { Cart } from "./pages/cart/cart";
import { PrivateRouting } from "./context/routingContext/routingCon";

function App() {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        <Link to="/home"> Home </Link> ||
        <Link to="/cart"> cart </Link> ||
        <Link to="/about"> about us </Link> ||
        <Link to="/login"> login </Link>
      </h2>

      <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/cart" element={
        <PrivateRouting>
            <Cart />
        </PrivateRouting>
            } />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
