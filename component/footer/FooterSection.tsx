import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="tf__footer mt_100">
      <div className="tf__footer_overlay pt_75">
        <div className="container">
          <div className="row justify-content-between g-4">
            <div className="col-xl-3 col-sm-10 col-md-7 col-lg-6">
              <div className="tf__footer_logo_area">
                <Link className="footer_logo" href="/">
                  <img
                    src="/images/footer_logo.png"
                    alt="Owl Education"
                    className="img-fluid w-100"
                  />
                </Link>
                <p>
                  Farzandingiz bizni o'quv markazda o'qitib afsuslanmaysiz!
                </p>
                <ul className="d-flex flex-wrap">
                  <li>
                    <a href="https://t.me/owl_education_uz">
                      <i className="fab fa-telegram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/owl_education_uz">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
         
            <div className="col-xl-3 col-sm-10 col-md-7 col-lg-col-lg-6">
              <div className="tf__footer_content xs_mt_30">
                <h3>Bog'lanish</h3>
                <p>Manzil: Toshkent shahar, Yashnobod tumani, Maxtumquli ko'chasi 85/2</p>
                <p>
                  <span> Telefon: <Link href='tel: +998771255556'>+998771255556</Link></span>
                  
                </p>
                <p>
                  <span>Email: <Link href='mailTo: example@mail.com'>official@owleducation.uz</Link> </span>
                 
                </p>
              </div>
            </div>
            

                <div className="col-12">
                  <div className="tf__copyright">
                    <p>Copyright © Owl Education </p>
                   <p>Barcha huquqlar himoylangan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
