import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1C1C]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
