import React from "react";
import "../ourteam/ourteam.css";

const OurTeam = () => {
  return (
    <div className="team-container">
      <h2 className="team-heading">Meet Our Expert Team</h2>
      <div className="team-grid">
        <div className="team-member">
          <h3 className="team-role">DMLT</h3>
          <h4 className="team-name">Sadaf Siddiqui</h4>
          <p className="team-description">
            Sadaf is our lead laboratory technician, ensuring accurate and
            reliable test results with her extensive expertise in DMLT.
          </p>
        </div>
        <div className="team-member">
          <h3 className="team-role">DMLT</h3>
          <h4 className="team-name">Aisha Siddiqui</h4>
          <p className="team-description">
            Aisha specializes in medical lab technology, bringing precision and
            dedication to every diagnostic test she performs.
          </p>
        </div>
        <div className="team-member">
          <h3 className="team-role">Phlebotomist</h3>
          <h4 className="team-name">Mujeeb Siddiqui</h4>
          <p className="team-description">
            Mujeeb is an experienced phlebotomist, known for his gentle touch
            and professionalism in handling blood sample collection.
          </p>
        </div>
        <div className="team-member">
          <h3 className="team-role">Marketing</h3>
          <h4 className="team-name">Fazil Shaikh</h4>
          <p className="team-description">
            Fazil heads our marketing team, ensuring that our services reach
            those who need them the most through strategic outreach and
            communication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
