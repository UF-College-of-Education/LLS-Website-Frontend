import sam from "../assets/LLS Screenshots/bba.jpg"
import sam2 from "../assets/sam2.png"
import alarm from "../assets/icons/alarm.png"
import { useState, useEffect } from 'react'
import { Clock } from "lucide-react"

const Courses = () => {
  const email = JSON.parse(localStorage.getItem("currentUser") || "{}").email;
  const [isPart1Completed, setIsPart1Completed] = useState(false);
  const [isPart2Completed, setIsPart2Completed] = useState(false);


  useEffect(() => {
    const fetchProgress = async () => {
      const API_BASE = import.meta.env.VITE_API_BASE_URL;
      const res = await fetch(`${API_BASE}/get_part_status.php`,
        {
          headers:{
            "Content-Type": "application/json", // Ensure the server knows we're sending JSON
            },
  credentials: 'include'
        }
      );
      const data = await res.json();
      console.log(data);

      const part1 = data.find((d: any) => d.part_id === 1 && d.is_completed === 1);
      const part2 = data.find((d: any) => d.part_id === 2 && d.is_completed === 1);

      setIsPart1Completed(!!part1);
      setIsPart2Completed(!!part2);
      console.log(isPart1Completed, isPart2Completed);
    };
    fetchProgress();
  }, []);

  const handleGoToPart = async (part: number) => {
    const API_BASE = import.meta.env.VITE_API_BASE_URL;
      try {
        const res = await fetch(`${API_BASE}/get_progress.php`,
          {
            headers:{
              "Content-Type": "application/json",// Ensure the server knows we're sending JSON
              },
  credentials: 'include',
          }
        );
        const data = await res.json();
        console.log(data, "dataaaaaaa");
        const last = data.find((d: any) => d.part_id === part && d.is_completed === 0);
        console.log(last, "lastssafa");
        const section = last ? last.section_code : 'introduction';
        window.location.href = `/part${part}#${section}`;
      } catch (error) {
        console.error("Error fetching progress:", error);
        window.location.href = `/part${part}#introduction${part}`;
        
      }
  };

  

  

  return (
    <div className="flex flex-col items-center justify-center w-full px-5 md:px-[10%]">
      
      <div className="flex flex-col justify-center w-full p-5 gap-5">
        <div className="flex flex-col md:flex-row justify-start shadow-sm">
          <div className="w-full md:w-[60%] rounded-xs min-w-30 mr-0 md:mr-5 max-w-xl overflow-hidden">
            <div className="w-full h-56 md:h-80">
              <img src={sam} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col justify-start my-5">
            <div className="flex flex-col justify-start gap-7 pl-0 md:pl-5">
              <span className="font-(family-name:--font-bree) font-black text-black text-xl md:text-3xl">
          Part I: Navigating Cancer Information in Online and Clinical Settings
              </span>
              <span className="flex flex-row gap-5 justify-start">
          <Clock className="w-8 h-8 mr-1" />
          <span className="font-(family-name:--font-bree) font-medium tracking-widest text-black text-lg md:text-2xl">
            45 MINUTES
          </span>
              </span>
              <span className="font-(family-name:--font-open-sans) font-light text-[#2F2F2F] text-sm md:text-base">
              We will describe skills for evaluating online health information, communicating online with others about health information, and communicating with doctors about online health information. Then, we will look at key skills you can use to support your spouse in their clinical visits.
      </span>
            </div>
            <div className="flex flex-row gap-5 justify-start">
              <button
          className="px-5 md:px-10 w-fit cursor-pointer py-2 border-2 m-5 text-black font-extrabold border-[#CE2A35] rounded-3xl flex flex-row items-center text-xs md:text-sm font-(family-name:--font-open-sans) tracking-wider uppercase"
          onClick={() => handleGoToPart(1)}
              >
          GO To PART 1 →
              </button>
              {isPart1Completed ? (
          <span className="text-green-500 px-5 md:px-10 mt-6">✔ Completed</span>
              ) : (
          <span className="text-yellow-500 px-5 md:px-10 mt-6">⌛ In Progress</span>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-start shadow-sm">
          {/* <img src={sam2} className="w-full md:w-[60%] rounded-xs min-w-30 mr-0 md:mr-5 max-w-xl" /> */}
            <div className="w-full md:w-[60%] rounded-xs min-w-30 mr-0 md:mr-5 max-w-xl overflow-hidden">
            <div className="w-full h-56 md:h-80">
              <img
              src={sam2}
              className="w-full h-full object-cover"
              style={{ objectPosition: '72% center' }}
              />
            </div>
            </div>
          <div className="flex flex-col justify-start my-5">
            <div className="flex flex-col justify-start gap-7 pl-0 md:pl-5">
              <span className="font-(family-name:--font-bree) font-black text-black text-xl md:text-3xl">
                Part II: Facilitating Open and Supportive Communication in the Family
              </span>
              <span className="flex flex-row gap-5 justify-start">
                <Clock className="w-8 h-8 mr-1" />
                <span className="font-(family-name:--font-bree) font-medium tracking-widest text-black text-lg md:text-2xl">
                  45 MINUTES
                </span>
              </span>
              <span className="font-(family-name:--font-open-sans) font-light text-[#2F2F2F] text-sm md:text-base">
              We will explore the importance of finding meaning in your caregiving role as well as how to strengthen your family relationships with open and supportive communication skills. Then, we will look at how to use these skills when navigating relational challenges and difficult but important caregiving conversations.</span>
            </div>
            <div className="flex flex-row gap-5 justify-start">
              <button
                className="px-5 md:px-10 w-fit cursor-pointer py-2 border-2 m-5 text-black font-extrabold border-[#CE2A35] rounded-3xl flex flex-row items-center text-xs md:text-sm font-(family-name:--font-open-sans) tracking-wider uppercase"
                onClick={() => handleGoToPart(2)}
              >
                GO To PART 2 →
              </button>
              {!isPart1Completed ? (
                <div></div>
              ) : isPart2Completed ? (
                <span className="text-green-500 px-5 md:px-10 mt-6">✔ Completed</span>
              ) : (
                <span className="text-yellow-500 px-5 md:px-10 mt-6">⌛ In Progress</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;