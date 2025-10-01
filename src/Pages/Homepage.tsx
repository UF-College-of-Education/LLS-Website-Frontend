import Button from '../Components/Button'
import sam from "../assets/sam.png"
import adult from "../assets/HCP_Adult.png"
import LoginModal from "../Components/LoginModal"
import { useState } from 'react'

const Homepage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  let islogin: boolean = false;
  // Check if currentUser is in localStorage
  if (localStorage.getItem("currentUser") !== null) {
    islogin = true;
  }

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 md:px-[10%]">
      <div className="flex flex-col justify-center w-full p-5 md:p-10">
        <div className="flex flex-col">
        <h2 className="font-(family-name:--font-bree) font-extrabold tracking-wide items-center text-center text-[20px] md:text-[30px] text-[#CE2C37]">
          Caring for a Spouse with a Blood Cancer
          </h2>
          <p className="font-(family-name:--font-open-sans) text-center text-xs md:text-sm text-black my-5">
          Welcome to the Healthy Communication Practice™ Program for Caregivers of a spouse with a Blood Cancer. This two-part program is designed to support the important work you are doing as you care for your spouse with a blood cancer. We will present key concepts and skills that can be useful as you navigate online cancer information, communicate with doctors, and facilitate communication within your family. Throughout the two-part program, we will introduce you to caregivers who share stories and demonstrate the skills and concepts we are presenting. We estimate it will take approximately 45 minutes to go through each part of the program. Thank you for joining us!
</p>
        </div>
        <div className="flex flex-row flex-wrap justify-center md:justify-around mx-2 md:mx-[10%]">
          {islogin ? null : (
            <div>
              <button
                className="px-6 md:px-10 py-2 border-2 m-3 md:m-5 text-black font-extrabold border-[#CE2A35] rounded-3xl flex flex-row items-center text-xs md:text-sm font-(family-name:--font-open-sans) tracking-wider uppercase"
                onClick={handleOpenLoginModal}
              >
                LOGIN/REGISTER
              </button>
              <LoginModal
                isOpen={isLoginModalOpen}
                onClose={handleCloseLoginModal}
                onLoginSuccessRedirectTo="/parts"
              ></LoginModal>
            </div>
          )}
          <Button name="Meet the team" link="team" />
        </div>
      </div>
      <div className="flex flex-col justify-center w-full p-3 md:p-5">
        <div className="flex flex-col md:flex-row justify-start shadow-lg">
          <img src={sam} className="w-full md:w-2/6 rounded-xs min-w-30" />
          <div className="flex flex-col justify-start my-5 px-3 md:px-0">
            <div className="flex flex-row justify-start items-center">
              <img
                className="min-h-auto mx-3 md:mx-5"
                src={adult}
                alt=""
              />
            </div>
            <div>
            {/* {islogin ? <Button name="Go to Course" link="/parts" arrow={true} /> : (
            <div><Button name="Go to Course" link="/parts" arrow={true} onClick={handleOpenLoginModal} />
              <LoginModal
                isOpen={isLoginModalOpen}
                onClose={handleCloseLoginModal}
                onLoginSuccessRedirectTo="/parts"
              ></LoginModal>
            </div>
          )} */}
          <Button name="Go to Course" link="/parts" arrow={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
