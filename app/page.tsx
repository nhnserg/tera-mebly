import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <div className="mt-14">
        <Footer />
      </div>
    </main>
  );
}
