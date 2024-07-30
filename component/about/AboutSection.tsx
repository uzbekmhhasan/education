'use client'
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onVisibilityChange = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  };

  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const targetElement = document.querySelector(".counter-box");
  
    if (targetElement) {
      intersectionObserverRef.current = new IntersectionObserver(
        onVisibilityChange,
        {
          threshold: 0.5,
        }
      );
  
      intersectionObserverRef.current.observe(targetElement);
    }
  
    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
    };
  }, []);
  return (
    <section className="tf__about mt_250 xs_mt_195">
      <div className="container">
        <div className="tf__about_top wow fadeInUp">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="tf__about_top_img">
                <img
                  src="images/about_top_img.jpg"
                  alt="about"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="tf__about_top_text">
                <div className="tf__about_top_text_center">
                  <h4>Biz bilan ta'lim oling</h4>
                  <p>
                  Biz bilan sifatli ta'lim olib chet el universitutlarida talaba bo'lish imkoniyatlariga ega bo'ling.
                  </p>
                </div>
                <a href="#" className="common_btn">
                  Bog'lanish
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-md-9 col-lg-6 wow fadeInLeft">
            <div className="tf__about_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>Haqimizda</h5>
                <h2>O'qi,o'rgan,izlan!.</h2>
              </div>
              <p>
              Siz farzandingiz uchun eng yaxshisini xoxlaydigan ota-onasiz.{" "}
              </p>
              <ul>
                <li>Siz o'z tajribasini isbotlagan yaxshi  va samarali o'qituvchini xoxlaysiz..</li>
                <li>Siz ham farzandingiz uchun eng yaxshi narsalarni xoxlaydigan o'qituvchini xoxlaysiz..</li>
                <li>Siz farzandingizni nafaqat maktabga, balki hayotga tayyorlaydigan o'rgatuvchi murabbiyni xoxlaysiz..</li>
                <li>Siz raximdil, hamdard va farzandingizga g'amxo'r o'qituvchini xoxlaysiz..</li>
                <li>Unday bo'lsa bizning O'quv markazimizni tanlab adashmadingiz.</li>
              </ul>
              <Link href="/about" className="common_btn">
                Ko'proq
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-sm-9 col-md-8 col-lg-6 wow fadeInRight">
            <div className="tf__about_img">
              <img
                src="images/about_img.png"
                alt="about"
                className="img-fluid w-100"
              />
              <div className="text counter-box">
                <i className="far fa-check-circle"></i>
                <h3>
                {isVisible && (
                  <CountUp
                    start={1}
                    end={ 20}
                    duration={5}
                    formattingFn={(value) => `${value}`}
                  />
                )}
                </h3>
                <p>Oq'ituvchi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
