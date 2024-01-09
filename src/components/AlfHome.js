import React from "react";
import { Link } from "react-router-dom";
import CarouselWithContent from "./AlfHomeCarousel";


// import Img from "../images/AlfJourney/Team9.jpg";

const AlfHome = () => {
  return (
    <>
    <div className="AlfHCarousel">
     <CarouselWithContent  /> 
   
     </div>
      <div className="AlfHome" id="AlfHome">
        <div
          className="overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-fit"
          data-aos="zoom-in"
        >
          <div
            className="lg:w-1/2  justify-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h6 className="mb-2 mt-1 md:text-2xl text-3xl font-bold text-blue-900">
              Reimagine Livelihoods
            </h6>
            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
              <p className="text-justify text-sm text-teal-900">
                We established Access Livelihoods in 2005 in our quest to find
                effective ways to solve the persistent problems faced in the
                livelihoods of economically marginalized communities. Our work
                across 26 states in India over the last seventeen years has
                helped us create and test new livelihood models that transform
                producers' lives and usher greater self-reliance. Through our
                Beehive model for building producer enterprises, we presently
                partner over 75,000 farmers, weavers and tribal farmers in
                building 68 producer companies in five states of India. We also
                work at the macro level, with innovative platforms that seek to
                shape the livelihood environment.
                {/* <a href="/alc-overview" target="_blank" rel="noreferrer">
                    <img
                      src={"./images/ALC-India-Factsheet.jpg"}
                      alt="Fact_Sheet"
                    ></img>
                  </a> */}
              </p>
            </div>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              {/* Change the link to services here*/}

              <Link
                to="/Portfolio"
                className="text-white bg-teal-900 hover:bg-rose-950 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
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
      </div>
    </>
  );
};

export default AlfHome;
