import React from "react";
import img from "../images/AlfJourney/Team9.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          <div className="rounded-2xl lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img
              alt="Engaing PCs"
              className=" h-full w-full object-cover rounded-t float-right"
              src={img}
            />
          </div>
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="mb-5 md:text-2xl text-2xl font-bold text-blue-900">
              Our Mission
            </h3>
            <div>
              <p className="my-3 text-xl text-teal-900 font-semibold">
                To create a world for everyone - producers, consumers,
                enterprises, and entrepreneurs.
              </p>
            </div>
            <h3 className="mb-5 md:text-2xl text-3xl font-bold text-blue-900">
              Our Vision
            </h3>
            <div>
              <p className="my-3 text-xl text-teal-900 font-semibold">
                We envision enhancing livelihoods of 1 million economically
                disadvantaged households directly by March 2028.
              </p>
            </div>
            <Link
              to="/contact"
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
            >
              Contact us
              <svg
                className="w-4 h-4 ml-1 group-hover: translate-x-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
