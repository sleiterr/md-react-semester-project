import React from "react";
import { MdEmail } from "react-icons/md";
import ContactForm from "../../components/ContactForm/ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className={s.contactContainer}>
          <div className={s.formContainer}>
            <div className={s.descContact}>
              <div className={s.contactContent}>
                <h4 className={s.titleContact}>We're here to help you</h4>
                <h2 className={s.captionContact}>
                  Your <span className={s.textSpan}>MiniShop</span> for Beauty,
                  Fragrances, Furniture & Groceries
                </h2>
                <p className={s.textContact}>
                  This is a semester project created to showcase modern web
                  development skills. Feel free to browse and enjoy!
                </p>
              </div>
              <div className={s.contactInfo}>
                <ul className={s.contactList}>
                  <li className={s.conatctItem}>
                    <MdEmail className={s.contactIcon} />
                    <a
                      href="mailto:minishop@gmail.com"
                      className={s.contactLink}
                    >
                      minishop@gmail.com
                    </a>
                  </li>
                  <li className={s.conatctItem}>
                    <FaPhoneAlt className={s.contactIcon} />
                    <a
                      href="tel:+45 99 99 99 99"
                      className={s.contactLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +45 99 99 99 99
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={s.formBox}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
