import React, { useEffect,useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {  CircleCheckBig, Monitor, Stethoscope,  Award, Brain, ArrowRight, Play, Heart, Users, Target,Quote, Star,Zap, BookOpen, Video, Activity, Clock, Mail, Phone, MapPin } from 'lucide-react';
import heart from "../assets/icons/Header_Heart.png";
import hero1 from "../assets/sam.png";
import hero2 from "../assets/LLS Screenshots/caa.jpg";
import hero21 from "../assets/LLS Screenshots/aab.jpg"
import hero22 from "../assets/LLS Screenshots/bba.jpg"
import hero23 from "../assets/LLS Screenshots/baa.jpg"
import hero24 from "../assets/LLS Screenshots/abb.jpg"
import hero14 from "../assets/carma1.png"
import hero15 from "../assets/carla.png"
import hero16 from "../assets/hopemodel.jpg"
import hero33 from "../assets/LLS Screenshots/bab.jpg";
import hero3 from "../assets/bloodcancer.png";
import hero43 from "../assets/interactiveactivites.jpg"
// import hero4 from "../assets/LLS Screenshots/aaa.jpg";
import hero4 from "../assets/dementiastill.png"
import hero5 from "../assets/LLS Screenshots/abc.jpg";
import hero55 from "../assets/breastcancerstill.png"
import hero66 from "../assets/LLS Screenshots/abb.jpg"
import HeroCarousel from '../Components/HeroCarousel';
// import Slider from 'react-infinite-logo-slider'
import logo1 from "../assets/logos/bloodcancerunitedlogo.jpg";
import logo2 from "../assets/logos/FDOH.png"
import logo3 from "../assets/logos/NIAlogo.png"
// import logo4 from "../assets/logos/ufhealth-full.svg"
import logo5 from "../assets/logos/BloodCancerUnited2025.svg"
import logo6 from "../assets/logos/UFhealthlogo.png"
import Button from '../Components/Button';



const LandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const benefits = [
    {
      icon: CircleCheckBig,
      text: "focused on improving communication skills",
      gradient: "#2B6DFF",
      delay: "150ms"
    },
    {
      icon: Award,
      text: "evidence-based",
      gradient: "#00C950",
      delay: "150ms"
    },
    {
      icon: Brain,
      text: "effective in improving communication and mental health",
      gradient: "#AD46FF",
      delay: "150ms"
    },
    {
      icon: Target,
      text: "targeting guidance based on the disease & relationship",
      gradient: "#FF6900",
      delay: "150ms"
    }
  ];
  const features = [
    {
      title: "Memorable Communication Models",
      description: "Evidence-based, theory-driven communication models introduced by experts",
      icon: BookOpen,
      image: hero16,
      gradient: "from-black to-gray-900",
      iconcolor:"#1A5EE2",
      delay: "0ms",
      featured: true
    },
    {
      title: "Expert Guides",
      description: "Learn from experts in caregiving, healthcare communication, and family relationships and communication",
      icon: Video,
      image: hero33,
      gradient: "from-black to-gray-900",
      iconcolor:"#00A63E",
      delay: "100ms",
      featured: false
    },
    {
      title: "Authentic Caregiver Narratives",
      description: "Real caregivers' stories captured through extensive research",
      icon: Users,
      image: hero22,
      gradient: "from-black to-gray-900",
      iconcolor:"#F6339A",
      delay: "200ms",
      featured: false
    },
    {
      title: "Interactive Activities",
      description: "Writing prompts, drag and drop quizzes, and interactive videos",
      icon: Activity,
      image: hero43,
      gradient: "from-black to-gray-900",
      iconcolor:"#9810FA",
      delay: "300ms",
      featured: false
    },
    {
      title: "Flexible and Convenient",
      description: "Work at your own pace with asynchronous learning",
      icon: Clock,
      image: hero24,
      gradient: "from-black to-gray-900",
      iconcolor:"#FF6900",
      delay: "400ms",
      featured: false
    }
  ];
  const caregiverTypes = [
    {
      id: 1,
      title: "Young-Adult Caregiving Daughters",
      icon: Users,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      delay: "500ms",
      comingSoon: true
    },
    {
      id: 2,
      title: "Midlife Caregiving Daughters",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      delay: "700ms",
      comingSoon: false
    },
    {
      id: 3,
      title: "Midlife-Later Life Caregiving Mothers",
      icon: Users,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      delay: "900ms",
      comingSoon: true
    }
  ];
  const caregiverTypesDementia = [
    {
      id: 1,
      title: "Spouse Caregiver",
      icon: Users,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      delay: "500ms",
      comingSoon: true
    },
    {
      id: 2,
      title: "Adult-Child Caregiver of Parent",
      icon: Users,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      delay: "900ms",
      comingSoon: true
    }
  ];
  const caregiverTypesHCP = [
    {
      id: 1,
      title: "Adult-Child Caregiver of Parent",
      icon: Users,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      delay: "500ms",
      comingSoon: false
    },
    {
      id: 2,
      title: "Spouse Caregiver",
      icon: Users,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      delay: "900ms",
      comingSoon: false
    },
    {
      id: 3,
      title: "Parent Caregiver of Adolescent or Young Adult (AYA)",
      icon: Users,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      delay: "900ms",
      comingSoon: true
    }

  ];
  const programs = [
    'Blood Cancer',
    'Dementia', 
    'Breast Cancer',
    'About'
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const renderStars = () => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index}
        className="w-5 h-5 text-yellow-400 fill-current"
      />
    ));
  };

  useEffect(() => {
    setIsVisible(true);
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
    const section = document.getElementById("HCP");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return(
    <div className="font-sans text-black">
    {/* Navigation Bar */}
    <nav className="bg-[#8C2B1D] shadow-md fixed w-full z-15">
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
          {/* <button className="bg-[#F1685E] text-[#8C2B1D] px-4 py-2 rounded-full font-bold text-sm">
            Donate
          </button> */}
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
          {/* <button className="block w-full text-left px-4 py-2 bg-[#F1685E] text-white rounded font-bold">
        Donate
          </button> */}
        </div>
      </nav>

    {/* Hero Section */}
    <section className=" mt-48 mb-24 flex items-center justify-center overflow-hidden bg-[#FFFFFF]">
            {/* Main content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left column - Text content */}
                <div className="space-y-8 transform transition-all duration-1000 translate-x-0 opacity-100">
                    <div className="space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-[#FFF6F6] backdrop-blur-sm rounded-full text-[#C5026D] text-sm font-medium">
                        <Heart className="w-4 h-4 mr-2 text-[#C5026D]" />
                        Evidence-Based Caregiver Support
                    </div>

                    {/* Main heading */}
                    <h1 className=" text-6xl md:text-8xl font-bold leading-tight">
                        <span className="block text-[#8C2B1D] ">Healthy</span>
                        {/* <span className="block bg-gradient-to-r from-pink-300 to-yellow-300 bg-clip-text text-transparent">
                        Communication
                        </span> */}
                        <span className="block text-[#8C2B1D] ">Communication</span>
                        <span className="block text-[#8C2B1D]">Practice</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-black leading-relaxed max-w-2xl">
                        A self-paced, online program using real caregivers’ narratives to empower family caregivers to develop communication skills that can promote their caregiving ability and mental well-being.
                         The goal of the program is to <u>enhance caregivers’ health with communication skills support.</u> We offer multiple programs targeted to family caregivers’ distinct needs based on the disease type & relationship.
                    </p>
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleScrollToResources}
                      aria-controls="resources"
                      className="group cursor-pointer select-none rounded-full bg-[#8C2B1D] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-50 hover:text-[#8C2B1D] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#8C2B1D]"
                    >
                      <div className="inline-flex items-center">
                        Explore Resources
                        <ArrowRight
                          aria-hidden="true"
                          className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1 "
                        />
                      </div>
                    </button>

                    {/* <button
                      type="button"
                      className="group flex items-center cursor-pointer select-none rounded-full border-2 border-white/30 bg-[#8C2B1D] px-8 py-4 text-lg font-semibold text-white hover:text-[#8C2B1D]  shadow-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#8C2B1D]"
                    >
                      <Play
                        aria-hidden="true"
                        className="mr-2 h-5 w-5 transform transition-transform duration-300 group-hover:scale-110"
                      />
                      Watch Demo
                    </button> */}
                    </div>

                    {/* Stats */}
                    {/* <div className="grid grid-cols-3 gap-6 pt-8">
                    <div className="text-center transform transition-all duration-1000 delay-0 translate-y-0 opacity-100">
                        <Users className="w-8 h-8 text-pink-300 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-black">10,000+</div>
                        <div className="text-sm text-black">Caregivers Helped</div>
                    </div>
                    <div className="text-center transform transition-all duration-1000 delay-200 translate-y-0 opacity-100">
                        <Heart className="w-8 h-8 text-pink-300 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-black">95%</div>
                        <div className="text-sm text-black">Satisfaction Rate</div>
                    </div>
                    <div className="text-center transform transition-all duration-1000 delay-400 translate-y-0 opacity-100">
                        <Star className="w-8 h-8 text-pink-300 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-black">4.9/5</div>
                        <div className="text-sm text-black">Average Rating</div>
                    </div>
                    </div> */}
                </div>

                {/* Right column - Visual content */}
                <div className="relative transform transition-all duration-3000 delay-300 translate-x-0 opacity-100">
                    <div className="relative">
                    {/* Main image container */}
                    <HeroCarousel images={[hero1, hero2, hero3, hero14, hero15, hero66]} interval={4000} />

                    {/* Live support badge */}
                    {/* <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg animate-bounce z-50">
                        <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-700">Expert Course Content</span>
                        </div>
                    </div> */}

                    
                    </div>
                </div>
                </div>
            </div>
      </section>

    {/* Why Section*/}
    <section className="bg-[#FFF6F6] py-8 px-8 md:px-16 flex flex-col justify-center items-center">
            <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* <div className="inline-flex items-center px-4 py-2 mb-6 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          <Heart className="w-4 h-4 mr-2" />
          Why It Matters
        </div> */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Caregivers Need{" "} Healthy Communication Practice
          {/* <span className="bg-gradient-to-r from-[#8C2B1D] via-[#992A2C] via-50% via-[#EC4899] to-[#F1685E] bg-clip-text text-transparent">
            Healthy Communication Practice
          </span> */}
        </h2>
        <p className="my-8 text-lg text-black">
        Caregiving communication skills promote better care and health outcomes for family caregivers and for the loved ones they care for. Healthy Communication Practice is the only supportive program available to caregivers that is...</p>
              {/* <p clsName="mb-8 text-sm text-black">We offer multiple programs targeted to family caregivers’ distinct needs based on the disease type (e.g., blood cancer, dementia) & relationship (e.g., spouse, parent).</p> */}
            </div>
            
        <div className="relative transform transition-all duration-1000 translate-x-0 opacity-100">
          <div className="grid grid-cols-4 gap-16 max-w-full mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer transform transition-all duration-500 hover:scale-110 translate-y-0 opacity-100 sm:col-span-2 md:col-span-1 flex justify-center"
                  style={{ transitionDelay: benefit.delay }}
                >
                    <div className={`w-40 h-40 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden bg-[#8c2b1d]`}>
                    {/* Hover overlay */}
                    <div className="absolute inset-0  rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative text-center p-2">
                      <IconComponent className="w-8 h-8 text-white mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-xs font-semibold leading-tight px-2 text-white" >
                      {benefit.text}
                      </div>
                    </div>
                    
                    {/* Border animation */}
                    {/* <div className="absolute inset-0 rounded-full border-2  scale-100 group-hover:scale-125 opacity-100 group-hover:opacity-0 transition-all duration-500"></div> */}
                    </div>
                </div>
              );
            })}
          </div>
          
          {/* Decorative SVG lines */}
          {/* <svg 
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
          </svg> */}
        </div>
      </section>

    {/* Testimonial Section*/}
    <div className="py-10 mb-2">
          <div className="relative max-w-4xl mx-auto transform transition-all duration-1000 translate-y-0 opacity-100 scale-100">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden group hover:shadow-3xl transition-all duration-500">
              
              {/* Decorative background circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100 to-[#ce2c37] rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Quote icon */}
              <div className="relative mb-4">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-[#ce2c37] rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
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
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-[#8C2B1D] via-[#992A2C] via-50% via-[#EC4899] to-[#DB2777] opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5">
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>
            </div>
          </div>
      </div>

    {/*Evidence Section*/}
    <section className=" bg-[#FFF6F6] py-10 relative ">
          <div className=" z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-18 transform transition-all duration-1000 translate-x-0 opacity-100">
                <div className="space-y-16">
                  {/* Badge */}
                  
                  {/* <div className="inline-flex items-center px-4 py-2 mb-6 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    <Zap className="w-4 h-4 mr-2" />
                    Evidence-Based Approach
                  </div> */}
    
                  {/* Heading */}
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Evidence-Based,{' '} Narrative Learning Approach
                    {/* <span className="bg-gradient-to-r from-[#8C2B1D] via-[#992A2C] via-50% via-[#EC4899] to-[#F1685E] bg-clip-text text-transparent">
                      Narrative Learning Approach
                    </span>{' '} */}
                    {' '} to Supporting Caregivers
                  </h2>
    
                  {/* Description paragraphs */}
                  <p className="text-lg text-gray-700 leading-relaxed">
                  Users learn caregiving communication skills through experts who introduce memorable theory-driven communication models and by observing caregivers enact the skills in real stories drawn from extensive research.
                  Developed <b>in partnership with instructional design experts</b>, users will feel engaged and can practice skills with interactive activities at home and at their own pace.
                  </p>
                  
                </div>
    
                {/* Highlighted box */}
                {/* <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                  <p className="text-gray-700 leading-relaxed">
                  Developed in partnership with instructional design experts, users will feel engaged and can practice skills with interactive activities at home and at their own pace.</p>
                </div> */}
              </div>
    
              {/* Right Column - Feature Grid */}
              <div className="relative transform transition-all duration-1000 delay-300 translate-x-0 opacity-100">
                <div className="grid grid-cols-2 gap-8">
                  {features.slice(0, 4).map((feature, index) => {
                    const IconComponent = feature.icon;
                    const isFeatured = true; // First item is featured
    
                    return (
                      <div
                        key={index}
                        className={`relative group cursor-pointer transform transition-all duration-500 translate-y-0 opacity-100 ${
                          isFeatured ? 'scale-105 z-10' : 'hover:scale-105'
                        }`}
                        style={{ transitionDelay: feature.delay }}
                      >
                        <div className={`relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 `}>
                          <div className="aspect-square  bg-[#1c1c1c]" style={{background: "linear-gradient(358deg,rgba(28, 28, 28, 0.99) 0%, rgba(26, 26, 26, 0.34) 74%)"}}>
                            <img
                              src={feature.image}
                              alt={feature.title}
                              className="w-full h-full object-left transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                            <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                            <div className="w-10 h-10 mb-2 rounded-full flex items-center justify-center transition-transform duration-300 bg-[#D3412C]">
                              <IconComponent className={`w-6 h-6 ${isFeatured ? 'scale-110' : 'group-hover:scale-110'}`} />
                            </div>
                            <h3 className="font-bold text-sm leading-tight mb-1">
                              {feature.title}
                            </h3>
                            <p className="text-xs opacity-90 leading-tight">
                              {feature.description}
                            </p>
                            </div>
                          {/* {isFeatured && (
                            <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                          )} */}
                        </div>
                      </div>
                    );
                  })}
    
                  {/* Fifth item spans both columns */}
                  {/* <div
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
                        <div className="w-10 h-10 mb-2 rounded-full flex items-center justify-center transition-transform duration-300 bg-[#D3412C]" >
                              <Clock className="w-6 h-6  transition-transform duration-300 group-hover:scale-110" /></div>
                        <h3 className="font-bold text-sm leading-tight mb-1">
                          {features[4]?.title}
                        </h3>
                        <p className="text-xs opacity-90 leading-tight">
                          {features[4]?.description}
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
    
                {/* Bottom info card */}
                {/* <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
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
                </div> */}
              </div>
            </div>
          </div>
      </section>

    {/* COntext Section */}
    <section className="py-10 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,_theme(colors.blue.500)_2px,_transparent_0)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center mb-16 transform transition-all duration-1000 translate-y-0 opacity-100">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800  rounded-full text-sm font-medium mb-6">
            <CircleCheckBig className="w-4 h-4 mr-2" />
            Key Caregiving Contexts
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Communication Skills in{" "} Three Caregiving Contexts
            {/* <span className="bg-gradient-to-r from-[#8C2B1D] via-[#992A2C] via-50% via-[#EC4899] to-[#F1685E]  bg-clip-text text-transparent" >
              Three Caregiving Contexts
            </span> */}
          </h2>
          {/* <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            The Healthy Communication Practice program teaches communication skills that will help caregivers 
            navigate complex and important care conversations in online, clinical, and family contexts.
          </p> */}
        </div>

        {/* Three context cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {/* Online Context Card */}
          <div className="group relative transform transition-all duration-700 hover:scale-105 translate-y-0 opacity-100">
            <div className="bg-[#F2C6C0] p-8 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              {/* <div className="absolute inset-0  opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div> */}
              <div className="inline-flex items-center justify-center w-16 h-16  rounded-2xl  mb-6 group-hover:scale-110 transition-transform duration-300">
                <Monitor className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Online Communication</h3>
              <p className="text-gray-700 leading-relaxed">
              Discussing online cancer information with clinicians and family members
              </p>
              {/* <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-5 h-5 text-black" />
              </div> */}
            </div>
          </div>

          {/* Clinical Context Card */}
          <div className="group relative transform transition-all duration-700 hover:scale-105 translate-y-0 opacity-100" style={{ transitionDelay: '200ms' }}>
            <div className="bg-[#F2C6C0] p-8 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div> */}
              <div className="inline-flex items-center justify-center w-16 h-16  mb-6 group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Clinical Communication</h3>
              <p className="text-gray-700 leading-relaxed">
                Talking with your family member's doctors in clinical settings
              </p>
              {/* <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-5 h-5 text-black" />
              </div> */}
            </div>
          </div>

          {/* Family Context Card */}
          <div className="group relative transform transition-all duration-700 hover:scale-105 translate-y-0 opacity-100" style={{ transitionDelay: '400ms' }}>
            <div className="bg-[#F2C6C0] p-8 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div> */}
              <div className="inline-flex items-center justify-center w-16 h-16  mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Family Communication</h3>
              <p className="text-gray-700 leading-relaxed">
                Facilitating open, supportive communication with family about challenging topics
              </p>
              {/* <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-5 h-5 text-black" />
              </div> */}
            </div>
          </div>
        </div>

        {/* Program Structure Section */}
        <div id='resources' className=" transform transition-all duration-1000 delay-500 translate-y-0 opacity-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Two Part Structure</h3>
            <p className="text-lg text-gray-600">
              The program is divided into two parts, with each part taking about 45 minutes to complete.
            </p>
          </div>
            

            {/* without images parts strictuces*/}
          {/* <div className="grid md:grid-cols-2 gap-8"> */}
            {/* Part I */}
            {/* <div onClick={()=> {window.location.href = "https://healthycommunicationpractice.com/"}} className="group relative cursor-pointer transform transition-all duration-500 hover:scale-102">
              <div className="bg-white p-8 group-hover:shadow-2xl transition-all duration-300 border-2 border-[#F1685E] rounded-3xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#D3412C] flex items-center justify-center text-white font-bold text-lg">
                      1
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">Part I</h4>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        45 minutes
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 transform transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Foundation communication skills and online information sharing
                </p>

                <div className="grid grid-cols-2 gap-3 transition-all duration-500 opacity-70 max-h-20 overflow-hidden">
                  {[
                    { text: "Communication Models", delay: "0ms" },
                    { text: "Online Information Skills", delay: "100ms" },
                    { text: "Expert Guidance", delay: "200ms" },
                    { text: "Interactive Exercises", delay: "300ms" }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 text-sm text-gray-600 transform transition-all duration-300 translate-x-2 opacity-70"
                      style={{ transitionDelay: item.delay }}
                    >
                      <CircleCheckBig className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className='font-bold'>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}

            {/* Part II */}
            {/* <div onClick={()=> {navigate("/course")}} id='part2' className="group relative cursor-pointer transform transition-all duration-500 hover:scale-102">
              <div className="bg-white p-8 group-hover:shadow-2xl transition-all duration-300 border-2 border-[#F1685E] rounded-3xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#D3412C] flex items-center justify-center text-white font-bold text-lg">
                      2
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">Part II</h4>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        45 minutes
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 transform transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Advanced skills for clinical and family conversations
                </p>

                <div className="grid grid-cols-2 gap-3 transition-all duration-500 opacity-70 max-h-20 overflow-hidden">
                  {[
                    { text: "Clinical Communication", delay: "0ms" },
                    { text: "Family Conversations", delay: "100ms" },
                    { text: "Challenging Situations", delay: "200ms" },
                    { text: "Practice Scenarios", delay: "300ms" }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 text-sm text-gray-600 transform transition-all duration-300 translate-x-2 opacity-70"
                      style={{ transitionDelay: item.delay }}
                    >
                      <CircleCheckBig className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className='font-bold'>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}


          {/*Duplicating it*/}
          <div className="grid md:grid-cols-2 gap-8 mt-4">
            {/* Part I */}
            <div className='flex flex-row border-2 border-[#F1685E] rounded-3xl overflow-hidden'>
              <div className='w-[30%] border-r-2 border-gray-300 mr-2'>
                <img src={hero5} alt="Part 1 preview" className="w-full h-full object-cover " />
              </div>
              <div className='w-[70%] ml-3 flex flex-col gap-2 m-auto p-2'>
                <h3 className="text-lg font-semibold">Part I: Navigating Cancer Information in Online and Clinical Settings</h3>
                <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        About 45 minutes
                </div>
                <p>We will describe skills for evaluating online health information, communicating online with others about health information, 
                  and communicating with doctors about online health information. Then, we will look at key skills you can use to support your parent in their clinical visits.
                </p>
                {/* <Button name='GO TO PART-I' link='https://healthycommunicationpractice.com/'  arrow={true} arrowPosition='right'/> */}
              </div>

            </div>

            {/* Part II */}
            <div className='flex flex-row border-2 border-[#F1685E] rounded-3xl overflow-hidden'>
              <div className='w-[30%] border-r-2 border-gray-300 mr-2'>
                <img src={hero1} alt="Part II preview" className="w-full h-full object-cover " />
              </div>
              <div className='w-[70%] ml-3 flex flex-col gap-2 m-auto p-2 '>
                <h3 className="text-lg font-semibold">Part II: Facilitating Open and Supportive Communication in the Family</h3>
                <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        About 45 minutes
                </div>
                <p>We will explore the importance of finding meaning in your caregiving role as well as how to strengthen your family relationships with open and supportive communication skills.
                   Then, we will look at how to use these skills when navigating relational challenges and difficult but important caregiving conversations.</p>
                {/* <Button name='GO TO PART-II' link='' onClick={()=> {navigate("/course")}} arrow={true} arrowPosition='right' /> */}
              </div>

            </div>

            
          </div>
        </div>

        {/* Collaboration logos */}
        <div className="text-center mt-15">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">In Collaboration With</h3>

          <div className="overflow-hidden mt-4">
            <div
              className="flex items-center"
              style={{ width: '200%', willChange: 'transform', animation: 'marquee 20s linear infinite' }}
              aria-hidden={false}
              role="list"
            >
              {[
                 logo2, logo3,  logo5, logo6
              ].concat([ logo2, logo3,  logo5, logo6]).map((logoSrc, idx) => (
                <div key={idx} className="flex-shrink-0 flex items-center justify-center mx-6" role="listitem">
                  <img src={logoSrc} alt={`partner-${idx}`} className="h-20 w-40 object-contain" />
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            /* reduce motion preference respect */
            @media (prefers-reduced-motion: reduce) {
              .animate-marquee, .flex[style*="animation"] { animation: none !important; }
            }
          `}</style>
        </div>
      </div>
     </section>
    
    {/*HCP Section */}
    <section
    id="HCP"
      className="py-10 bg-relative overflow-hidden "
      style={{
      background: `linear-gradient(358deg,rgba(28, 28, 28, 0.99) 0%, rgba(26, 26, 26, 0.55) 72%), url(${hero3})`,
      backgroundSize: "auto, cover",
      backgroundPosition: "center, center",
      backgroundRepeat: "no-repeat"
      }}
    >
      {/* Background patterns and effects */}
      <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(16%, #1b1b1b 20%, #0D0D0D 94%, #0D0D0D 100%)",
        opacity: 0.8,
      }}
      ></div>
      <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[size:40px_40px]"></div>
      </div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-white/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left column - Text content */}
          <div 
          className="space-y-8 transform transition-all duration-1000 translate-x-0 opacity-100 bg-[#e60505]/65 backdrop-blur-md rounded-3xl p-6 z-10"
          >
        <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
          <Heart className="w-5 h-5 mr-2" />
          Blood Cancer United Partnership
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Healthy Communication Practice for Blood Cancer Caregiving
          </h2>
          
          <p className="text-lg text-white/90 leading-relaxed">
          Each year nearly 200,000 people will be diagnosed with a leukemia, lymphoma or myeloma 
          (Blood Cancer United, 2025). Blood cancers can be chronic (with no cure) or acute and 
          require immediate life-changing treatment for years.
          </p>

          <div className="text-lg text-white/80 leading-relaxed">
          Blood cancer can occur across the lifespan, requiring families to care 
          for a child, spouse, or aging parent. With support from <u>Blood Cancer United</u>, we offer three options to support family caregivers affected by blood cancer.
          </div>
        </div>

        <div className="flex items-center justify-center w-full">
          <button onClick={() => window.open('https://healthycommunicationpractice.org', '_blank')} className="bg-white w-full text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          View Research
          <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </button>
          {/* <button className="text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
          View Research
          </button> */}
        </div>
        </div>

        {/* Right column - Caregiver type circles */}
        <div className="relative transform transition-all duration-1000 delay-300 translate-x-0 opacity-100">
        <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
          {caregiverTypesHCP.map((caregiver, index) => {
          const IconComponent = caregiver.icon;
          const isThirdItem = index === 2;
          
          return (
            <div 
            key={caregiver.id}
            className={`relative group cursor-pointer transform transition-all duration-500 translate-y-0 opacity-100 hover:scale-110 ${
              isThirdItem ? 'col-span-2 justify-self-center' : ''
            }`}
            style={{ transitionDelay: caregiver.delay }}
            >
            <div className="relative w-40 h-40 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
              {/* Background image */}
              {/* <div className="absolute inset-0 rounded-full overflow-hidden">
              <img 
                src={caregiver.image}
                alt={caregiver.title}
                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              />
              </div> */}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>

              {/* Content */}
              <div className="relative z-10 text-center p-4">
              {/* <IconComponent className="w-8 h-8 text-gray-700 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" /> */}
              <div className="text-gray-900 text-sm font-bold leading-tight">
                {caregiver.title}
              </div>
              {caregiver.comingSoon && (
                <div className="text-xs text-gray-500 mt-1 font-medium">
                *Coming Soon
                </div>
              )}
              </div>

              {/* Border ring effect */}
              <div className="absolute inset-0 rounded-full border-2 border-white/50 scale-100 group-hover:scale-125 opacity-100 group-hover:opacity-0 transition-all duration-500"></div>
            </div>
            </div>
          );
          })}
        </div>

        {/* Decorative SVG lines */}
        {/* <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          style={{ zIndex: -1 }}
        >
          <defs>
          <linearGradient 
            id="lineGradient" 
            x1="0%" 
            y1="0%" 
            x2="100%" 
            y2="100%"
          >
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0.1" />
          </linearGradient>
          </defs>
          <path 
          d="M 80 80 Q 200 120 320 80" 
          stroke="url(#lineGradient)" 
          strokeWidth="2" 
          fill="none" 
          className="animate-draw-line"
          />
          <path 
          d="M 80 240 Q 200 200 320 240" 
          stroke="url(#lineGradient)" 
          strokeWidth="2" 
          fill="none" 
          className="animate-draw-line"
          style={{ animationDelay: '0.5s' }}
          />
        </svg> */}
        </div>
      </div>
      </div>

      <style>{`
      @keyframes fade-in {
        from {
        opacity: 0;
        transform: translateY(10px);
        }
        to {
        opacity: 1;
        transform: translateY(0);
        }
      }

      @keyframes draw-line {
        from {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        }
        to {
        stroke-dasharray: 1000;
        stroke-dashoffset: 0;
        }
      }

      .animate-fade-in {
        animation: fade-in 0.3s ease-out;
      }

      .animate-draw-line {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: draw-line 2s ease-out forwards;
      }
      `}</style>
      </section>

    {/*Dementia Section*/}
    <div id="dementia" className="transform transition-transform duration-100 ease-out">
      
      <section
      className="py-10 bg-relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(358deg,rgba(28, 28, 28, 0.99) 0%, rgba(26, 26, 26, 0.55) 82%),url(${hero4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background patterns and effects */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(16%, #1b1b1b 20%, #0D0D0D 94%, #0D0D0D 100%)",
          opacity: 0.8,
        }}
      ></div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[size:40px_40px]"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            

            {/* Left Column - Interactive Cards */}
          <div className="relative transform transition-all duration-1000 delay-300 translate-x-0 opacity-100">
            <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
              {caregiverTypesDementia.map((caregiver, index) => {
                const IconComponent = caregiver.icon;
                const isThirdItem = index === 2;
                
                return (
                  <div 
                    key={caregiver.id}
                    className={`relative group cursor-pointer transform transition-all duration-500 translate-y-0 opacity-100 hover:scale-110 ${
                      isThirdItem ? 'col-span-2 justify-self-center' : ''
                    }`}
                    style={{ transitionDelay: caregiver.delay }}
                  >
                    <div className="relative w-40 h-40 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                      {/* Background image */}
                      {/* <div className="absolute inset-0 rounded-full overflow-hidden">
                        <img 
                          src={caregiver.image}
                          alt={caregiver.title}
                          className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                        />
                      </div> */}

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>

                      {/* Content */}
                      <div className="relative z-10 text-center p-4">
                        {/* <IconComponent className="w-8 h-8 text-gray-700 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" /> */}
                        <div className="text-gray-900 text-sm font-bold leading-tight">
                          {caregiver.title}
                        </div>
                        {caregiver.comingSoon && (
                          <div className="text-xs text-gray-500 mt-1 font-medium">
                            *Coming Soon
                          </div>
                        )}
                      </div>

                      {/* Border ring effect */}
                      <div className="absolute inset-0 rounded-full border-2 border-white/50 scale-100 group-hover:scale-125 opacity-100 group-hover:opacity-0 transition-all duration-500"></div>
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
                <linearGradient 
                  id="lineGradient" 
                  x1="0%" 
                  y1="0%" 
                  x2="100%" 
                  y2="100%"
                >
                  <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path 
                d="M 80 80 Q 200 120 320 80" 
                stroke="url(#lineGradient)" 
                strokeWidth="2" 
                fill="none" 
                className="animate-draw-line"
              />
              <path 
                d="M 80 240 Q 200 200 320 240" 
                stroke="url(#lineGradient)" 
                strokeWidth="2" 
                fill="none" 
                className="animate-draw-line"
                style={{ animationDelay: '0.5s' }}
              />
            </svg>
          </div>

          {/* Right Column - Text Content */}
          <div 
                className="space-y-8 transform transition-all duration-1000 translate-x-0 opacity-100 bg-[#4A0D66]/35 backdrop-blur-md rounded-3xl p-6"
                >
              
              {/* Partnership Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
                <Heart className="w-5 h-5 mr-2" />
                FDOH Partnership
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Healthy Communication Practice for Dementia Caregiving
                </h2>
                
                <p className="text-lg text-white/90 leading-relaxed">
                  Alzheimer's disease and related dementias affect nearly 7 million people over the age of 65—a number expected to double over the next 40 years (Alzheimer's Association, 2025).
                </p>
                
                <div className="text-lg text-white/80 leading-relaxed">
                  Dementia caregiving increases as the disease progresses, and caregivers are increasingly relied on during medical appointments. With support from the <u><a href='https://www.floridahealth.gov/provider-and-partner-resources/research/funding-opportunity-announcements/alzheimersfoa.html'>Florida Department of Health (FDOH) Ed & Ethel Moore Alzheimer's Disease Research Grant Program</a></u>, we offer two options to support family caregivers of a loved one with dementia.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center w-full">
                <a href='https://www.floridahealth.gov/provider-and-partner-resources/research/funding-opportunity-announcements/alzheimersfoa.html'  className=" w-full bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg text-center hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  View Research
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </a>
                {/* <button className="text-white border-2 border-white/30  px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                  View Research
                </button> */}
              </div>
            </div>
            
          </div>
        </div>

        <style>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes draw-line {
            from {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
            }
            to {
              stroke-dasharray: 1000;
              stroke-dashoffset: 0;
            }
          }

          .animate-fade-in {
            animation: fade-in 0.3s ease-out;
          }

          .animate-draw-line {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: draw-line 2s ease-out forwards;
          }
        `}</style>
      </section>
      </div>

    {/* Breast Cancer Section */}
    <div id="BC" className="transform transition-transform duration-100 ease-out">
    <section
      className="py-10 bg-relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(358deg,rgba(28, 28, 28, 0.99) 0%, rgba(26, 26, 26, 0.55) 85%),url(${hero55})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background patterns and effects */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(16%, #1b1b1b 20%, #0D0D0D 94%, #0D0D0D 100%)",
          opacity: 0.8,
        }}
      ></div>
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[size:40px_40px]"></div>
        </div> */}

        {/* Animated Background Elements */}
        {/* <div className="absolute top-20 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white/15 rounded-full blur-3xl animate-pulse delay-1000"></div> */}

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Text Content */}
            <div 
                className="space-y-8 transform transition-all duration-1000 translate-x-0 opacity-100 bg-[#E52D87]/40 backdrop-blur-md rounded-3xl p-6"
                >
              
              {/* Partnership Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
                <Heart className="w-5 h-5 mr-2" />
                UF Health & NIA Partnership
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Healthy Communication Practice for Breast Cancer Caregiving
                </h2>
                
                <p className="text-lg text-white/90 leading-relaxed">
                  Today more than 4 million women are living with breast cancer (National Cancer Institute, 2025). Daughters often provide caregiving to their mothers and they are increasingly young adults (aged 18-39)  who are the most at risk for
                  distress.
                </p>
                
                <div className="text-lg text-white/80 leading-relaxed">
                  With support from the <u><a href='https://cancer.ufl.edu/'>University of Florida Health Cancer Center</a></u> and <u><a href='https://nia.gov/'>National Institute on Aging (NIA)</a></u> we offer three options to support both caregiving mothers and daughters across the lifespan.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center w-full">
                <button className="bg-white w-full text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  View Research
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Column - Interactive Cards */}
            <div className="relative transform transition-all duration-1000 delay-300 translate-x-0 opacity-100">
            <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
              {caregiverTypes.map((caregiver, index) => {
                const IconComponent = caregiver.icon;
                const isThirdItem = index === 2;
                
                return (
                  <div 
                    key={caregiver.id}
                    className={`relative group cursor-pointer transform transition-all duration-500 translate-y-0 opacity-100 hover:scale-110 ${
                      isThirdItem ? 'col-span-2 justify-self-center' : ''
                    }`}
                    style={{ transitionDelay: caregiver.delay }}
                  >
                    <div className="relative w-40 h-40 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300 overflow-hidden">
                      {/* Background image */}
                      {/* <div className="absolute inset-0 rounded-full overflow-hidden">
                        <img 
                          src={caregiver.image}
                          alt={caregiver.title}
                          className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                        />
                      </div> */}

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>

                      {/* Content */}
                      <div className="relative z-10 text-center p-4">
                        {/* <IconComponent className="w-8 h-8 text-gray-700 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" /> */}
                        <div className="text-gray-900 text-sm font-bold leading-tight">
                          {caregiver.title}
                        </div>
                        {caregiver.comingSoon && (
                          <div className="text-xs text-gray-500 mt-1 font-medium">
                            *Coming Soon
                          </div>
                        )}
                      </div>

                      {/* Border ring effect */}
                      <div className="absolute inset-0 rounded-full border-2 border-white/50 scale-100 group-hover:scale-125 opacity-100 group-hover:opacity-0 transition-all duration-500"></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Decorative SVG lines */}
            {/* <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              style={{ zIndex: -1 }}
            >
              <defs>
                <linearGradient 
                  id="lineGradient" 
                  x1="0%" 
                  y1="0%" 
                  x2="100%" 
                  y2="100%"
                >
                  <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path 
                d="M 80 80 Q 200 120 320 80" 
                stroke="url(#lineGradient)" 
                strokeWidth="2" 
                fill="none" 
                className="animate-draw-line"
              />
              <path 
                d="M 80 120 Q 200 200 320 240" 
                stroke="url(#lineGradient)" 
                strokeWidth="2" 
                fill="none" 
                className="animate-draw-line"
                style={{ animationDelay: '1.5s' }}
              />
              <path 
                d="M 380 20 Q 350 350 320 240" 
                stroke="url(#lineGradient)" 
                strokeWidth="2" 
                fill="none" 
                className="animate-draw-line"
                style={{ animationDelay: '1.5s' }}
              />
            </svg> */}
          </div>
          </div>
        </div>
      </section>
      </div>

    {/* Footer Section */}
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold">
                Healthy Communication Practice
              </span>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering family caregivers with evidence-based communication skills to enhance their caregiving ability and mental well-being through real caregiver narratives and expert guidance.
            </p>
            
            {/* <div className="flex items-center space-x-1">
              {renderStars()}
              <span className="text-sm text-gray-400 ml-2">
                4.9/5 from 10,000+ caregivers
              </span>
            </div> */}
          </div>

          {/* Programs Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-400">
                {programs.map((program, index) => {
                // Map program names to their corresponding section IDs
                const sectionIds: Record<string, string> = {
                  'Blood Cancer': 'HCP',
                  'Dementia': 'dementia',
                  'Breast Cancer': 'BC',
                  'About': ''
                };
                
                const sectionId = sectionIds[program] || '';
                
                return (
                  <li key={index}>
                  <a 
                    href={`#${sectionId}`}
                    className="hover:text-white transition-colors cursor-pointer"
                    onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(sectionId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                    }}
                  >
                    {program}
                  </a>
                  </li>
                );
                })}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>healthy-communication-practice@ufl.edu</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>University Research Center</span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © 2024 Healthy Communication Practice. All rights reserved. 
            Developed in partnership with leading health organizations.
          </p>
        </div>
      </div>
      </footer>

    </div>

  );

};
export default LandingPage;
