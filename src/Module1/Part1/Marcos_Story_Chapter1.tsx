
import audiofile from "../../assets/Arthur.mp3"
import playBtn from "../../assets/icons/baseline-play_arrow-.png"
import downloadbtn from "../../assets/icons/baseline-get_app-24p.png"
import samplevideo from "../../assets/SampleVideo.mp4"
import playButton from "../../assets/icons/Video_playButton.png"

const Marcos_Story_Chapter1 = () => {
    const STYLES = { videoIframeContainer: { padding: '56.25% 0 0 0', position: 'relative', }, videoIframe: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' } }
  return (
    <div className='w-full flex flex-col items-start'>
        {/* <div className='w-full flex flex-col items-start mb-5'>
            <span className='font-bold'> In this module you will:</span>
            <span>Learn how to apply e-health literacy skills in online health information activities.</span>
            <div className='w-full flex flex-col items-start mt-4 w-full bg-gray-300 p-1'>
                <div className='w-full flex items-center'>
                    <span
                        className='  rounded-full cursor-pointer'
                        onClick={() => {
                            const audio = document.getElementById('audio-player') as HTMLAudioElement;
                            if (audio.paused) {
                                audio.play();
                            } else {
                                audio.pause();
                            }
                        }}
                    >
                        <img src={playBtn} alt="Play" className='' />
                    </span>
                    <input
                        type='range'
                        className='mx-4 flex-grow'
                        min='0'
                        max='100'
                        value='0'
                        onChange={(e) => {
                            const audio = document.getElementById('audio-player') as HTMLAudioElement;
                            const value = parseInt(e.target.value, 10);
                            audio.currentTime = (value / 100) * audio.duration;
                        }}
                    />
                    <span className='text-sm' id='current-time'>0:00</span>
                    <span className='mx-2 text-sm'>/</span>
                    <span className='text-sm' id='total-time'>0:00</span>
                </div>
                <audio
                    id='audio-player'
                    src={audiofile}
                    onTimeUpdate={() => {
                        const audio = document.getElementById('audio-player') as HTMLAudioElement;
                        const currentTime = document.getElementById('current-time');
                        const progress = document.querySelector('input[type="range"]') as HTMLInputElement;
                        if (currentTime && progress) {
                            const minutes = Math.floor(audio.currentTime / 60);
                            const seconds = Math.floor(audio.currentTime % 60);
                            currentTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                            progress.value = ((audio.currentTime / audio.duration) * 100).toString();
                        }
                    }}
                    onLoadedMetadata={() => {
                        const audio = document.getElementById('audio-player') as HTMLAudioElement;
                        const totalTime = document.getElementById('total-time');
                        if (totalTime) {
                            const minutes = Math.floor(audio.duration / 60);
                            const seconds = Math.floor(audio.duration % 60);
                            totalTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                        }
                    }}
                />
            </div>
            <div className='flex flex-row justify-end w-full mt-2 '>
                <span>Download Transcript</span>
                <img src={downloadbtn} alt='download button'  className='ml-1'/>



            </div>
        </div> */}
        <div className='w-full flex flex-col items-start'>
            <span className='font-bold mb-3'> Dr. Samantha Paige:</span>
            <span className="mb-3">Dr. Samantha Paige is a health behavioral scientist who studies how to improve the ways that people access and communication about online health information to make informed health decisions.  .</span>
            
        <div className="relative w-full pt-[56.25%] bg-white"><iframe src="https://player.vimeo.com/video/1114355536?h=7ac8c2ccef&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"  style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}} title="03_James&#039; Story - Chapter 1 - Internet Search"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            
        </div>

    </div>
  )
}

export default Marcos_Story_Chapter1