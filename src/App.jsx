import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load below-the-fold components
const Services = lazy(() => import("./components/Services"));
const Destinations = lazy(() => import("./components/Destinations"));
const WhyChoose = lazy(() => import("./components/WhyChoose"));
const Footer = lazy(() => import("./components/Footer"));
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));

const SectionLoader = () => (
  <div
    className="flex items-center justify-center min-h-[300px] w-full"
    aria-label="Loading section"
  >
    <div className="w-8 h-8 border-4 border-t-transparent border-[#F78F30] rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="tours">
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
      </section>

      <section id="destinations">
        <Suspense fallback={<SectionLoader />}>
          <Destinations />
        </Suspense>
      </section>

      <section id="about">
        <Suspense fallback={<SectionLoader />}>
          <WhyChoose />
        </Suspense>
      </section>

      <section id="contact">
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </section>

      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>

      {/* <Footer /> */}
    </>
  );
}

export default App;
