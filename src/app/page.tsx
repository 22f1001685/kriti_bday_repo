import Megha from "@/components/Hero";
import ImageCarousel from "@/components/HorizontalScrollCarousel";
import ImageComparison from "@/components/ImageComparison";
import FriendshipTimeline from "@/components/FriendshipTimeline";
import Footer from "@/components/Footer";
import Demo from "@/components/WishPage";
import FinalText from "@/components/FinalText";

export default function Home() {
  return (
    <main>
      <Megha />
      <ImageComparison />
      <Demo />
      <FriendshipTimeline />
      <ImageCarousel />
      <FinalText />
      <Footer />
    </main>
  );
}
