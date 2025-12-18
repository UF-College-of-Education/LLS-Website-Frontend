import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import heart from "../assets/icons/Header_Heart.png";

interface Paper {
  paper: string;
  link: string;
}

interface PaperData {
  [category: string]: { [subCategory: string]: Paper[] } | Paper[];
}

const Evidence = () => {
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    // We use a small timeout to ensure the DOM has finished 
    // iterating through the JSON and rendering the elements
    const timer = setTimeout(() => {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // 100ms is usually enough

    return () => clearTimeout(timer);
  }
}, [location]);
    // Helper to create URL-friendly IDs
  const slugify = (text: string): string => 
    text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    const papers: PaperData  = {
  "Blood Cancer": {
    "Spousal Caregivers": [
      {
        "paper": "Wollney, E., Bylund, C. L., Wright, K. B., Campbell-Salome, G., Sae-Hau, M., Weiss, E., Bryan, E., Nesbit, T., & Fisher, C. L. (2025). The caregiver clinical communication process model: advancing the model to support spousal cancer caregivers. Supportive care in Cancer, 33(12), 1057.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/41231249/"
      },
      {
        "paper": "Mullis, M.D., Wollney, E., Bylund, C., Wright, K. B., Campbell-Salome, G., Sae-Hau, M., Weiss, E., & Fisher, C. L. (2024). \"A caregiver's marriage:\" The impact of blood cancer on the spousal connection. Cancer Care Research Online, 4(2), e055.",
        "link": "https://journals.lww.com/cancercareresearchonline/fulltext/2024/04000/_a_caregiver_s_marriage___the_impact_of_blood.3.aspx"
      },
      {
        "paper": "Wollney, E. N., Bylund, C. L., Vasquez, T. T., Campbell-Salome, G., Wright, K. B., Sae-Hau, M., ... & Fisher, C. L. (2024). Understanding the critical role of blood cancer spousal caregivers in clinical communication before, during, and after medical visits. Journal of Psychosocial Oncology Research and Practice, 6(3), 140.",
        "link": "https://journals.lww.com/jporp/fulltext/2024/07000/understanding_the_critical_role_of_blood_cancer.8.aspx"
      },
      {
        "paper": "Wright, K. B., Bylund, C. L., Bagautdinova, D., Vasquez, T. S., Sae-Hau, M., S Weiss, E., Rajotte, M., & Fisher, C. L. (2024). Caring for an Individual with Chronic Lymphocytic Leukemia (CLL): Understanding Family Caregivers' Perceptions of Social Support, Caregiver Burden, and Unmet Support Needs. Journal of Cancer Education, 39(2), 180-185.",
        "link": ""
      },
      {
        "paper": "Bagautdinova, B., Bacharz, K., Vasquez, T., Bylund, C.L., Sae-Hau, M., Weiss, E., Rajotte, M., Lincoln, G., Parker, N. & Fisher, C. L. (2023). Understanding the Impact of COVID-19 on Chronic Lymphocytic Leukemia (CLL) Caregiving and Related Resource Needs. Journal of Clinical Medicine, 12(4), 1648.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/36836183/"
      }
    ],
    "Adult Children Caring for an Aging Parent": [
      {
        "paper": "Gebert, R., Fisher, C. L., Bacharz, K., Granenmann, L., Loschiavo, M., Applebaum, A., & Kastrinos, A. (2025). Parental cancer caregiving in emerging and young adulthood: The impact of sibling dynamics on the caregiving experience. Journal of Health Psychology.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/40772456/"
      },
      {
        "paper": "Wright, K. W., Bylund, C. L., Bagautdinova, D., Hampton, C., Campbell-Salome, G., Weiss, E., Sae-Hau, M., & Fisher, C. L. (2024). Caring for a parent with a blood cancer: Sibling communication challenges and psychosocial outcomes. Families in Society: The Journal of Contemporary Social Services, 106(4), 1180-1192.",
        "link": ""
      },
      {
        "paper": "Wright, K. B., Bylund, C. L., Vasquez, T. S., Mullis, M. D., Sae-Hau, M., Weiss, E. S., Bagautdinova, D., & Fisher, C. L. (2023). Adult-child caregivers' family communication experiences after an older parent's blood cancer diagnosis: A survey exploring their openness, avoidance, and social support. Cancers, 15(12), 3177.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/37370787/"
      },
      {
        "paper": "Parker, N. D., Wollney, E. N., Bylund, C. L., Amin, T. B., Mullis, M. D., Bagautdinova, D., Sae-Hau, M., Weiss, E. S., Thomas, L. A., & Fisher, C. L. (2023). Living with a blood cancer in later life: The complex challenges and related support needs of adults aged 75 and older. Palliative & supportive care, 1-7.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/37606295/"
      },
      {
        "paper": "Mullis, D., Fisher, C. L., Kastrinos, A., Sae-Hau, M., Ragotte, M., Weiss, E., Bylund, C. L. (2023). Survivorship transitions in blood cancer: Identifying experiences and supportive care needs for caregivers. Journal of Cancer Survivorship 18, 1811-1821.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/37420150/"
      },
      {
        "paper": "Kastrinos, A., Fisher, C. L., Mullis, M., Wollney, E., Sae-Hau, M., Weiss, E., & Bylund, C. (2022). A lifespan approach to understanding family caregiver experiences of a blood cancer diagnosis. Palliative & Supportive Care, 20(1), 22-29.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/33890563/"
      },
      {
        "paper": "Bagautdinova, D., Bylund, C. L., Kastrinos, A., Hampton, C. N., Vasquez, T. S., Weiss, E. S., Sae-Hau, M., & Fisher, C. L. (2023). Adult sibling-related experiences while caring for a parent diagnosed with a blood cancer. Families, systems & health, 41(2), 140-148.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/36222643/"
      },
      {
        "paper": "Campbell-Salome, G., Fisher, C. L., Sae-Hau, M., Weiss, E., & Bylund, C.L. (2022). Impact of the family communication environment on burden and clinical communication in blood cancer caregiving. Psycho-oncology, 31(7), 1212-1220.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/35218278/"
      },
      {
        "paper": "Bylund, C. L., Wollney, E. N., Campbell-Salome, G., Applebaum, A. J., Paige, S. R., DeGruccio, K., Weiss, E., Sae-Hau, M., Arnold, J., Durante, D., Amin, T. B., Hampton, C. N., & Fisher, C. L. (2022). Improving clinical and family communication for adult child caregivers of a parent with a blood cancer: A single-arm pre-post pilot intervention. JMIR Cancer, 8(3), e38722.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/35788019/"
      },
      {
        "paper": "Fisher, C. L., Mullis, M. D., Kastrinos, A., Wollney, E., Sae-Hau, M., Weiss, E., & Bylund, C.L. (2021). \"Home wasn't home anymore\": Understanding the impact of blood cancer caregiving on the family system. Supportive Care in Cancer, 29(6), 3069-3076.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/33051829/"
      },
      {
        "paper": "Fisher, C. L., Wright, K.B., Hampton, C.N., Vasquez, T.S., Kastrinos, A., Applebaum, A.J., Sae-Hau, M., Weiss, E.S., Lincoln, G., & Bylund, C. (2021). Blood cancer caregiving during COVID-19: Understanding caregivers' needs. Translational Behavioral Medicine, 11(5), 1187-1197.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/34042962/"
      },
      {
        "paper": "Fowler, C., Fisher, C. L., & Pitts, M. (2014). Older adults' evaluations of middle-aged children's attempts to initiate discussion of care needs. Health Communication, 29, 717-727.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/24156501/"
      }
    ],
    "Parent Caregivers of Adolescents and Young Adults": [
      {
        "paper": "Mullis, M. D., Bylund, C. L., Bagautdinova, D., Bryan, E. G., Sae-Hau, M., Weiss, E. S., ... & Fisher, C. L. (2025). \"Somewhat of an Adult\": Understanding the \"Dance\" of Competing Tensions Parents Manage While Caring for an Adolescent or Young Adult (AYA) Diagnosed with Hematologic Malignancy. Cancers, 17(8), 1299.",
        "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12026285/"
      },
      {
        "paper": "Mullis, D., Fisher, C. L., Kastrinos, A., Sae-Hau, M., Ragotte, M., Weiss, E., Bylund, C. L. (2023). Survivorship transitions in blood cancer: Identifying experiences and supportive care needs for caregivers. Journal of Cancer Survivorship 18, 1811-1821.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/37420150/"
      },
      {
        "paper": "Wollney, E. N., Bylund, C. L., Kastrinos, A. L., Campbell-Salome, G., Sae-Hau, M., Weiss, E. S., & Fisher, C. L. (2023). Understanding parents' uncertainty sources and management strategies while caring for a child diagnosed with a hematologic cancer. PEC Innovation, 3, 100198.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/37662692/"
      },
      {
        "paper": "Kastrinos, A., Bylund, C., Mullis, M., Wollney, E., Sae-Hau, M., Weiss, E., & Fisher, C. L. (2022). Parents Caring for Children Diagnosed with a Blood Cancer from Infancy to Emerging Adulthood: A Life span Perspective. Journal of Adolescent and Young Adult Oncology, 11(1), 61-67.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/34647791/"
      },
      {
        "paper": "Kastrinos, A., Fisher, C. L., Mullis, M., Wollney, E., Sae-Hau, M., Weiss, E., & Bylund, C. (2022) A lifespan approach to understanding family caregiver experiences of a blood cancer diagnosis. Palliative & Supportive Care, 20(1), 22-29.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/33890563/"
      },
      {
        "paper": "Fisher, C. L., Mullis, M. D., Kastrinos, A., Wollney, E., Sae-Hau, M., Weiss, E., & Bylund, C.L. (2021). \"Home wasn't home anymore\": Understanding the impact of blood cancer caregiving on the family system. Supportive Care in Cancer, 29(6), 3069-3076.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/33051829/"
      }
    ]
  },
  "Alzheimer's Disease and Related Dementias": [
    {
      "paper": "Wollney, E. N., Armstrong, M. J., Hampton, C. N., McCall-Junkin, P., Bedenfield, N., Fisher, C. L., & Bylund, C. L. (2024). Triadic communication in medical encounters including individuals with dementia: A scoping review. Alzheimer Disease & Associated Disorders, 38(2), 213-225.",
      "link": "https://pubmed.ncbi.nlm.nih.gov/38812448/"
    },
    {
      "paper": "Taylor, G. B., Radhakrishnan, N., Fisher, C. L., Price, C., Tighe, P., Le, T., & Bylund, C. L. (2021). A qualitative analysis of clinicians' communication strategies with family members of patients experiencing hospital-acquired delirium. Geriatric Nursing, 42, 694-699.",
      "link": "https://pubmed.ncbi.nlm.nih.gov/33831716/"
    },
    {
      "paper": "Fowler, C., & Fisher, C. L. (2009). Attitudes toward decision-making and aging, and preparation for future care needs. Health Communication, 24, 691-630.",
      "link": "https://pubmed.ncbi.nlm.nih.gov/20183370/"
    },
    {
      "paper": "Nussbaum, J. F., & Fisher, C. L. (2009). Communication model for the competent delivery of geriatric medicine. Journal of Language and Social Psychology, 28, 190-208.",
      "link": ""
    },
    {
      "paper": "Nussbaum, J. F., Miller-Day, M., & Fisher, C. L. (2009). Communication and intimacy in older adulthood (Vol. 3). Madrid: Aresta. *Published in Spanish, English, and Catalan",
      "link": ""
    }
  ],
  "Breast Cancer": {
    "Adolescent and/or Young Adult Daughters; Caregiving Daughters": [
      {
        "paper": "Fisher, C. L., Campbell-Salome, G., Bagautdinova, D., Wright, K. B., Forthun, L. F., Bacharz, K. C., Mullis, M. D., Wolf, B., Pereira, D. B., Spiguel, L., & Bylund, C. L. (2023). Young Adult Caregiving Daughters and Diagnosed Mothers Navigating Breast Cancer Together: Open and Avoidant Communication and Psychosocial Outcomes. Cancers, 15(15), 3864.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/37568680/"
      },
      {
        "paper": "Fisher, C. L., Kastrinos, A., Wolf, B., Canzona, M., Piemonte, N., Curley, A., & Pipe, T. B. (2022). Helping Diagnosed Mothers and Their Adolescent-Young Adult Daughters Navigate Challenging Breast Cancer Conversations. Cancer Care Research Online 2(3), e025.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/38239410/"
      },
      {
        "paper": "Fisher, C. L., Kastrinos, A., Wolf, B., Piemonte, N., & Pipe, T. B. (2021). Coping with breast cancer together: Challenging topics for diagnosed mothers and adolescent and young-adult (AYA) daughters. Journal of Psychosocial Oncology, 1-14.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/34898401/"
      },
      {
        "paper": "Fisher, C. L., Rising, C., Wright, K., Afanaseva, D., Mullis, M., Burke-Garcia, A., & Cai, X. (2021). Culturally Appropriate Breast Cancer and Environmental Risk Messages: Targeting Racially and Ethnically Diverse Mothers. Journal of Cancer Education, 36(2), 284-293.",
        "link": ""
      },
      {
        "paper": "Fisher, C. L., Wright, K., Rising, C., Cai, X., Mullis, D., Burke-Garcia, A. & Afanaseva, D. (2020). Helping mothers and daughters talk about environmental breast cancer risk and risk-reducing lifestyle behaviors. International Journal of Environmental Research and Public Health, 17(13), 4757.",
        "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7370108/"
      },
      {
        "paper": "Fisher, C. L., Roccotagliata, T. J., Rising, C. J., Kissane, D., Glogowski, E., & Bylund, C. (2017). \"I don't want to be an ostrich\": Managing mothers' uncertainty during BRCA 1/2 genetic counseling. Journal of Genetic Counseling, 26, 455-468.",
        "link": ""
      },
      {
        "paper": "Fisher, C. L., Maloney, E., Glogowski, E., Hurley, K., Edgerson, S., Lichtenthal, W. G., Kissane, D., & Bylund, C. (2014). Talking about familial breast cancer risk: Topics and strategies to enhance mother-daughter interactions. Qualitative Health Research, 24, 517-535.",
        "link": "https://pubmed.ncbi.nlm.nih.gov/24633365/"
      },
      {
        "paper": "Bylund, C., Fisher, C. L., Brashers, D., Edgerson, S., Glogowski, E. A., Boyar, S. R., Kemel, Y., Siegel, B., Spencer, S., & Kissane, D. (2012). Sources of uncertainty about daughters' breast cancer risk that emerge during genetic counseling consultations. Journal of Genetic Counseling, 12, 292-304.",
        "link": ""
      }
    ],
    "Mother-Daughter Relationships Across the Lifespan": [
      {
        "paper": "Fisher, C. L., & Wolf, B. (2019). Understanding mother-daughter communication and health through a discourse of \"responsible womanhood\". In A. M. Alford & M. Miller-Day (Eds.), Constructing Motherhood and Daughterhood Across the Lifespan (pp. 265-280). New York: Peter Lang.",
        "link": ""
      },
      {
        "paper": "Fisher, C. L., Wolf, B., Fowler, C., & Canzona, M. R. (2017). Experiences of \"openness\" between mothers and daughters during breast cancer: Implications on coping and health outcomes. Psycho-Oncology, 11, 1872-1880.",
        "link": ""
      },
      {
        "paper": "Fisher, C. L. (2014). Coping together, side by side: Enriching mother-daughter communication across the breast cancer journey. New York: Hampton Press.",
        "link": ""
      },
      {
        "paper": "Fisher, C. L., Miller-Day, M., & Nussbaum, J. F. (2013). Healthy doses of positivity: Mothers' and daughters' use of positive communication when coping with breast cancer. In M. Pitts & T. J. Socha (Eds.), Positive communication in health and wellness (pp. 98-113). New York: Peter Lang.",
        "link": ""
      },
      {
        "paper": "Fisher, C. L., & Nussbaum, J. F. (2012). \"Linked lives\": Mother-adult daughter communication after a breast cancer diagnosis. In F. C. Dickson & L. M. Webb (Eds.), Communication for families in crisis: Theories, research, strategies (pp. 179-204). New York: Peter Lang.",
        "link": ""
      },
      {
        "paper": "Fisher, C. L. (2011). \"Her pain was my pain\": Mothers and daughters sharing the breast cancer journey. In M. Miller-Day (Ed.), Family communication, connections, and health transitions: Going through this together (pp. 57-76). New York: Peter Lang.",
        "link": ""
      },
      {
        "paper": "Fisher, C. L. (2010). Coping with breast cancer across adulthood: Emotional support communication in the mother-daughter bond. Journal of Applied Communication Research, 38, 386-411.",
        "link": ""
      }
    ]
  },
  "HOPE Model - Online Communication": [
    {
      "paper": "Johnson SB, Bylund CL. Identifying cancer treatment misinformation and strategies to mitigate its impacts with improved radiation oncologist-patient communication. Practical Radiation Oncology 13(4), 282-285.",
      "link": "https://pubmed.ncbi.nlm.nih.gov/36736620/"
    },
    {
      "paper": "Bylund, C. L., Taylor, G., Vasquez, T. S., Alpert, J., Johnson, S. B., Le, T., Paige, S. R., Close, J., & Markham, M. J. (2024). Talking with clinicians about online cancer information: a survey of cancer patients and surrogate information seekers. Supportive Care in Cancer, 32(6), 362.",
      "link": "https://pubmed.ncbi.nlm.nih.gov/38755329/"
    },
    {
      "paper": "Paige, S. R., Stellefson, M., Krieger, J. L., Anderson-Lewis, C., Cheong, J., & Stopka, C. (2018). Proposing a transactional model of eHealth literacy: concept analysis. Journal of medical Internet research, 20(10), e10175.",
      "link": "https://pubmed.ncbi.nlm.nih.gov/30279155/"
    }
  ],
  "PACES Model - Patient-Caregiver-Provider Communication": [
    {
      "paper": "Bylund, C. L., Goytia, E. J., D'Agostino, T. A., Bulone, L., Horner, J., Li, Y., Kemeny, M., & Ostroff, J. S. (2011). Evaluation of a pilot communication skills training intervention for minority cancer patients. Journal of psychosocial oncology, 29(4), 347-358.",
      "link": "https://pubmed.ncbi.nlm.nih.gov/21966720/"
    },
    {
      "paper": "Bylund, C. L., D'Agostino, T. A., Ho, E. Y., & Chewning, B. A. (2010). Improving clinical communication and promoting health through concordance-based patient education. Communication Education, 59(3), 294-311.",
      "link": ""
    }
  ],
  "TIES Model - Family Communication": [
    {
      "paper": "Fisher, C. L. & Campbell-Salome, G. (2025). Implementing family-centered care through narrative: Meeting families where they are to promote healthier outcomes. In J. Volkman (Ed.), A Multi-Perspective Approach to Narratives in Health Communication. Bloomsbury.",
      "link": ""
    },
    {
      "paper": "Fisher, C. L. (2025). Interpersonal communication as central to health across the lifespan: A family-centered approach to psychosocial oncology care. In A. Worthington, C. Fisher, C. Fowler, J. Krieger, M. Pitts, & J. Nussbaum (Eds.), Health communication, language and social action across the life span. Peter Lang.",
      "link": ""
    }
  ]
}
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

          {/* Main Content */}
        <div className="flex flex-col gap-12 mt-20 p-10 md:px-40 bg-white">
      {Object.entries(papers).map(([category, content]) => (
        <section 
          key={category} 
          id={slugify(category)} 
          className="flex flex-col gap-6 scroll-mt-4"
        >
          {/* Main Category Heading */}
          <h1 className="text-center font-bold capitalize text-[#CE2C37] text-3xl md:text-4xl">
            {category}
          </h1>

          {/* Type Guard: Check if content is an Array or a Nested Object */}
          {Array.isArray(content) ? (
            <div className="flex flex-col gap-4">
              {content.map((item, idx) => (
                <PaperEntry key={idx} item={item} />
              ))}
            </div>
          ) : (
            Object.entries(content).map(([subCat, subItems]) => (
              <div key={subCat} id={slugify(subCat)} className="flex flex-col gap-4 mt-4 scroll-mt-4">
                <h2 className="text-left font-bold capitalize text-[#CE2C37] underline text-xl">
                  {subCat}
                </h2>
                <div className="flex flex-col">
                  {subItems.map((item, idx) => (
                    <PaperEntry key={idx} item={item} />
                  ))}
                </div>
              </div>
            ))
          )}
        </section>
      ))}
    </div>
            </div>
  )
};

// Sub-component props interface
interface PaperEntryProps {
  item: Paper;
}

const PaperEntry: React.FC<PaperEntryProps> = ({ item }) => (
  <div className="mb-6">
    <span className="text-sm italic font-semibold text-gray-800 block pl-6 indent-[-1.5rem] leading-relaxed">
      {item.paper}
    </span>
    {item.link && (
      <a 
        href={item.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-[#CE2C37] underline text-sm hover:text-red-800 transition-colors"
      >
        Read the article here.
      </a>
    )}
  </div>
);


export default Evidence