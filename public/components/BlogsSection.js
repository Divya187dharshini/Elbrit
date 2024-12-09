import styles from "../styles/BlogsSection.module.css";

const BlogSection = () => {
  const blogs = [
    { title: "The Benefits of Turmeric & Ginger", date: "23 July 2023" },
    { title: "Understanding Vitamins and Minerals", date: "25 July 2023" },
    { title: "How Supplements Can Help You", date: "27 July 2023" },
  ];

  return (
    <section id="blog" className={styles.blogSection}>
      <h2>Latest News</h2>
      <div className={styles.blogGrid}>
        {blogs.map((blog, index) => (
          <div className={styles.blogCard} key={index}>
            <div className={styles.blogImage}>
              {/* Placeholder for blog images */}
              <img src="/images/blog-placeholder.png" alt="Blog" />
            </div>
            <div className={styles.blogContent}>
              <p className={styles.blogDate}>{blog.date}</p>
              <h3>{blog.title}</h3>
              <button className={styles.readMoreButton}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;

