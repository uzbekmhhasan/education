"use client";
import React from "react";
import Navlink from "./Navlink";
import SubNavlink from "./SubNavlink";
import { useAppSelector } from "@/redux/hooks";

type Props = {
  position: string;
  btnPosition: boolean;
  navRef?: React.RefObject<HTMLDivElement>;
}

const NavigationSection = ({ position, btnPosition, navRef }: Props) => {
  const isMobileNavOpen = useAppSelector(state => state.mobileNav.isMobileNavOpen);
  return (
    <div
    ref={navRef}
    className={`collapse navbar-collapse ${isMobileNavOpen ? "show" : ""}`}
    id="navbarNav"
  >
    <ul className={`navbar-nav ${position}`}>
      <li className="nav-item">
        <a className="nav-link" href="https://owleducation.zu">
          Bosh sahifa
        </a>
        </li>
      <li className="nav-item">
        <Navlink href="/about">Haqimizda</Navlink>
      </li>
      
    
     
      <li className="nav-item">
        <Navlink href="/contact">Bog'lanish</Navlink>
      </li>
      {btnPosition ? null : (
        <li className="nav-item">
          <a className="nav-link common_btn" href="tel://+998771255556">
            +998771255556
          </a>
        </li>
      )}
    </ul>
    {btnPosition ? (
      <a className="common_btn_2 ms-auto" href="#">
        Ko'proq
      </a>
    ) : null}
  </div>
  );
};

export default NavigationSection;
