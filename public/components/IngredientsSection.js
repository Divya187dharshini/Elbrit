import styles from "../styles/IngredientsSection.module.css";

const IngredientsSection = () => {
  const ingredients = [
    { title: "Vitamin C", description: "Essential for skin and health." },
    { title: "Vitamin B3", description: "Boosts energy and metabolism." },
    { title: "Magnesium", description: "Supports bone and muscle health." },
    { title: "Hyaluronic Acid", description: "Great for skin hydration." },
    { title: "Lactobacillus", description: "Good for gut health." },
  ];

  return (
    <section id="ingredients" className={styles.ingredientsSection}>
      <h2>Better Ingredients</h2>
      <p>Only the best for you! These are the ingredients you can trust.</p>
      <div className={styles.ingredientGrid}>
        {ingredients.map((ingredient, index) => (
          <div className={styles.card} key={index}>
            <h3>{ingredient.title}</h3>
            <p>{ingredient.description}</p>
            <button className={styles.seeMoreButton}>See More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IngredientsSection;
