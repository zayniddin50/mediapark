import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Header />
      <main style={{ background: "#f2f3f5" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
