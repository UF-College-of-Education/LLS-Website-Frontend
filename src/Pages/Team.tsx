import carma from "../assets/teams/carma-round.png";
import carla from "../assets/teams/carla-round.png";
import samantha from "../assets/teams/samantha-round.png";
import allison from "../assets/teams/allison-round.png";
import heart from "../assets/icons/Header_Heart.png";

function Team() {
    return (
        <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-[#8C2B1D] shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <a href="/"><img src={heart}  alt="Logo" className="h-8" /></a>
              </div>
              <div className="hidden md:flex space-x-6 items-center">
                <a href="/" className="text-white hover:underline font-bold">
                  Home
                </a>
                <a href="/team" className="text-white  hover:underline font-bold">
                  Team
                </a>
                <a href="/evidence" className="text-white hover:underline font-bold">
                  Evidence
                </a>
                <a href="/sponsors" className="text-white hover:underline font-bold">
                  Sponsors
                </a>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  className="text-gray-700 hover:text-gray-900 focus:outline-none"
                  onClick={() => {
                const menu = document.getElementById("mobile-menu");
                if (menu) menu.classList.toggle("hidden");
                  }}
                >
                  <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                  >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                  </svg>
                </button>
              </div>
                </div>
              </div>
              <div id="mobile-menu" className="hidden md:hidden bg-white shadow-md">
                <a href="#team" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Team
                </a>
                <a href="#evidence" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Evidence
                </a>
                <a href="#sponsors" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Sponsors
                </a>
               
              </div>
      </nav>
            <div className="flex flex-col gap-6 mt-20 p-20 md:px-40">
              <h1 className="text-center font-bold capitalize text-[#CE2C37]">Meet the Team</h1>
              <div className="max-w-[70vw] mx-auto mb-16"> 
                <span className=" text-sm italic font-semibold text-gray-800">
                 Drs. Carla L. Fisher and Carma L. Bylund lead one of the nation's only research programs dedicated to understanding family caregivers’ supportive care needs.
                  Their work centers on understanding the distinct needs of different types of family caregivers and providing them with supportive care to enhance their caregiving ability, mental health, and family relationships.
                   Drs. Fisher and Bylund have worked together for nearly 20 years on caregiver and healthcare communication research and interventions. They led the development of
                  the <b>Healthy Communication Practice</b><sup>TM</sup>to better support you in the important role you play as a family caregiver.</span>
              </div>

              <div className="mb-16">
                
                <h2 className="text-center text-3xl md:text-4xl font-(family-name:--font-bree) font-bold text-black mb-16">Meet the Developers - Principal Investigators</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-12">

                
                <div className="flex flex-col gap-6 scroll-mt-32 bg-white shadow-[0px_8px_24px_rgba(149,157,165,0.2)] rounded-lg p-6 md:p-8">
                    <div className="w-[100%] md:w-[60%]">
                      <img
                        src={carma}
                        alt="Carma Bylund Image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full flex flex-col items-start p-4 m-auto">
                        <span className="text-left my-1 text-xl md:text-2xl text-black font-(family-name:--font-bree)">
                            Carma L. Bylund, PhD
                        </span>
                        <b className="text-left my-1 font-(family-name:--font-open-sans) text-black">
                        Principal Investigator
                        </b>
                        <p className="text-left my-1 text-black text-sm md:text-base">
                            Carma L. Bylund is Professor and Associate Chair of Education in the Department of Health
                             Outcomes and Biomedical Informatics in the UF College of Medicine and Assistant Director
                              of the Cancer Training and Education Program for the UF Health Cancer Center. Dr. Bylund
                               is an international leader in improving communication in cancer care. She has 20 years
                                of continual research funding and more than 200 peer-reviewed publications, including 
                                three books on health/family communication. Dr. Bylund led the development of the nation’s 
                                first communication skills program (ComSkil) at Memorial Sloan Kettering Cancer Center to 
                                enhance oncologists’ communication with patients. Dr. Bylund and others have adapted this 
                                program internationally.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-6 scroll-mt-32 bg-white shadow-[0px_8px_24px_rgba(149,157,165,0.2)] rounded-lg p-6 md:p-8">
                <div className="w-[100%] md:w-[60%]">
                        <img
                            src={carla}
                            alt="Carla Fisher Image"
                            className="w-full h-fullobject-cover"
                        />
                    </div>
                    <div className="w-full flex flex-col items-start p-4 m-auto">
                        <span className="text-left my-1 text-xl md:text-2xl text-black font-(family-name:--font-bree)">
                            Carla L. Fisher, PhD, MSW
                        </span>
                        <b className="text-left my-1 font-(family-name:--font-open-sans) text-black">
                        Principal Investigator
                        </b>
                        <p className="text-left my-1 text-black text-sm md:text-base">
                            Carla L. Fisher is Professor in the Department of Health Outcomes and Biomedical Informatics
                             in the UF College of Medicine and Member of the UF Health Cancer Center. Dr. Fisher is an
                              international leader in developing narrative-driven, family-centered psychosocial care and
                               services, with a primary focus on cancer caregivers’ distinct needs based on relationship
                                and lifespan differences. Her work has been consistently funded for nearly 20 years and
                                 includes more than 130 publications and three books aimed at helping families navigate
                                  illness together. She is often invited by leading health institutions, the government,
                                   and advocacy organizations to provide family communication guidance to improve care
                                    practice and enhance mental health outcomes.
                        </p>
                    </div>
                </div>
                </div>
              </div>
              <div>
                <h2 className="text-center text-3xl md:text-4xl font-(family-name:--font-bree) font-bold text-black mb-16">Meet the Collaborating Experts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-12">

                <div className="flex flex-col gap-6 scroll-mt-32 bg-white shadow-[0px_8px_24px_rgba(149,157,165,0.2)] rounded-lg p-6 md:p-8">
                    <div className="w-[100%] md:w-[60%]">
                        <img
                            src={samantha}
                            alt="Samantha Paige Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full flex flex-col items-start p-4">
                        <span className="text-left my-1 text-xl md:text-2xl text-black font-(family-name:--font-bree)">
                        Samantha Paige, PhD, MPH
                        </span>
                        {/* <b className="text-left my-1 font-(family-name:--font-open-sans) text-black">
                            Primary Investigator
                        </b> */}
                        <p className="text-left my-1 text-black text-sm md:text-base">
                            Coming Soon..
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-6 scroll-mt-32 bg-white shadow-[0px_8px_24px_rgba(149,157,165,0.2)] rounded-lg p-6 md:p-8">
                    <div className="w-[100%] md:w-[60%]">
                        <img
                            src={allison}
                            alt="Allison Applebaum Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full flex flex-col items-start p-4 m-auto">
                        <span className="text-left my-1 text-xl md:text-2xl text-black font-(family-name:--font-bree)">
                        Allison J. Applebaum, PhD
                        </span>
                        {/* <b className="text-left my-1 font-(family-name:--font-open-sans) text-black">
                            Co-Primary Investigator
                        </b> */}
                        <p className="text-left my-1 text-black text-sm md:text-base">
                        Allison J. Applebaum is a Professor of Geriatrics and Palliative Medicine and the Director of the Steven S. Elbaum Family Center for 
                        Caregiving at the Icahn School of Medicine at Mount Sinai. She was previously the Founding Director of the Caregivers Clinic at Memorial 
                        Sloan Kettering Cancer Center, the first program in the nation to provide comprehensive psychosocial care to family members and friends of 
                        patients in the caregiving role. Dr. Applebaum is an international leader in developing and disseminating supportive services for cancer 
                        caregivers, including targeted therapeutic approaches like meaning-centered psychotherapy. With consistent funding for nearly 20 years, 
                        she has over 100 publications, and is the editor of the renowned book, Cancer Caregivers (Oxford University, 2019). 
                        </p>
                    </div>
                </div>
                </div>
              </div>
                
            </div>
        </div>
    );
}

export default Team;