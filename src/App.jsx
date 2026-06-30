import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CallToAction from "./components/CallToAction";


function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="tours">
        <Services />
      </section>

      <section id="destinations">
        <Destinations />
      </section>

      <section id="about">
        <WhyChoose />
      </section>

      {/* <CallToAction /> */}
      <section id="contact">
        <Footer />
      </section>

      <WhatsAppButton />

      {/* <Footer /> */}
    </>
  );
}

export default App;