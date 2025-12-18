import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo1 from "../assets/logos/astra.png";
import logo2 from "../assets/logos/FDOH.png"
import logo3 from "../assets/logos/NIAlogo.png"
import logo5 from "../assets/logos/BloodCancerUnited2025.svg"
import logo6 from "../assets/logos/UFhealthlogo.png"
import logo7 from "../assets/logos/carolan.jpg"
import heart from "../assets/icons/Header_Heart.png";
interface Sponsor {
  name: string;
  logo: string;
  url: string;
  slug: string;
  description: string;
}

const SponsorsPage: React.FC = () => {
  const location = useLocation();
  const sponsorsData = [
  {
    name: "Blood Cancer United",
    logo: logo5,
    url: "https://bloodcancerunited.org/",
    slug: "blood-cancer-united",
    description: "Blood Cancer United (formerly The Leukemia & Lymphoma Society) supported the formative research that informed the initial creation of Healthy Communication Practice. Their support since 2019 has supported the development of three versions of Healthy Communication Practice to meet the distinct needs of three types of blood cancer caregivers: adult children caring for aging parents; spousal caregivers; and parents caring for an adolescent or young adult (AYA)."
  },
  {
    name: "Florida Department of Health (FDOH)",
    logo: logo2,
    url: "https://www.floridahealth.gov/",
    slug: "florida-health",
    description: "The Florida Department of Health (FDOH) has provided funding from 2024-2026 through the Ed and Ethel Moore Alzheimer's Disease Research Program to conduct formative research with adult child and spousal dementia caregivers to inform the adaptation of Healthy Communication Practice for these two types of family dementia caregivers."
  },
  {
    name: "AstraZeneca",
    logo: logo1,
    url: "https://www.astrazeneca.com/",
    slug: "astrazeneca",
    description: "AstraZeneca provided funding from 2022-2023 to better understand the distinct needs of caregivers of a spouse living with chronic lymphocytic leukemia (CLL), which supported the foundational research for the Healthy Communication Practice supporting spousal caregivers’ needs."
  },
  {
    name: "National Institute on Aging (NIA)",
    logo:logo3,
    url: "https://www.nia.nih.gov/",
    slug: "nia",
    description: "The National Institute on Aging (NIA) provided funding in 2005-2008 for the initial study and launch of Fisher’s research program on mother-daughter communication and breast cancer that informs the development of the Healthy Communication Practice targeting caregiving mothers and daughters."
  },
  {
    name: "University of Florida Health Cancer Institute (UFHCI)",
    logo: logo6,
    url: "https://cancer.ufl.edu/",
    slug: "ufhci",
    description: "The University of Florida Health Cancer Institute (UFHCI) funded a pilot study in 2020-2022 for foundational research that would inform the development of a Healthy Communication Practice targeting young adult daughters caring for mothers living with breast cancer. The UFHCI continues to provide support to the members of the only NCI designated cancer center associated with a state university."
  },
  {
    name: "Carolan Research Institute (CRI)",
    logo: logo7,
    url: "https://fennellstory.com/carolan-research",
    slug: "carolan-research",
    description: "The Carolan Research Institute (CRI) supported the initial foundational research with adult child caregivers of parents as well as parents caring for a child with a blood cancer. They continued to support foundational research for spousal caregivers as well, helping to launch the initial development of Healthy Communication Practice."
  }
];

  useEffect(() => {
    // If there is a #hash in the URL, wait for render then scroll
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150); // Small delay to ensure JSON mapping is finished
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <main className="min-h-screen bg-white">
        {/* Navigation Bar */}
      <nav className="bg-[#8C2B1D] shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <a href="/"><img src={heart}  alt="Logo" className="h-8" /></a>
              </div>
              <div className="hidden md:flex space-x-6 items-center">
                <a href="/" className="text-white hover:text-gray-900 font-bold">
                  Home
                </a>
                <a href="/team" className="text-white hover:text-gray-900 font-bold">
                  Team
                </a>
                <a href="/evidence" className="text-white hover:text-gray-900 font-bold">
                  Evidence
                </a>
                <a href="/sponsors" className="text-white hover:text-gray-900 font-bold">
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
      <header className="my-20 text-center">
        <h1 className="text-4xl font-bold text-[#CE2C37] uppercase tracking-wide">
          Our Sponsors & Funding Partners
        </h1>
        <div className="h-1 w-24 bg-[#CE2C37] mx-auto mt-4" />
      </header>

      <div className="flex flex-col gap-24 p-20">
        {sponsorsData.map((sponsor) => (
          <section 
            key={sponsor.slug} 
            id={sponsor.slug} 
            className="flex flex-col md:flex-row gap-8 items-center md:items-start scroll-mt-32"
          >
            {/* Logo Container */}
            <div className="w-full md:w-1/3 flex flex-col items-center gap-4">
              <img 
                src={sponsor.logo} 
                alt={`${sponsor.name} logo`} 
                className="max-h-32 object-contain"
              />
              <a 
                href={sponsor.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#CE2C37] underline font-medium hover:text-red-800 transition-colors break-all text-center"
              >
                {sponsor.url.replace('https://', '')}
              </a>
            </div>

            {/* Description Container */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {sponsor.name}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {sponsor.description}
              </p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default SponsorsPage;