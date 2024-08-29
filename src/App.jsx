import React from "react";
import Header from "./header/header";
import Tests from "./components/tests/tests";
import PopularTests from "./components/popularTests/popularTests";
import About from "./components/about/about";
import Appointment from "./components/appointment/appointment";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Appointment />
      <Tests />
      <PopularTests />
      <About />
      <Footer />
    </>
  );
};
export default App;
