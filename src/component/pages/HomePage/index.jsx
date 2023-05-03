import react from "react";
import {
  AboutUs,
  ContactUs,
  FAQSection,
  Footer,
  HeroSection,
  HeroSectionThree,
  HeroSectionTwo,
  Process,
  Service,
  Story,
} from "../../molecules";
import { PageTemplate } from "../../templates";

export const HomePage = () => {
  return (
    <>
      <PageTemplate>
        {/* <HeroSection />
        <HeroSectionTwo />
        <HeroSectionThree /> */}
        <Story />
        <AboutUs />
        <Service />
        {/* <Process />
        <FAQSection />
        <ContactUs />
        <Footer /> */}
      </PageTemplate>
    </>
  );
};
