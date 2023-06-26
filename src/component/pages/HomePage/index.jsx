import react from "react";
import {
  AboutUs,
  ContactUs,
  FAQSection,
  Footer,
  Process,
  Service,
  Story,
  HeroSection,
} from "../../molecules";
import { PageTemplate } from "../../templates";
import Slider from "../../organism/Slider";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const HomePage = () => {
  return (
    <>
      <PageTemplate>
        <HeroSection />
        {/* <Slider /> */}
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
