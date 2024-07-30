"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

type Props = {
  style: string;
}
const AboutSection3 = ({ style } : Props) => {
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
    <div className={`${style} tf__about_2_area`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft">
            <div className="tf__about_2_img">
              <div className="tf__about_small">
                <img
                  src="images/about_2_img_2.jpg"
                  alt="about us"
                  className="img-fluid w-100"
                />
              </div>
              <div className="tf__about_large counter-box">
                <img
                  src="images/about_2_img_1.jpg"
                  alt="about us"
                  className="img-fluid w-100"
                />
              </div>
              <p>
                <span>
                {isVisible && (
              <CountUp
                start={1}
                end={6}
                duration={5}
                formattingFn={(value) => `${value}+`}
              />
            )}</span> Kurslar
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow fadeInRight">
            <div className="tf__about_2_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>Haqimizda</h5>
                <h2>Bizdagi kurslar.</h2>
              </div>
              <p>
                Bizning o'quv markazimda ta'lim oling va o'z kelajagizni quring.{" "}
              </p>
              <ul>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_1.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Turk tili</h4>
                    <p>
                    Turk tilini biz bilan o'rganish orqali yaxshi natija oling.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_2.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Arab tili</h4>
                    <p>
                    Biz orqali Arab tilini sifatli o'rganing va yuqori natijalarga erishing.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_3.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Ingliz tili</h4>
                    <p>
                    Ingiliz tilini biz bilan o'rganing va yuqori darajaga erishing.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_4.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>SAT</h4>
                    <p>
                    SAT ni biz bilan o'rganing va chet elga o'qishga kiring. .
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 mt_110 xs_mt_100 wow fadeInUp">
            <div className="tf__about_us_counter counter-box d-flex flex-wrap align-items-center">
              <p>
               Kelajak o'z qo'lizda! Biz bilan o'rganing!
              </p>
              <a href="tel: +998771255556">+998771255556</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
