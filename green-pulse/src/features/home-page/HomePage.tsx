import NavBar from "../../shared/NavBar";
import { useState } from "react";
import SignUpModal from "../sign-up/SignUpModal";
import LoginModal from "../login-page/LoginModal";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const navigate= useNavigate();


  return (
    <>
    <NavBar/>
<div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col items-center justify-center px-4 text-center">
    <h1 className="text-5xl font-extrabold text-green-700 mb-6">
     Welcome to <span className="text-green-800">Green Pulse</span>
    </h1>
    <p className="text-lg text-gray-700 max-w-2xl mb-4">
   A real-time pulse of your composting impact — for a greener tomorrow.
    </p>
    <br/>
    <p className="text-lg text-gray-700 max-w-2xl mb-4">
        Every banana peel, coffee ground, and food scrap you compost helps reduce waste, enrich soil, and combat climate change.
    </p>
    <p className="text-md text-gray-600 max-w-2xl mb-8">
        Nature has always provided for us — it's time we give back. Track your compost contributions, measure your environmental impact, and join a community committed to sustainable living.
    </p>
   <div className="flex space-x-2">
   <button
        className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 px-4 rounded-xl shadow-lg transition-all duration-300"
        onClick={() => setShowLogin(true)}
      >Login
    </button>
      <button
        className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 px-4 rounded-xl shadow-lg transition-all duration-300"
        onClick={() => navigate('/dashboard')}
      >Take me to the dashboard directly</button>
   <button
        className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 px-3 rounded-xl shadow-lg transition-all duration-300"
        onClick={() => setShowSignUp(true)}
      >Sign Up</button>
    </div>
    <SignUpModal show={showSignUp} onClose={()=> setShowSignUp(false)} onSuccess={() => {
    setShowSignUp(false);
    setShowLogin(true); 
  }} />
    <LoginModal show={showLogin} onClose={()=> setShowLogin(false)} />


    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
      {[
        { title: "Track Your Impact", desc: "See how your composting helps reduce carbon footprint." },
        { title: "Join the Movement", desc: "Be part of a community fighting climate change." },
        { title: "Visualize Growth", desc: "Watch your contributions turn into real data insights." }
      ].map((f, i) => (
        <div key={i} className="bg-white shadow-md rounded-xl p-4">
          <h3 className="text-xl font-semibold text-green-700 mb-2">{f.title}</h3>
          <p className="text-gray-600 text-sm">{f.desc}</p>
        </div>
      ))}
    </div>

    <footer className="mt-16 text-sm text-gray-500">
        🌿 “The Earth is what we all have in common.” – Wendell Berry
    </footer>
    </div>
    </>
  )
}

export default HomePage