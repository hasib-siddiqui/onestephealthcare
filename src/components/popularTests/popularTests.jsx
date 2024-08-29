import React, { useState } from "react";
import { popularTestData } from "../../data/data";
import { FaWhatsapp } from "react-icons/fa";

const PopularTests = () => {
  const [activeTab, setActiveTab] = useState("test1");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="my-28">
      <h2 className="text-[--bgBlue] text-center text-5xl my-20">
        Most Common Test&apos;s
      </h2>

      <div className="mt-5 flex flex-col md:flex-row px-8">
        <div className="md:w-1/2">
          <ul className="nav flex flex-col">
            {popularTestData.map((test) => (
              <li key={test.id} className="nav-item">
                <button
                  className={`nav-link w-full text-left font-semibold py-3 px-4 border-b ${
                    activeTab === test.id ? "text-blue-600 font-bold" : ""
                  }`}
                  onClick={() => handleTabClick(test.id)}
                >
                  {test.name}
                  <img
                    width="18"
                    src="/newdata/images/right-arrow.svg"
                    alt=""
                    className="inline-block ml-2"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-1/2 md:pl-4">
          {popularTestData.map((test) => (
            <div
              key={test.id}
              className={`tab-pane ${
                activeTab === test.id ? "block" : "hidden"
              }`}
            >
              <div className="test-box p-4 bg-[--bgBlue] rounded-md shadow-lg">
                {test.img && (
                  <img
                    src={test.img}
                    alt={test.name}
                    height="200"
                    className="w-full rounded-md mb-4"
                  />
                )}
                <div className="test-content-box">
                  <h5 className="mb-3 text-white font-bold">{test.name}</h5>
                  <h6 className="mb-2 text-white">
                    Why would I need this test?
                  </h6>
                  <p className="text-white mb-4">{test.description}</p>
                  <div className="flex items-center gap-10">
                    <a
                      href="#form"
                      data-id={test.name}
                      className="test-book-btn book_now bg-blue-600 text-white px-4 py-2 rounded-md"
                    >
                      Book Now
                    </a>
                    <h3 className="text-white">|</h3>
                    <a
                      href="https://wa.me/919967646399"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center">
                        <FaWhatsapp className="whatsapp-icon" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularTests;
