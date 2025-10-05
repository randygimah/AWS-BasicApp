// Styles
import React from "react";
import "./default.scss";
import { Outlet } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <main className="main" role="main">
        <Outlet />
        {children}
      </main>
    </>
  );
};

export default MainLayout;
