"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import NavigationSection from "./NavigationSection";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleMobileNavClose, toggleMobileNavOpen } from "@/redux/features/mobileNavSlice";

const NavbarSection2 = () => {
  const dispatch = useAppDispatch()
  const isMobileNavOpen = useAppSelector(state => state.mobileNav.isMobileNavOpen);
  const handleMobileNavOpen = () => {
    dispatch(toggleMobileNavOpen());
  }
  const handleMobileNavClose = () => {
    dispatch(toggleMobileNavClose())
  } 
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component is unmounted
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Function to handle clicks outside the navigation menu
    const handleClickOutside = (event : MouseEvent) => {
      if (
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target as Node) &&
        isMobileNavOpen
      ) {
        handleMobileNavClose()
      }
    };

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileNavOpen]);
  return (
    <nav
      className={`navbar navbar-expand-lg main_menu_2 ${
        isHeaderFixed ? "menu_fix" : ""
      }`}
      ref={navMenuRef}
    >
      <div className="container">
        <div className="main_menu_2_area">
          <Link className="navbar-brand" href="/">
            <img
              src="images/logo2.png"
              alt="Owl Education"
              className="img-fluid w-100"
            />
          </Link>
          {isMobileNavOpen ? (
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleMobileNavClose}
            >
              <i className="fa fa-times close_icon"></i>
            </button>
          ) : (
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleMobileNavOpen}
            >
              <i className="fa fa-bars menu_icon"></i>
            </button>
          )}

          <NavigationSection
            position=""
            btnPosition={true}
            navRef={navMenuRef}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection2;
