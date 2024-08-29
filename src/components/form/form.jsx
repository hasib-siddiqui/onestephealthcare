import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";
import "./form.css";
import { bloodTestsList } from "../../data/data";

const Form = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedVisit, setSelectedVisit] = useState("");

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    const validInput = input.replace(/[^0-9]/g, "").slice(0, 10);
    setPhoneNumber(validInput);
  };

  return (
    <div className="form-container" id="form">
      <div className="form-head flex items-center justify-center flex-col">
        <SlCalender className="cal-icon" />
        <h2>Make an Appointment</h2>
      </div>
      <form
        action="https://formspree.io/f/mzzpokyl"
        method="POST"
        target="_blank"
      >
        <input type="text" name="name" required placeholder="Your Name" />
        <input
          type="date"
          name="appointmentDate"
          required
          placeholder="Appointment date"
        />

        <select id="blood-tests" name="bloodTest" className="p-[10px]">
          {bloodTestsList.map((test) => (
            <option key={test.value} value={test.value}>
              {test.text}
            </option>
          ))}
        </select>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-between gap-2">
            <input
              type="radio"
              name="visitType"
              value="Lab Visit"
              onChange={() => setSelectedVisit("Lab Visit")}
            />
            <label className="text-md font-medium">Lab Visit</label>
          </div>
          <div className="flex items-center justify-between gap-2">
            <input
              type="radio"
              name="visitType"
              value="Home Visit"
              onChange={() => setSelectedVisit("Home Visit")}
            />
            <label className="text-md font-medium">Home Visit</label>
          </div>
        </div>

        {selectedVisit === "Home Visit" && (
          <div className="w-full">
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              className="mt-2 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        )}

        <input
          type="tel"
          name="phoneNumber"
          required
          placeholder="Enter a contact number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          pattern="\d{10}"
          maxLength={10}
        />

        <button type="submit" className="bg-[--bgBlue] text-white py-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
