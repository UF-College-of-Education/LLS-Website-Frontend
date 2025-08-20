import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import img1 from "../assets/Container4.png";
import sec2icon1 from "../assets/icons/Container-5.png";
import sec2icon2 from "../assets/icons/Container-6.png";
import sec2icon3 from "../assets/icons/Container-7.png";
import sec2icon4 from "../assets/icons/Container-8.png";
import img2 from "../assets/Container-13.png";
import img3 from "../assets/Container-14.png";
import heart from "../assets/icons/Header_Heart.png";
import { CircleCheckBig, Award, Brain, Heart, Users, Target,Quote, Star,Zap, BookOpen, Video, Activity, Clock } from 'lucide-react';

const LandingPage: React.FC = () => {
  const benefits = [
    {
      icon: CircleCheckBig,
      text: "Evidence-Based Skills",
      gradient: "from-blue-500 to-blue-600",
      delay: "0ms"
    },
    {
      icon: Award,
      text: "Proven Effectiveness",
      gradient: "from-green-500 to-green-600",
      delay: "150ms"
    },
    {
      icon: Brain,
      text: "Improved Mental Health",
      gradient: "from-purple-500 to-purple-600",
      delay: "300ms"
    },
    {
      icon: Heart,
      text: "Improved Communication Skills",
      gradient: "from-pink-500 to-pink-600",
      delay: "450ms"
    },
    {
      icon: Users,
      text: "Enhanced Care Ability",
      gradient: "from-indigo-500 to-indigo-600",
      delay: "600ms"
    },
    {
      icon: Target,
      text: "Targeted Guidance",
      gradient: "from-orange-500 to-orange-600",
      delay: "750ms"
    }
  ];
  const features = [
    {
      title: "Memorable Communication Models",
      description: "Evidence-based, theory-driven communication models introduced by experts",
      icon: BookOpen,
      image: "https://v3.fal.media/files/zebra/0SCwIzBoWa2mr0HAjxChs.jpeg",
      gradient: "from-blue-500 to-blue-600",
      delay: "0ms",
      featured: true
    },
    {
      title: "Expert Videos",
      description: "Learn from experts in caregiving, healthcare, and family communication",
      icon: Video,
      image: "https://v3.fal.media/files/zebra/0SCwIzBoWa2mr0HAjxChs.jpeg",
      gradient: "from-purple-500 to-purple-600",
      delay: "100ms",
      featured: false
    },
    {
      title: "Authentic Caregiver Narratives",
      description: "Real caregivers' stories captured through extensive research",
      icon: Users,
      image: "https://v3.fal.media/files/zebra/0SCwIzBoWa2mr0HAjxChs.jpeg",
      gradient: "from-green-500 to-green-600",
      delay: "200ms",
      featured: false
    },
    {
      title: "Interactive Activities",
      description: "Writing prompts, drag and drop quizzes, and interactive videos",
      icon: Activity,
      image: "https://v3.fal.media/files/zebra/0SCwIzBoWa2mr0HAjxChs.jpeg",
      gradient: "from-pink-500 to-pink-600",
      delay: "300ms",
      featured: false
    },
    {
      title: "Flexible and Convenient",
      description: "Work at your own pace with asynchronous learning",
      icon: Clock,
      image: "https://v3.fal.media/files/zebra/0SCwIzBoWa2mr0HAjxChs.jpeg",
      gradient: "from-orange-500 to-orange-600",
      delay: "400ms",
      featured: false
    }
  ];
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
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
      <Heart className="w-4 h-4 mr-2" />
      Why It Matters
    </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
      Why Caregivers Need the{" "}
      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Healthy Communication Practice
      </span>
    </h2>
    <p className="my-8 text-sm text-gray-600">
            Caregiving communication skills promote better care and health outcomes for family caregivers and for the loved ones they care for. Healthy Communication Practice takes an evidence-based skills approach to helping caregivers communicate in their caregiving role. 
          </p>
          <p className="mb-8 text-sm text-gray-600">This program has proven effectiveness in enhancing caregivers’ mental well-being while increasing communication skills. It is grounded in rigorous research conducted by leading caregiving experts and developed in partnership with renowned health organizations and family caregivers. </p>
        <p className="mb-8 text-sm text-gray-600">We offer multiple programs targeted to family caregivers’ distinct needs based on the disease type (e.g., blood cancer, dementia) & relationship (e.g., spouse, parent).</p>
        </div>
        
        <div className="relative transform transition-all duration-1000 translate-x-0 opacity-100">
      <div className="grid grid-cols-3 gap-16 max-w-full mx-auto">
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          
          return (
            <div
              key={index}
              className="relative group cursor-pointer transform transition-all duration-500 hover:scale-110 translate-y-0 opacity-100"
              style={{ transitionDelay: benefit.delay }}
            >
              <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <IconComponent className="w-8 h-8 text-white mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-white text-xs font-semibold leading-tight px-2">
                    {benefit.text}
                  </div>
                </div>
                
                {/* Border animation */}
                <div className="absolute inset-0 rounded-full border-2 border-white/30 scale-100 group-hover:scale-125 opacity-100 group-hover:opacity-0 transition-all duration-500"></div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Decorative SVG lines */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        style={{ zIndex: -1 }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path 
          d="M 80 80 Q 200 120 320 80" 
          stroke="url(#lineGradient)" 
          strokeWidth="2" 
          fill="none" 
          className="animate-pulse"
        />
        <path 
          d="M 80 240 Q 200 200 320 240" 
          stroke="url(#lineGradient)" 
          strokeWidth="2" 
          fill="none" 
          className="animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
      </svg>
    </div>
      </section>

         

      <div className="py-10 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="relative max-w-4xl mx-auto transform transition-all duration-1000 translate-y-0 opacity-100 scale-100">
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden group hover:shadow-3xl transition-all duration-500">
          
          {/* Decorative background circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100 to-yellow-100 rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
          
          {/* Quote icon */}
          <div className="relative z-10 mb-4">
            <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Quote className="w-4 h-4 text-white" />
            </div>
          </div>
          
          {/* Testimonial text */}
          <div className="relative z-10 mb-8">
            <blockquote className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium italic">
              "Appreciate you taking the time to [create] Healthy Communication Practice. No one really understands what caregivers go through until they are thrust into the position. It is challenging and can break you in ways you never expected. Thank you for shining a light and helping with coping mechanisms."
            </blockquote>
          </div>
          
          {/* Author and rating */}
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <div className="text-md font-semibold text-gray-900">
                - Family Caregiver
              </div>
            </div>
            
            {/* 5-star rating */}
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current transition-all duration-300"
                  style={{ transitionDelay: `${500 + i * 100}ms` }}
                />
              ))}
            </div>
          </div>
          
          {/* Animated border on hover */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5">
            <div className="w-full h-full bg-white rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>

     <section className="py-10 bg-gradient-to-br from-white to-gray-50 relative ">
      {/* Background blur effects */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      </div> */}

      <div className=" z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-18 transform transition-all duration-1000 translate-x-0 opacity-100">
            <div className="space-y-16">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Evidence-Based Approach
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                An Evidence-Based,{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Narrative Learning Approach
                </span>{' '}
                to Promoting Caregiver's Well-Being
              </h2>

              {/* Description paragraphs */}
              <p className="text-xl text-gray-700 leading-relaxed">
                To teach the skills in a memorable and relatable way, Healthy Communication Practice uses evidence-based, theory-driven communication models that are introduced by experts in caregiving, healthcare and family communication, mental health, and the disease context.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Users will watch caregivers model communication skills in challenging care conversations using real caregivers' narratives captured through extensive research so that caregivers can relate to the stories, promoting their skill development.
              </p>
            </div>

            {/* Highlighted box */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                This program has been developed in partnership with education and instructional design experts to ensure caregivers become engaged via interactive activities like writing prompts, drag and drop quizzes, and interactive videos. Caregivers can work on their own and at their own pace.
              </p>
            </div>
          </div>

          {/* Right Column - Feature Grid */}
          <div className="relative transform transition-all duration-1000 delay-300 translate-x-0 opacity-100">
            <div className="grid grid-cols-2 gap-16">
              {features.slice(0, 4).map((feature, index) => {
                const IconComponent = feature.icon;
                const isFeatured = index === 0; // First item is featured

                return (
                  <div
                    key={index}
                    className={`relative group cursor-pointer transform transition-all duration-500 translate-y-0 opacity-100 ${
                      isFeatured ? 'scale-105 z-10' : 'hover:scale-105'
                    }`}
                    style={{ transitionDelay: feature.delay }}
                  >
                    <div className={`relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 ${
                      isFeatured ? 'ring-4 ring-blue-300 shadow-2xl' : ''
                    }`}>
                      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                      <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                        <IconComponent className={`w-8 h-8 mb-2 transition-transform duration-300 ${
                          isFeatured ? 'scale-110' : 'group-hover:scale-110'
                        }`} />
                        <h3 className="font-bold text-sm leading-tight mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-xs opacity-90 leading-tight">
                          {feature.description}
                        </p>
                      </div>
                      {isFeatured && (
                        <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Fifth item spans both columns */}
              <div
                className="col-span-2 relative group cursor-pointer transform transition-all duration-500 hover:scale-105 translate-y-0 opacity-100"
                style={{ transitionDelay: features[4]?.delay }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-[2/1] bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={features[4]?.image}
                      alt={features[4]?.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${features[4]?.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                    <Clock className="w-8 h-8 mb-2 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="font-bold text-sm leading-tight mb-1">
                      {features[4]?.title}
                    </h3>
                    <p className="text-xs opacity-90 leading-tight">
                      {features[4]?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom info card */}
            <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Memorable Communication Models
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Evidence-based, theory-driven communication models introduced by experts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    

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
