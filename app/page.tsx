import Nav from "./components/Nav";
import Hero from "./components/Hero";
import RedStrip from "./components/RedStrip";
import AktionenSection from "./components/AktionenSection";
import GallerySection from "./components/GallerySection";
import BaeckerSection from "./components/BaeckerSection";
import FirmenSection from "./components/FirmenSection";
import UeberSection from "./components/UeberSection";
import FutureSection from "./components/FutureSection";
import FaqSection from "./components/FaqSection";
import StatsSection from "./components/StatsSection";
import ReviewsSection from "./components/ReviewsSection";
import InstaSection from "./components/InstaSection";
import KontaktSection from "./components/KontaktSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <RedStrip />
        <AktionenSection />
        <GallerySection />
        <BaeckerSection />
        <FirmenSection />
        <UeberSection />
        <FutureSection />
        <FaqSection />
        <StatsSection />
        <ReviewsSection />
        <InstaSection />
        <KontaktSection />
      </main>
      <Footer />
    </>
  );
}
