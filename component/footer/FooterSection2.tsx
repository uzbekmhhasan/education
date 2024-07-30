"use client";
import { toggleVideoOpen } from "@/redux/features/videoSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import React from "react";
type Props = {
  style: string;
  logo: string;
}
const FooterSection2 = ({ style, logo } : Props) => {
  const dispatch = useAppDispatch()
  const handleVideoShow = () => {
    dispatch(toggleVideoOpen())
  }  
  return (
    <footer className={style}>
      <div className="container">
        <div className="tf__footer_apply">
          <div className="tf__footer_apply_overlay">
            <a className="venobox" role="button" onClick={handleVideoShow}>
              <i className="fas fa-play"></i>
            </a>
            <h3>Let’s See More About Owl Education!</h3>
            <p>
              There are many variations of passages of agency Lorem Ipsum Fasts
              injecte.
            </p>
            <Link className="apply_btn" href="#">
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      <div className="tf__footer">
        <div className="tf__footer_overlay pt_225">
          <div className="container">
            <div className="tf__footer_2_content_area">
              <div className="row justify-content-between g-4">
                <div className="col-xl-3 col-md-7 col-lg-3">
                  <div className="tf__footer_logo_area">
                    <Link className="footer_logo" href="/">
                      <img src={logo} alt="Owl Education" className="img-fluid w-100" />
                    </Link>
                    <p>
                      Nemo enim ipsam voluptate quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia magni this dolores eos qui
                      ratione .
                    </p>
                    <ul className="d-flex flex-wrap">
                      <li>
                        <Link href="https://t.me/owl_education_uz">
                          <i className="fab fa-telegram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://instagram.com/owl_education_uz" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                      
                    </ul>
                  </div>
                </div>
                
                <div className="col-xl-3 col-md-7 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Bog'lanish</h3>
                    <p>Manzil: Toshkent shahar, Yashnobod tumani, Maxtumquli ko'chasi 85/2</p>
                    <p>
                      <span> Telefon: <Link href='tel: +998771255556'>+998771255556</Link></span>
                      
                    </p>
                    <p>
                      <span>Email: <Link href='mailTo: example@mail.com'>example@mail.com</Link> </span>
                      
                    </p>
                  </div>
                </div>
               

                <div className="col-12">
                  <div className="tf__copyright">
                    <p>Copyright © Owl Education Barcha huquqlar himoylangan</p>
                    <ul className="d-flex flex-wrap">
                      <li>
                        <Link href="/privacy-policy">Privacy policy</Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection2;
