import React from 'react'
import downloadbtn from "../../assets/icons/baseline-get_app-24p.png";
import samplevideo from "../../assets/SampleVideo.mp4";
import playButton from "../../assets/icons/Video_playButton.png";
import Button from '../../Components/Button';
import fdbckbtn from "../../assets/icons/baseline-report-24px.png"

const Communicative_eHealth = () => {
  return (
    <div className="w-full flex flex-col items-start">
      {/* Existing content */}
      <div className="w-full flex flex-col items-start">
      <span className="font-bold font-bree mb-3 text-lg sm:text-xl">Communicative eHealth Literacy</span>
        <span className="mb-3 font-bold text-xl sm:text-3xl">
        Communicating with Others about Online Health Information
        </span>
        {/* Video Section */}
        <div className="relative w-full pt-[56.25%] bg-white">
          <iframe src="https://player.vimeo.com/video/1114355497?h=4a2caafc82&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}} title="05_Communicative eHealth Literacy"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
        
      </div>
      <span className="my-6 text-sm sm:text-base rounded-xl shadow-2xl p-4 bg-white border border-gray-300">
      Next, let's return to James and see how he communicates with his son who shares some online health information.
</span>  

      
    
       
    </div>
  )
}

export default Communicative_eHealth