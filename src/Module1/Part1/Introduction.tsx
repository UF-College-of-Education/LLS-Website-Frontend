import React from 'react';
import downloadbtn from "../../assets/icons/baseline-get_app-24p.png";
import samplevideo from "../../assets/Part1_Videos/01_introduction.mp4";
import playButton from "../../assets/icons/Video_playButton.png";

const Introduction = () => {
  return (
    <div className="w-full flex flex-col items-start px-1 sm:px-1 lg:px-8">
      {/* Existing content */}
      <div className="w-full flex flex-col items-start">
        <span className="font-bold font-bree mb-3 text-lg sm:text-xl">Introduction</span>
        <span className="mb-3 font-bold text-xl sm:text-3xl">
        Navigating Cancer Information in Online and Clinical Settings
        </span>
        <div className="relative w-full pt-[56.25%] bg-white">
        <iframe src="https://player.vimeo.com/video/1115176836?h=42a0c06632&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"  referrerPolicy="strict-origin-when-cross-origin" style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}} title="01_Introduction - Part 1 - Navigating Cancer Info Online"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
      </div>

      <div className="w-full flex flex-col items-start">
        <span className="my-6 text-sm sm:text-base rounded-xl shadow-2xl p-4 bg-white border border-gray-300">
        Next, we will introduce the HOPE model, a tool to help evaluate the credibility of online health information. 
        <br /><br />The NEXT and PREVIOUS page buttons can help you move through the program.</span>
      </div>
    </div>
  );
};

export default Introduction;
