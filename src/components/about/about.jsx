import React from "react";

const features = [
  {
    id: 1,
    imgSrc:
      "https://www.One Step Health Careindia.com/newdata/images/new-campaign-choose-icon1.svg",
    description: "Presence in",
    highlight: "220+",
    text: "Cities",
  },
  {
    id: 2,
    imgSrc:
      "https://www.One Step Health Careindia.com/newdata/images/new-campaign-choose-icon3.svg",
    description: "",
    highlight: "4000+",
    text: "Tests and Profiles",
  },
  {
    id: 3,
    imgSrc: "/newdata/images/new-campaign-choose-icon3.svg",
    description: "",
    highlight: "175+",
    text: "Clinical Labs",
  },
  {
    id: 4,
    imgSrc: "/newdata/images/new-campaign-choose-icon4.svg",
    description: "Team of",
    highlight: "2200+",
    text: "Experts",
  },
  {
    id: 5,
    imgSrc: "/newdata/images/new-campaign-choose-icon5.svg",
    description: "",
    highlight: "40+",
    text: "Years of Service",
  },
  {
    id: 6,
    imgSrc: "/newdata/images/new-campaign-choose-icon6.svg",
    description: "",
    highlight: "50 M+",
    text: "Tests performed",
  },
];

const About = () => {
  return (
    <>
      <h2 className="text-[--bgBlue] text-center text-5xl my-20" id="about">
        About us
      </h2>
      <section className="flex items-center sm:gap-[200px] w-full max-sm:flex-col">
        <img
          alt="One Step Health Care Image"
          className="choose-metro-img lazyloaded rounded-xl sm:w-[40%] sm:h-[300px] max-sm:mb-5"
          src="https://plus.unsplash.com/premium_photo-1663011406193-7beb9d225d31?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="">
              <h3 className="text-black sm:mb-12 mb-5 font-semibold text-2xl md:text-4xl">
                Why choose One Step Health Care Healthcare?
              </h3>
              <div className="flex flex-wrap">
                {features.map((feature) => (
                  <div key={feature.id} className="w-full lg:w-1/2 mb-4 ">
                    <div className="flex items-center text-black ">
                      <div className="choose-feat-img bg-[--bgBlue] p-2 rounded-full">
                        {/* <img
                        className="lazyloaded w-10"
                        src={feature.imgSrc}
                        alt={`${feature.text} Icon`}
                      /> */}
                      </div>
                      <h5 className="ml-3 text-black text-xl">
                        {feature.description} <b>{feature.highlight}</b>
                        {feature.text}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
