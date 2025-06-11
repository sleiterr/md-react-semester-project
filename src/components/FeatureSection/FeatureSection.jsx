import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import { SiMoneygram } from "react-icons/si";
import s from "./FeatureSection.module.css";

const FeatureSection = () => {
  return (
    <section>
      <div className="container">
        <div className={s.featureContainer}>
          <ul className={s.featureList}>
            <li className={s.featureItem}>
              <TbTruckDelivery className={s.featureIcon} />
              <h4 className={s.featureTitle}>Free Shipping</h4>
              <p className={s.featureText}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores at autem dolores repudiandae amet non.
              </p>
            </li>
            <li className={s.featureItem}>
              <MdSupportAgent className={s.featureIcon} />
              <h4 className={s.featureTitle}>Support 24/7</h4>
              <p className={s.featureText}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores at autem dolores repudiandae amet non.
              </p>
            </li>
            <li className={s.featureItem}>
              <SiMoneygram className={s.featureIcon} />
              <h4 className={s.featureTitle}>Money Return</h4>
              <p className={s.featureText}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores at autem dolores repudiandae amet non.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
