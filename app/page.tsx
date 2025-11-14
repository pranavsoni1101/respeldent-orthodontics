import AboutSnapshot from "@/components/home-layouts/about-snapshot";
import SectionFaqResources from "@/components/home-layouts/faq";
import Hero, { Hero2 } from "@/components/home-layouts/hero";
import OurEthos from "@/components/home-layouts/our-ethos";
import OurEthosCarousel from "@/components/home-layouts/our-ethos-carousel";
import SectionProof from "@/components/home-layouts/section-proof";
import { TreatmentsOverview } from "@/components/home-layouts/treatments";

const Home = () => {
  return (
    <>
      <Hero
        // headline="Smiles that shine out"
        // subheadline="Personalized orthodontic care that’s gentle, precise, and evidence-based."
        // imageSrc="/images/hero-resplendent.jpg"
        // imageAlt="Confident smile after orthodontic treatment"
      />
      <Hero2 />
      <AboutSnapshot />
      <OurEthos />
      <OurEthosCarousel />
      <TreatmentsOverview />
      <SectionProof />
      <SectionFaqResources />
    </>
  );
};
export default Home;
