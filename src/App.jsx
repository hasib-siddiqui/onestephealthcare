import React from "react";
import Header from "./header/header";
import Tests from "./components/tests/tests";
import PopularTests from "./components/popularTests/popularTests";
import About from "./components/about/about";
import Appointment from "./components/appointment/appointment";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";
import Wrapper from "./components/wrapper";
import TestimonialsCarousel from "./components/testimonialsCarousel/testimonialsCarousel";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Wrapper>
        <Appointment />
        <Tests />
        <PopularTests />
        <About />
        <TestimonialsCarousel />
      </Wrapper>
      <Footer />
    </>
  );
};
export default App;
