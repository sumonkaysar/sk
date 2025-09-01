import Footer from "@/components/layouts/MainLayout/Footer";
import Navbar from "@/components/layouts/MainLayout/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grow-1 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
