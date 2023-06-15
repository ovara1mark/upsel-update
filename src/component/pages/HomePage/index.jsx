import react from "react";
import {
  AboutUs,
  ContactUs,
  FAQSection,
  Footer,
  Process,
  Service,
  Story,
} from "../../molecules";
import { PageTemplate } from "../../templates";
import Slider from "../../organism/Slider";

export const HomePage = () => {
  return (
    <>
      <PageTemplate>
        <Slider />
        <Story />
        <AboutUs />
        <Service />
        <Process />

        <FAQSection />
        <ContactUs />
        <Footer />
      </PageTemplate>
    </>
  );
};
