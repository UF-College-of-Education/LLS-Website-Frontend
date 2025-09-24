import React, { useState } from 'react';
import downloadbtn from "../../assets/icons/baseline-get_app-24p.png";
import samplevideo from "../../assets/SampleVideo.mp4";
import playButton from "../../assets/icons/Video_playButton.png";
import audiofile from "../../assets/Arthur.mp3"
import playBtn from "../../assets/icons/baseline-play_arrow-.png"

const ChallengesCommunication = () => {
  
  

  return (
    <div className="w-full flex flex-col items-start px-1 sm:px-1 lg:px-8">
      {/* Existing content */}
      <div className="w-full flex flex-col items-start">
      <span className="font-bold font-bree mb-3 text-lg sm:text-xl">Challenges and Communication Skills</span>
        <span className="mb-3 font-bold text-xl sm:text-3xl">
        Identifying Challenges: Relational Tensions and Difficult Topics
        </span>
        
        <div className="relative w-full pt-[56.25%] bg-white">
        <iframe src="https://player.vimeo.com/video/1114361486?h=8f6c57ff02&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"  referrerPolicy="strict-origin-when-cross-origin" style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}} title="23_Challenges and Communication Skills - Identifying Challenges"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
        </div>

      <div className="w-full flex flex-col items-start">
      <span className="my-6 w-full text-sm sm:text-base rounded-xl shadow-2xl p-4 bg-white border border-gray-300">
      Next, we will hear how caregivers have navigated challenging conversations.
</span> 
      </div>
    </div>
    

  );
};

export default ChallengesCommunication;