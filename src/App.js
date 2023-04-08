import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Error,
  Products,
  SingleProduct,
  Dashboard,
  Login,
  ProtectedRoute,
} from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SharedLayout from "./shared/SharedLayout";
import ProductLayout from "./shared/ProductLayout";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<ProductLayout />}>
            <Route index element={<Products />} />
            <Route path=":id" element={<SingleProduct />} />
          </Route>
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
