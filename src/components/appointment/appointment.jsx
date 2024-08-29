import React from "react";
import Carousel from "../carousel/carousel";
import Form from "../form/form";
import "./appointment.css";

const Appointment = () => {
  return (
    <>
      <h2 className="text-[--bgBlue] text-center text-5xl my-20">
        Book Your Appointment Now!!
      </h2>
      <div className="heroSection">
        <Carousel />
        <Form />
      </div>
    </>
  );
};

export default Appointment;
