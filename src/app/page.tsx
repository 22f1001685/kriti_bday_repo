import Kriti from "@/components/Hero";
import ImageCarousel from "@/components/HorizontalScrollCarousel";
import ImageComparison from "@/components/ImageComparison";
import KritiSingh from "@/components/Kriti";
import Footer from "@/components/Footer";
import Demo from "@/components/WishPage";
import FinalText from "@/components/FinalText";

export default function Home() {
  return (
    <main>
      <Kriti />
      <ImageComparison />
      <Demo />
      <KritiSingh />
      <ImageCarousel />
      <FinalText />
      <Footer />
    </main>
  );
}
