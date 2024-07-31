"use client";
import { toggleVideoOpen } from "@/redux/features/videoSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import React from "react";

const BannerSection = () => {
  const dispatch = useAppDispatch()
  const handleVideoShow = () => {
    dispatch(toggleVideoOpen())
  }
  return (
    <section className="tf__banner">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-8">
            <div className="tf__banner_text wow fadeInUp">
              <h5>Xush Kelibsiz!</h5>
              <h1>
              O'rgan <span>Yetakchi bo'l</span> O'zgartir!
              </h1>
              <p>
              Owl Education - bu shunchaki platforma emas; bu ta'lim qiziqarli sarguzashtga aylanadigan tarbiyaviy makon. Qiziqishni yoqish va yosh ongni ilhomlantirish ishtiyoqi bilan.</p>
              <ul className="d-flex flex-wrap align-items-center">
                <li>
                  <Link className="common_btn" href="/about">
                    Ko'prq
                  </Link>
                </li>
                <li>
                  <a
                    className="venobox play_btn"
                    role="button"
                    onClick={handleVideoShow}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
