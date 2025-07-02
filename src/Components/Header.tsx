import heart from "../assets/icons/Header_Heart.png";
import headerBackground from "../assets/Header-Background_red.png";
import { useState,useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
const Header = () => {
  const { logout } = useAuth(); // Use the logout function from AuthContext
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Use state for login status

  useEffect(() => {
    // Update isLoggedIn based on localStorage
    setIsLoggedIn(localStorage.getItem("currentUser") !== null);
  }, []);

  const handleLogout = async (e: React.MouseEvent<HTMLAnchorElement>) => { // Use async and add event type
    e.preventDefault(); // Prevent the default link behavior
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/logout.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Logout successful on the server, now clear local storage and update state
        logout(); // Call the logout function from AuthContext
        setIsLoggedIn(false); // Update the state
      } else {
        console.error("Logout failed:", response.status);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  // let islogin: boolean = false;
  // // Check if currentUser is in localStorage
  // if (localStorage.getItem("currentUser") !== null) {
  //   islogin = true;
  // }

  // function deleteUser() {
  //   fetch(`${import.meta.env.VITE_API_BASE_URL}/logout.php`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     }})};

  return (
    <div>
      <header
        className="inset-x-0 top-0 z-50 w-full bg-repeat-x " style={{ backgroundImage: `url(${headerBackground})` }}   >
        <nav className="p-4 md:p-6 lg:px-8 flex flex-wrap justify-between items-center">
          <div className="flex items-center flex-wrap">
            <a href="/course" className="flex-shrink-0">
              <img
                className="h-10 w-10 md:w-15 md:h-auto mr-2 md:mr-4"
                src={heart}
                alt=""
              />
            </a>
            <span className="font-(family-name:--font-bree) font-extrabold text-lg md:text-xl lg:text-4xl mr-2">
              Healthy Communication Practice
            </span>
          </div>
          {!isLoggedIn ? null : (
            <div className="mt-4 md:mt-0">
              <a href="" className="relative group">
                <span
                  className="text-white text-sm md:text-lg lg:text-xl hover:text-white font-[--font-open-sans] font-bold"
                  onClick={handleLogout}
                >
                  👤 Hi, {JSON.parse(localStorage.getItem("currentUser") || "{}").name || "Guest"}
                </span>
                <span
                  className="absolute left-0 -bottom-6 bg-gray-800 text-white text-xs md:text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Logout
                </span>
              </a>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;