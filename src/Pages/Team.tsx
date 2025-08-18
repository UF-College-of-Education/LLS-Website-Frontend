import carma from "../assets/Carma.png";
import carla from "../assets/carla.png";
import heart from "../assets/icons/Header_Heart.png";

function Team() {
    return (
        <div className="p-4 gap-5 ">
            {/* Navigation Bar */}
            <nav className="bg-[#8C2B1D] shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <a href="/"><img src={heart}  alt="Logo" className="h-8" /></a>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/team" className="text-white hover:text-gray-900 font-bold">
            Team
          </a>
          <a href="#evidence" className="text-white hover:text-gray-900 font-bold">
            Evidence
          </a>
          <a href="#sponsors" className="text-white hover:text-gray-900 font-bold">
            Sponsors
          </a>
          <button className="bg-[#F1685E] text-white px-4 py-2 rounded-full font-bold text-sm">
            Donate
          </button>
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
          <button className="block w-full text-left px-4 py-2 bg-[#F1685E] text-white rounded font-bold">
        Donate
          </button>
        </div>
      </nav>
            <div className="flex flex-col gap-6 mt-20">
                <div className="flex flex-col md:flex-row shadow-lg">
                    <div className="w-full md:w-[30%]">
                        <img
                            src={carma}
                            alt="Carma Bylund Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full md:w-[70%] flex flex-col items-start p-4">
                        <span className="text-left my-1 text-xl md:text-2xl text-black font-(family-name:--font-bree)">
                            Carma Bylund, Ph.D.
                        </span>
                        <b className="text-left my-1 font-(family-name:--font-open-sans) text-black">
                            Primary Investigator
                        </b>
                        <p className="text-left my-1 text-black text-sm md:text-base">
                            Dr. Carma Bylund is Professor in the Department of Public
                            Relations and in the Division of Hematology & Oncology, College of
                            Medicine. Dr. Bylund is a behavioral scientist with international
                            expertise in healthcare communication and medical education. She
                            studies clinician-patient/caregiver communication, including
                            developing and evaluating clinician-focused and patient and
                            caregiver-focused interventions to improve communication. In the
                            context of cancer, her research spans the cancer continuum from
                            prevention to survivorship. Dr. Bylund’s research collaborations
                            have resulted in more than $10 million in grant funding. At UF,
                            her Communication in Healthcare Lab has several research and
                            teaching collaborations with the College of Medicine, the College
                            of Nursing, and the College of Medicine.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row shadow-lg">
                    <div className="w-full md:w-[30%]">
                        <img
                            src={carla}
                            alt="Carla Fisher Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full md:w-[70%] flex flex-col items-start p-4">
                        <span className="text-left my-1 text-xl md:text-2xl text-black font-(family-name:--font-bree)">
                            Carla Fisher, Ph.D.
                        </span>
                        <b className="text-left my-1 font-(family-name:--font-open-sans) text-black">
                            Co-Primary Investigator
                        </b>
                        <p className="text-left my-1 text-black text-sm md:text-base">
                            Carla L. Fisher is an Associate Professor in the College of
                            Journalism and Communications, Full Member of the UF Health
                            Cancer Center in the Population Sciences Program, and Faculty
                            Affiliate in the Center for Arts and Medicine. She is also an
                            Expert Advisory Board Member for the STEM Translational
                            Communication Center (STCC). Prior to joining UF, she was faculty
                            at Arizona State University and George Mason University and a
                            National Institute on Aging (NIA) Pre-Doctoral Fellow/Trainee (T32
                            AG00048). Dr. Fisher’s research collaborations have garnered more
                            than $2 million in grant funding and include federal awards from
                            the National Institute of Environmental Health Sciences (NIEHS),
                            National Institute on Aging (NIA), and the Department of Defense
                            (DOD).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;