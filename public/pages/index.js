import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import IngredientsSection from "../components/IngredientsSection";
import BlogSection from "../components/BlogsSection";

// Add Footer import if required
 import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <IngredientsSection />
        <BlogSection />
        {/* Uncomment Footer component if it exists */}
        { <Footer /> }
      </main>
    </div>
  );
}
