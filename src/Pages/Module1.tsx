import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import ProgressBar from '../Components/ProgressBar';
import ModuleHead from '../Components/ModuleHead';
import Breadcrumb from '../Components/Breadcrumb';
import FindingInfo from '../Module1/FindingInfo';
import Critical_ehealth_Informal from '../Module1/Critical_ehealth_Informal';


import Module_ending from '../Module1/Module_ending';
//Part 1 Modules
import Introduction from '../Module1/Part1/Introduction';
import Critical_eHealth_Literacy from '../Module1/Part1/Critical_eHealth_Literacy';
import Marcos_Story_Chapter1 from '../Module1/Part1/Marcos_Story_Chapter1';
import HOPE_Activity from '../Module1/Part1/HOPE_Activity';
import Communicative_eHealth from '../Module1/Part1/Communicative_eHealth';
import Marcos_Story_Chapter2 from '../Module1/Part1/Marcos_Story_Chapter2';
import Marcos_Story_Chapter3 from '../Module1/Part1/Marcos_Story_Chapter3';
import Communication_with_doctors from '../Module1/Part1/Communication_with_doctors';
import Resonding_to_James from '../Module1/Part1/Responding_to_James';

const Module1 = () => {

  const sections = [
    { id: 'introduction1', title: 'Introduction', sub:false},
    { id: 'critical-eliteracy', title: 'Critical eHealth Literacy', sub:false },
    {id: 'marcosStory-chapter1', title: "James' Story Chapter 1", sub:true},
    {id:'hope-activity', title: 'HOPE Activity', sub:true},
    { id: 'communicative-literacy', title: 'Communicative eHealth Literacy' },
    {id: 'marcosStory-chapter2', title: "James' Story Chapter 2", sub:true},
    {id: 'responding-to-james', title: "Responding to James' son", sub:true},
    { id: 'clinical-literacy', title: 'Clinical eHealth Literacy' },
    {id:'marcosStory-chapter3', title: "James' Story Chapter 3", sub:true},
    {id:'communication-with-doctors', title: 'Communication with Doctors', sub:false},
    // {id:'paces-introduction', title: 'PACES Introduction', sub:false},
    {id:  'p-present' , title: 'P: Present Information', sub:true},
    {id: 'p-ask', title: 'A: Ask Questions', sub:true},
    {id: 'p-clarify', title: 'C: Check Understanding', sub:true},
    {id: 'p-express', title: 'E: Express Concerns', sub:true}, 
    {id: 'p-state', title: 'S: State Preferences', sub:true},
  ];

  const [currentSection, setCurrentSection] = useState(sections[0].id);
  const [progress, setProgress] = useState(0);

  const renderContent = () => {
    switch (currentSection) {
      case 'introduction1':
        return <Introduction />;
      case 'critical-eliteracy':
        return <Critical_eHealth_Literacy />;
      case 'marcosStory-chapter1':
        return <Marcos_Story_Chapter1 />;
      case 'hope-activity':
        return <HOPE_Activity />
      case 'communicative-literacy':
          return <Communicative_eHealth />;
      case 'marcosStory-chapter2':
          return <Marcos_Story_Chapter2 />;
      case 'responding-to-james':
        return <Resonding_to_James />;
      case 'critical-literacy':
        return <Critical_ehealth_Informal />;
      case 'marcosStory-chapter3':
        return <Marcos_Story_Chapter3 />
      case 'communication-with-doctors':
        return <Communication_with_doctors />
      case 'paces-introduction':
          return <FindingInfo />;
      case 'p-present':
        return <FindingInfo />;
      case 'p-ask':
        return <FindingInfo />;
      case 'p-clarify':
        return <FindingInfo />;
      case 'p-express':
        return <FindingInfo />;
      case 'p-state':
        return <Module_ending />;
      default:
        return <p>Select a section from the sidebar.</p>;
    }
  };

  const handleSectionChange = (id: string) => {
    setCurrentSection(id);
    window.location.hash = id; 
    const currentIndex = sections.findIndex((section) => section.id === id);
    const progressPercentage = ((currentIndex + 1) / sections.length) * 100;
    setProgress(progressPercentage);
  };

  const handlePrevious = () => {
    const currentIndex = sections.findIndex((section) => section.id === currentSection);
    const userEmail = JSON.parse(localStorage.getItem("currentUser") || "{}").email;

    
    if (currentIndex == 0){
      window.location.href ='/parts';
    } else if (currentIndex > 0) {
      handleSectionChange(sections[currentIndex - 1].id);
    }
  };

  const handleNext = async() => {
    const currentIndex = sections.findIndex((section) => section.id === currentSection);
    const userEmail = JSON.parse(localStorage.getItem("currentUser") || "{}").email;

    try {
      
    const API_BASE = import.meta.env.VITE_API_BASE_URL;
const response = await fetch(`${API_BASE}/update_progress.php`, {
      method: "POST",
      
        headers:{
          "Content-Type": "application/json", // Ensure the server knows we're sending JSON
        },
        credentials: 'include',
      body: JSON.stringify({
        email: userEmail,
        section_code: sections[currentIndex].id,
        complete: true
      }),
    });
    if (!response.ok) {
      console.error("Failed to update progress:", response.statusText);
    } else {
      console.log("Progress updated for section:", sections[currentIndex].id);
    }

    // Wait 5 seconds (5000 ms)
    // await new Promise((resolve) => setTimeout(resolve, 5000));
      
    } catch (error) {
      console.error("Error in handleNext:", error);
      
    }

    if (currentIndex == sections.length - 1){
      window.location.href = '/parts';
    } else if (currentIndex < sections.length - 1) {
      handleSectionChange(sections[currentIndex + 1].id);
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace('#', ''); // Get the hash without the `#`
    if (hash) {
      const sectionExists = sections.find((section) => section.id === hash);
      if (sectionExists) {
        setCurrentSection(hash);
        const currentIndex = sections.findIndex((section) => section.id === hash);
        const progressPercentage = ((currentIndex + 1) / sections.length) * 100;
        setProgress(progressPercentage);
      }
    }
  }, [sections]);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const email = JSON.parse(localStorage.getItem("currentUser") || "{}").email;
        const API_BASE = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(`${API_BASE}/get_progress.php`, {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include',
        });
        const data = await response.json();
        const lastSection = data.find((d: any) => d.part_id === 1 && !d.is_completed);
        if (lastSection) {
          handleSectionChange(lastSection.section_code);
        }
      } catch (error) {
        console.error("Failed to fetch progress:", error);
      }
    };
    fetchProgress();
  }, []);
  

  return (
    <div className='flex flex-col'>
      <ModuleHead leftButtonText="Previous" headingText="Part 1: Navigating Cancer Information in Online and Clinical Settings" rightButtonText='Next' subHeadingText={sections.find(section => section.id === currentSection)?.title || ''} 
      onPrevious={handlePrevious} onNext={handleNext}/>
      <Breadcrumb paths={[{ name: 'Home', link: '/' },{ name: 'Part 1', link: '/part1' }]} />
      {/* Main Content */}
      <div className="flex flex-col md:flex-row p-[10px]">
        {/* Sidebar */}
        <Sidebar
          sections={sections}
          currentSection={currentSection}
          onSectionChange={handleSectionChange}
        />

        {/* Content Area */}
        <div className="w-7/9 p-8 text-black flex flex-col items-start">
          {renderContent()}
        </div>
      </div>
      <ProgressBar progress={progress} onPrevious={handlePrevious} onNext={handleNext} />
    </div>
  );
};

export default Module1;