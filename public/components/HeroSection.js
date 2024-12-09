import React from "react";
import Image from "next/image";
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>Essential Vitamins</h1>
        <p>Online Medical Supplies</p>
        <p>Get your Vitamins & Minerals</p>
        <button>Explore</button>
      </div>
      <div className={styles.image}>
        <Image
          src="/product-image.png"
          alt="Essential Vitamins"
          width={300}
          height={300}
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
