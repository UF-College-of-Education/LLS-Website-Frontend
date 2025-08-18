import './App.css'
import Header from './Components/Header';
import Courses from './Pages/Courses';
import Homepage from './Pages/Homepage'
import { Route, Routes,Outlet } from "react-router-dom"
import Team from './Pages/Team';
import footer from "./assets/Footer-Background.png"
import Module1 from './Pages/Module1';
import Register from './Pages/Register';
import { AuthProvider } from './auth/AuthContext'; 
import Dashboard from './Pages/Dashboard';
import LandngPage from './Pages/LandngPage';
import Module2 from './Pages/Module2';
import ReactGA from "react-ga4";
import { useEffect } from 'react';


const MainLayout: React.FC = () => (
  <>
    <Header />
    <main className="flex-1 w-[90%] mx-auto">
      <Outlet />
    </main>
    <footer className="w-full mt-auto">
      <img src={footer} className="block w-full h-auto" alt="Healthy Communication Practice Footer" />
    </footer>
  </>
);

function App() {
  useEffect(() => {
    ReactGA.initialize("G-XD10D86398");
  }, []);

  return (
    <div className="bg-white w-screen min-h-screen flex flex-col m-0">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandngPage />} />
          <Route path="/team" element={<Team />} />
            <Route element={<MainLayout />}>
            <Route path="/course" element={<Homepage />} />
            <Route path="/parts" element={<Courses />} />
            
            <Route path="/part1" element={<Module1 />} />
            <Route path="/part2" element={<Module2 />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Optional: 404 Not Found Route */}
            <Route path="*" element={<div className="text-center py-10 text-red-600 text-xl">404 - Page Not Found</div>} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App
