import Nav from "./components/Nav";
import Hero from "./components/Hero";
import RedStrip from "./components/RedStrip";
import AktionenSection from "./components/AktionenSection";
import GallerySection from "./components/GallerySection";
import BaeckerSection from "./components/BaeckerSection";
import PartnerSection from "./components/PartnerSection";
import ZahlungSection from "./components/ZahlungSection";
import UeberSection from "./components/UeberSection";
import FaqSection from "./components/FaqSection";
import StatsSection from "./components/StatsSection";
import ReviewsSection from "./components/ReviewsSection";
import InstaSection from "./components/InstaSection";
import KontaktSection from "./components/KontaktSection";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

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
        <PartnerSection />
        <ZahlungSection />
        <UeberSection />
        <FaqSection />
        <StatsSection />
        <ReviewsSection />
        <InstaSection />
        <KontaktSection />
      </main>
      <Footer />
      <Popup />
    </>
  );
}
