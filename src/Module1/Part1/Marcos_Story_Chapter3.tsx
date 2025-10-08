import audiofile from "../../assets/Arthur.mp3"
import playBtn from "../../assets/icons/baseline-play_arrow-.png"
import downloadbtn from "../../assets/icons/baseline-get_app-24p.png"
import samplevideo from "../../assets/SampleVideo.mp4"
import playButton from "../../assets/icons/Video_playButton.png"

const Marcos_Story_Chapter3 = () => {
  return (
    <div className='w-full flex flex-col items-start'>
        <div className='w-full flex flex-col items-start mb-5'>
        <span className="font-bold font-bree mb-3 text-lg sm:text-xl">James' Story Chapter 3</span>
        <span className="mb-3 font-bold text-xl sm:text-3xl">
        Talking to Doctors Who Approach Online Health Information Differently
        </span>
            
        </div>
        <div className="relative w-full pt-[56.25%] bg-white">
        <iframe src="https://player.vimeo.com/video/1114355586?h=7f7bae0f46&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"  referrerPolicy="strict-origin-when-cross-origin" style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}} title="09_James&#039; Story - Chapter 3 - Talking to Doctors"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
        <span className="my-6 w-full text-sm sm:text-base rounded-xl shadow-2xl p-4 bg-white border border-gray-300">
        Next, let's learn more about how to effectively communicate with your spouse's doctors.
</span>  
    </div>
  )
}

export default Marcos_Story_Chapter3