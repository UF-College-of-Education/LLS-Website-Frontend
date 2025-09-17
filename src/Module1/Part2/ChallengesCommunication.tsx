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
        <span className="font-bold mb-3 text-lg sm:text-xl">Introduction</span>
        <span className="mb-3 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
        </span>
        
        <div className="relative w-full pt-[56.25%] bg-white">
        <iframe src="https://player.vimeo.com/video/1114361486?h=8f6c57ff02&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"  referrerPolicy="strict-origin-when-cross-origin" style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}} title="23_Challenges and Communication Skills - Identifying Challenges"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
        </div>

      <div className="w-full flex flex-col items-start">
        <span className="my-3 text-sm sm:text-base">
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per.
        </span>
      </div>
    </div>
    

  );
};

export default ChallengesCommunication;