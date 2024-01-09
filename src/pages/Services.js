import React from "react";
import { Carousel, Typography } from "@material-tailwind/react";
import img from "../images/AlfJourney/BeehiveModel.png";
import img2 from "../images/AlfJourney/PartnerSales.png";

const Services = () => {
  return (
    <>
      <div id="services" className="bg-gray-100 py-8">
        <section data-aos="zoom-in-down">
          <div className="m-auto max-w-full md:p-2 h-full">
            <h2 className="my-6 text-center text-3xl text-rose-900 uppercase font-bold  ">
              services
            </h2>

            <h2 className="mt-4 p-5 mx-12 text-center text-xl lg:text-2xl font-semibold text-gray-600">
              We strongly believe significant transformation in livelihoods
              takes long-term systemic engagement that addresses different
              elements of the livelihood ecosystem in an integrated manner.
              However, the journey of change often begins with a single step.
              Therefore we offer our services at two levels-
            </h2>
          </div>

          <div className="px-12" data-aos="fade-down" data-aos-delay="600">
            <div className="grid grid-cols-2  gap-5">
              <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <img
                    alt="card img"
                    className="p-2 rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                    src={img}
                  />

                  <h2 className="font-semibold my-2 text-2xl text-center text-rose-900">
                    Community Program Services
                  </h2>
                  <p className="text-md font-medium">
                    ALC India's Community Services involve the design and
                    delivery of an integrated package of services that focus on
                    individual communities such as Farmers, Weavers, Livestock
                    Holders, Forest Produce Gatherers (mostly Tribals) and
                    Vulnerable Communities. Here, the service models are
                    designed around the livelihoods needs of the community,
                    enabling them to take up significant activities for
                    enterprise creation (in the form of producer companies and
                    other collectives). ALC India has partnered different
                    government agencies like SFAC, NABARD and SERP to promote a
                    total of 14 producer companies in Andhra Pradesh, Karnataka,
                    Maharashtra and Telangana.
                  </p>
                </div>
              </div>

              <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                  <img
                    alt="card img"
                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                    src={img2}
                  />
                  <h2 className="font-semibold my-4 text-2xl text-center text-rose-900 ">
                    <br />
                    Partner Program Services
                  </h2>
                  <p className="text-md font-medium">
                    ALC India's Partner Services focuses on needs that people's
                    enterprises, government agencies, NGOs, corporates and
                    foundations, have in specific domains such as Livelihoods
                    Mapping, Business Design, HR, Value Chain Analysis and Skill
                    Development. Here, the services are offered to meet the
                    specific needs of the partner organisation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="services" className="bg-gray-100 py-8">
          <div
            className="m-auto max-w-full p-2 md:p-4 h-full flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="zoom-out"
          >
            <div className="lg:w-full flex flex-row m-4 lg:mx-2 justify-center">
              <h3 className="text-3xl  text-blue-900  font-bold">
                {" "}
                Community{" "}
                <span className="font-black"> Program Services Offerings</span>
              </h3>

              <div className="mt-4 p-5 mx-12 text-center text-xl lg:text-2xl font-semibold text-teal-950">
                <ul class="list-disc">
                  <li>
                    {" "}
                    <b className="text-rose-950 font-extrabold">
                      Beehive model
                    </b>
                    -{" "}
                    <i>
                      The integration of small, marginalized producers to create
                      business enterprises that help climb up the value chain.
                    </i>{" "}
                    We currently work with Small and Marginal Farmers, Weavers
                    and Forest Produce Gatherers supporting them to realize the
                    benefits of an integrated model of transformation.
                    <img
                      className="object-contain"
                      src="https://www.alcindia.org/assets/model-image-1-ec1b22050d30a168660a7ed6299454ac.jpg"
                      alt="BeehiveImage"
                    ></img>
                  </li>

                  <div className="lg:w-full flex flex-row m-2 lg:mx-2 justify-center">
                    <h3 className="text-3xl  text-blue-900  font-bold"> II</h3>
                  </div>
                  <li>
                    <b className="text-rose-950 font-extrabold ">
                      Cross Pollination{" "}
                    </b>{" "}
                    <em>(Sustaining Non-Profits)</em>-{" "}
                    <i>
                      {" "}
                      Facilitating the discovery of business opportunities
                      hidden within the Not-For-Profit operations and the
                      transformation of these opportunities into self-sustaining
                      enterprises.
                    </i>
                    <img
                      className="object-contain"
                      src="https://www.alcindia.org/assets/model-image-2-7cac4348563ee212383d9365a57485ac.jpg"
                      alt="Cross PollinationImage"
                    ></img>
                  </li>

                  <div className="lg:w-full flex flex-row m-2 lg:mx-2 justify-center">
                    <h3 className="text-3xl  text-blue-900  font-bold"> III</h3>
                  </div>

                  <li>
                    <b className="text-rose-950 font-extrabold">
                      {" "}
                      Metamorphosis{" "}
                    </b>
                    <em>(Reviving Cooperatives)</em>{" "}
                    <i>
                      Transforming Government-owned unprofitable and unviable
                      cooperatives of India into producer-owned profitable
                      enterprises.
                    </i>
                    <img
                      className="object-contain"
                      src="https://www.alcindia.org/assets/model-image-3-7fc34a18ca2aa37a4e65169dd3eefb34.jpg"
                      alt="MetamorphosisImage"
                    ></img>
                  </li>

                  <div className="lg:w-full flex flex-row m-2 lg:mx-2 justify-center">
                    <h3 className="text-3xl  text-blue-900  font-bold"> IV</h3>
                  </div>

                  <li>
                    <b className="text-rose-950 font-extrabold">Symbiosis</b>{" "}
                    <em>(The Corporate - Producer Co-evolution)</em>{" "}
                    <i>
                      Creating a long-term relationship between corporation and
                      producers that is based on mutual trust and support.
                    </i>
                    <img
                      src="https://www.alcindia.org/assets/model-image-4-31b1d35541439ea2b799aa9c534b206e.jpg"
                      alt=" SymbiosisImage"
                    ></img>
                  </li>

                  <div className="lg:w-full flex flex-row m-2 lg:mx-2 justify-center">
                    <h3 className="text-3xl  text-blue-900  font-bold"> V</h3>
                  </div>

                  <li>
                    <b className="text-rose-950 font-extrabold">Web </b>
                    <em>(Networked Enterprises)</em>
                    <i>
                      {" "}
                      Mobilizing enterprises to create enabling environments
                      through standards, certification, branding, market
                      linkages, negotiations and policy reforms.
                    </i>

                    <img
                      src="https://www.alcindia.org/assets/model-image-5-d88f91eacadeb9be48e660fa55833478.jpg"
                      alt=" WebImage"
                    ></img>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />



        <section>
          <div className="flex flex-col m-auto max-w-full p-72 md:p-6 h-full">
            <div className="text-blue-900 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
              </svg>
            </div>
            <h3 className="text-3xl  text-blue-900 font-bold">
              Partner <span className="font-black"> Program Services</span>
            </h3>
            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold">
                ALC India delivers a wide range of services across domains
                (including Business Design, Raising and Managing Finances,
                Programme and Project Management, Institution Building, HR,
                Communication) to producer enterprises, government agencies or
                departments, NGOs, donors or funding agencies, private sector,
                CSR divisions and academic institutions.
              </p>
            </div>
            <div className="snap-x snap-mandatory scroll-smooth ">
              <ul
                className=" flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
                data-aos="zoom-out"
              >
                <li class="snap-always snap-center">
                  <h5 className="text-xl  font-bold text-rose-900">
                    Evolving Enterprise Design
                  </h5>
                  <p>
                    Any organization or enterprise considering a new economic
                    activity is, in essence, designing its business. With the
                    right mix of imagination and rigour, it is possible to
                    address various aspects of business design – feasibility,
                    viability, business model, strategy formulation, plan and
                    project. ALC India helps define requirements sharply,
                    creates effective business design and delivers the
                    blueprint. more...
                  </p>
                </li>
                <li class="snap-always snap-center">
                  <h5 className="text-xl text-rose-900 font-bold">
                    Organising Enterprises
                  </h5>
                  <p>
                    Producers can participate in markets and realize better
                    returns if they build their own institutions effectively.
                    ALC India believes producer groups understand their needs,
                    can dream big and join together if the benefits are
                    worthwhile. To support this process, ALC India offers a
                    gamut of services – from mobilization of the members to the
                    systems of governance. more...
                  </p>
                </li>

                <li>
                  <h5 className="text-xl text-rose-900 font-bold">
                    Navigating Markets
                  </h5>
                  <p>
                    Some of the biggest challenges that the marginalized face,
                    pertain to markets. The greater share of value goes to the
                    middle men. ALC India partners organizations to address
                    market-related challenges such as understanding markets
                    (research and surveys), marketing capabilities (for
                    strategy, planning and execution) and creating market
                    linkages. more...
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
