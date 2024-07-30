import React from "react";
import ContactForm from "../form/ContactForm";

const ContactPageSection = () => {
  return (
    <section className="tf__contact_page mt_190 xs_mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-7 col-lg-6 wow fadeInLeft">
            <div className="tf__contact_form">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>Bog'lanish</h5>
                <h2>Biz bilan bog'laning</h2>
              </div>
              <p>
                O'z xabar mulohazalaringiz bizga yuboring!
              </p>
              <ContactForm />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-5 col-lg-6 wow fadeInRight">
            <div className="tf__contact_text">
              <div className="tf__contact_single">
                <div className="icon blue">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>Telefon</h3>
                  <a href="callto:+998771255556">+998771255556</a>
                  
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon orange">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="text">
                  <h3>Email</h3>
                  <a href="mailto:official@owleducation.uz">official@owleducation.uz</a>
                  
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon green">
                <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="text">
                  <h3>Manzil</h3>
                  <p>Toshkent shahar, Yashnobod tumani, Maxtumquli ko'chasi 85/2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-12 wow fadeInUp">
            <div className="tf__contact_map mt_100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d383455.9383689938!2d69.34587295!3d41.336059799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2s!4v1722322276641!5m2!1sen!2s"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageSection;
