import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Movies from "./components/Movies";
import ManageMovies from "./components/ManageMovies";
import AddMovie from "./components/AddMovie";
import UpdateMovie from "./components/UpdateMovie";
import CustomerRegister from "./components/CustomerRegister";
import CustomerLogin from "./components/CustomerLogin";
import AdminLogin from "./components/AdminLogin";
import AddAdmin from "./components/AddAdmin";
import SystemAdminLogin from "./components/SystemAdminLogin";
import HandleSystem from "./components/HandleSystem";
import Customers from "./components/Customers";
import Admins from "./components/Admins";
import UpdateAdmin from "./components/UpdateAdmin";
import Bookings from "./components/Bookings";
import CartLogin from "./components/CartLogin";
import Cart from "./components/Cart";
import Payments from "./components/Payments";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/manageMovies" element={<ManageMovies />} />
          <Route path="/addMovie" element={<AddMovie />} />

          <Route path="/updateMovie/:id" element={<UpdateMovie />} />

          <Route path="/addCustomer" element={<CustomerRegister />} />
          <Route path="/customers" element={<Customers />} />

          <Route path="/" element={<CustomerLogin />} />

          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/sysAdminLogin" element={<SystemAdminLogin />} />
          <Route path="/addAdmin" element={<AddAdmin />} />
          <Route path="/admins" element={<Admins />} />
          <Route path="/updateAdmin/:id" element={<UpdateAdmin />} />

          <Route path="/handleSystem" element={<HandleSystem />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/payments" element={<Payments />} />

          <Route path="/cartLogin" element={<CartLogin />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
