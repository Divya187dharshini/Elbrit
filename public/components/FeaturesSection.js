import React from "react";
import styles from "../styles/FeaturesSection.module.css";

const features = [
  { title: "Clinically Studied", description: "Proven efficacy and safety." },
  { title: "Vegetarian Friendly", description: "100% plant-based products." },
  { title: "Made in India", description: "Locally manufactured." },
  { title: "Free Shipping", description: "Get products delivered free." },
  { title: "No Risk", description: "Money-back guarantee." },
  { title: "GMO Free", description: "No genetically modified ingredients." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className={styles.features}>
      <h2>Features</h2>
      <div className={styles.cards}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
