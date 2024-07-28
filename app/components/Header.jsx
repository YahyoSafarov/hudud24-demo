"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Nav from "./Navbar/Nav2";
import "../../public/assets/css/header.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    // Event listener qo'shish
    window.addEventListener("scroll", handleScroll);

    // Cleanup qilish
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isSticky ? "sticky-header" : ""}>
      <Navbar />
      <nav
        className={`border-y border-[#bbbdbf] ${isSticky ? "sticky-nav" : ""}`}
      >
        <Nav />
      </nav>
    </header>
  );
};

export default Header;
