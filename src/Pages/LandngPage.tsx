import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import img1 from "../assets/Container4.png";
import sec2icon1 from "../assets/icons/Container-5.png";
import sec2icon2 from "../assets/icons/Container-6.png";
import sec2icon3 from "../assets/icons/Container-7.png";
import sec2icon4 from "../assets/icons/Container-8.png";
import sec3icon1 from "../assets/icons/Container-9.png";
import sec3icon2 from "../assets/icons/Container-10.png";
import sec3icon3 from "../assets/icons/Container-11.png";
import sec3icon4 from "../assets/icons/Container-12.png";
import img2 from "../assets/Container-13.png";
import img3 from "../assets/Container-14.png";
import heart from "../assets/icons/Header_Heart.png";

const LandingPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      try {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (e) {
        console.log("invalid hash to scroll to", hash);
      }
    }
  }, [location]);

  const handleScrollToResources = () => {
    const section = document.getElementById("child");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <div className="font-sans text-black">
      {/* Navigation Bar */}
      <nav className="bg-[#8C2B1D] shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <img src={heart} alt="Logo" className="h-8" />
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
      {/* Hero Section */}
      <section className="bg-[#8C2B1D] text-white p-16 text-center relative flex flex-col md:flex-row justify-around items-center mt-5">
        <div className="flex flex-col items-start my-auto px-4 md:px-0">
          <h2 className="text-2xl md:text-2xl font-bold mb-4 max-w-xl">
            <em className="text-3xl md:text-3xl  ">Healthy Communication Practice </em>is a self-paced, online program using real caregivers’ narratives to empower 
family caregivers to develop communication skills that can promote their caregiving ability and mental well-being. The 
goal of the program is to <u>enhance caregivers’ health with communication skills support.</u> 
          </h2>
          <div className="flex flex-col md:flex-row justify-start gap-4">
            <button className="bg-[#F1685E] text-white px-7 py-3 rounded-full font-bold text-sm" onClick={handleScrollToResources}>
              Explore Resources
            </button>
            <button className="bg-white text-[#8C2B1D] px-7 py-3 rounded-full font-bold text-sm">
              Donate to Support
            </button>
          </div>
        </div>
        <div className="flex min-w-fit mt-8 md:mt-0">
          <img src={img1} alt="Hero Image" className="w-full max-w-xs md:max-w-md" />
        </div>
      </section>

      {/* <section className="bg-[#8C2B1D] text-white py-16 text-center relative flex flex-col md:flex-row justify-around items-center">
        <div className="flex flex-col items-start my-auto px-4 md:px-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 max-w-xl">
            Empower Lives Through Healthy Communication
          </h1>
          <p className="mb-6 max-w-lg text-start">
            Effective conversations can transform cancer journeys. Learn, share, support – start with us today.
          </p>
          <div className="flex flex-col md:flex-row justify-start gap-4">
            <button className="bg-[#F1685E] text-white px-7 py-3 rounded-full font-bold text-sm" onClick={handleScrollToResources}>
              Explore Resources
            </button>
            <button className="bg-white text-[#8C2B1D] px-7 py-3 rounded-full font-bold text-sm">
              Donate to Support
            </button>
          </div>
        </div>
        <div className="flex min-w-fit mt-8 md:mt-0">
          <img src={img1} alt="Hero Image" className="w-full max-w-xs md:max-w-md" />
        </div>
      </section> */}

      {/* Why Healthy Communication */}
      {/* <section className="bg-[#FFF6F6] py-16 px-8 md:px-16 flex flex-col md:flex-row justify-around items-center">
        <div className="w-full md:w-1/3 mr-4 my-auto">
          <h1 className="text-xl font-bold mb-2">Why Healthy Communication?</h1>
          <p className="mb-8 text-sm text-gray-600">
            Communication skills are crucial during cancer diagnosis and treatment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[sec2icon1, sec2icon2, sec2icon3, sec2icon4].map((icon, index) => (
            <div key={index} className="bg-white p-8 md:p-14 rounded shadow text-center flex flex-col items-center">
              <div className="text-3xl mb-2">
                <img src={icon} alt={`icon${index + 1}`} />
              </div>
              <p>{["Supports Mental Health", "Asking Open-Ended Questions", "Sharing Emotions Respectfully", "Recognizing Non-Verbal Cues"][index]}</p>
            </div>
          ))}
        </div>
      </section> */}
      <section className="bg-[#FFF6F6] py-16 px-8 md:px-16 flex flex-col md:flex-col justify-around items-center">
        <div className="w-full md:w-3/4 mr-4 my-auto">
          <h1 className="text-xl font-bold mb-2">Why Caregivers Need the Healthy Communication Practice ?</h1>
          <p className="mb-8 text-sm text-gray-600">
          Caregiving communication skills promote better care and health outcomes for family caregivers and for the loved ones they care for. <b>Healthy Communication Practice</b> takes an evidence-based skills approach to helping caregivers communicate in their caregiving role. This program has proven effectiveness in enhancing caregivers’ mental well-being while increasing communication skills. 
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[sec2icon1, sec2icon2, sec2icon3, sec2icon4,sec2icon1, sec2icon1, sec2icon3].map((icon, index) => (
            <div key={index} className={`bg-white p-8 md:p-14 rounded-full shadow text-center flex flex-col items-center ${index === 6 ? 'md:col-start-2' : '' }`}>
              <div className="text-3xl mb-2">
                <img src={icon} alt={`icon${index + 1}`} />
              </div>
              <p>{["Evidence-Based Skills","Proven Effectiveness","Improved Mental Health","Improved Communication Skills" ,"Enhanced Care Ability","Targeted Guidance"][index]}</p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-3/4 mt-4 my-auto">
          <p className="mb-8 text-sm text-gray-600">
          It is grounded in rigorous research conducted by leading caregiving experts and developed in partnership with renowned health organizations and family caregivers. We offer multiple programs targeted to family caregivers’ distinct needs based on the disease type (e.g., blood cancer, dementia) & relationship (e.g., spouse, parent). 
          </p>
        </div>
      </section>

      {/* Practice Skills */}
      <section className="bg-[#FFFFFF] py-16 px-8 md:px-16 flex flex-col md:flex-row justify-around items-center">
        <div className="w-full md:w-1/3 mr-4 my-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">Practice the Skills That Matter</h2>
          <p className="mb-8 text-sm text-gray-600">
            Communication skills are crucial during cancer diagnosis and treatment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[sec3icon1, sec3icon2, sec3icon3, sec3icon4].map((icon, index) => (
            <div key={index} className="bg-[#FFF6F6] p-8 md:p-14 rounded shadow text-center flex flex-col items-center">
              <div className="text-3xl mb-2">
                <img src={icon} alt={`icon${index + 1}`} />
              </div>
              <p>{["Supports Mental Health", "Asking Open-Ended Questions", "Sharing Emotions Respectfully", "Recognizing Non-Verbal Cues"][index]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      {/* <section className="bg-[#FFC1BD] py-12 text-center relative">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Who It's For</h2>
        <p className="max-w-xl mx-auto italic">
          "Talking to my doctor without fear changed everything."
          <br />
          <span className="block mt-2 font-semibold">— Survivor, FL</span>
        </p>
      </section> */}

      <div className="relative mx-auto p-0.5 w-1/2 rounded-2xl bg-gray-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 transition-all duration-300 group overflow-hidden">
  {/* Top right decorative circle */}
  <div className="absolute z-10 -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>
  
  {/* Bottom left decorative circle */}
  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-yellow-500 z-10 rounded-full opacity-40 group-hover:opacity-0 transition-opacity duration-500"></div>
  
  <div className="bg-white rounded-2xl p-6 h-full relative z-0">
    <div className="flex items-start gap-4">
      <div className="bg-blue-500 rounded-xl p-3 flex-shrink-0">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-gray-800 italic mb-4">
          "Showing up and listening, validating... how to lead the family, as lead caretaker... It's super helpful showing me how to show up better, for everyone, and even myself."
        </p>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-gray-900">- Family Caregiver</p>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400">⭐</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Part 1 */}
      <section id="child" className="bg-white py-12 px-8 md:px-16 flex flex-col md:flex-row justify-around items-center">
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Part 1: Navigating Cancer Information in Online and Clinical Settings</h3>
          <p className="mb-4 text-sm text-gray-600">
            We will describe skills for evaluating online health information, communicating online with others about health information, and communicating with doctors about online health information. Then, we will look at key skills you can use to support your parent in their clinical visits.
          </p>
          <a
            className="text-md font-semibold inline-flex underline decoration-red-600 underline-offset-6 items-center gap-1"
            href="https://healthycommunicationpractice.org/" target="_blank" rel="noopener noreferrer"
          >
            Learn more about Navigating Cancer Information in Online and Clinical Settings →
          </a>
        </div>
        <div className="mt-8 md:mt-0">
          <img src={img2} alt="Office scene" className="w-full max-w-xs md:max-w-md" />
        </div>
      </section>

      {/* Part II */}
      <section id="spouse" className="bg-[#FFF6F6] py-12 px-8 md:px-16 flex flex-col md:flex-row justify-around items-center">
        <div className="mt-8 md:mt-0">
          <img src={img3} alt="Family with doctor" className="w-full max-w-xs md:max-w-md" />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Part II: Facilitating Open and Supportive Communication In the Family
          </h3>
          <p className="mb-4 text-sm text-gray-600">
            We will explore the importance of finding meaning in your caregiving role as well as how to strengthen your family relationships with open and supportive communication skills. Then, we will look at how to use these skills when navigating relational challenges and difficult but important caregiving conversations.
          </p>
          <a
            className="text-md font-semibold inline-flex underline decoration-red-600 underline-offset-6 items-center gap-1"
            href="course"
          >
            Learn more about Facilitating Open and Supportive Communication In the Family →
          </a>
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="bg-[#8C2B1D] text-white py-16 text-center">
        <h2 className="text-lg md:text-xl font-semibold">More content here</h2>
      </section>
    </div>
  );
};

export default LandingPage;
