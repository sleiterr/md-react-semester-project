import React from "react";
import s from "./Home.module.css";

const Home = () => {
  return (
    <section className={`${s.sectionHero}`}>
      <div className={`${s.heroContainer}`}>
        <div className={s.titleContainer}>
          <h1 className={s.homeTitle}>Home</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
