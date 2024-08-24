import React, { useState } from "react";
import { Outlet } from "react-router-dom";

function Login() {
  const [active, setActive] = useState(false);
  
  return (
    <div className="bg-scroll bg-cover"
    style={{backgroundImage: "url('/bgi2.png')"}}>
   <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r backdrop-blur-md bg-white/30">
      <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-4xl min-h-[480px]">
        
        {/* Sign Up Form */}
        <div className={`absolute top-0 left-0 w-full md:w-1/2 h-full transition-transform duration-1000 ease-in-out ${active ? "-translate-x-full" : "translate-x-[100%]"} flex items-center justify-center`}>
          <div className="w-full p-5">
            <form className="flex flex-col items-center justify-center text-center">
              <h1 className="text-3xl text-black font-bold">Create Account</h1>
              <button className="text-black bg-rose-100" >Sign Up with Google</button>
            </form>
          </div>
        </div>

        {/* Sign In Form */}
      <div className={`absolute top-0 w-full h-full transition-transform duration-1000 ease-in-out ${active ? "translate-x-[-23%]" : "translate-x-full"} flex items-center justify-center`}>
          <div className="w-full p-10">
            <form className="flex flex-col items-center text-center">
              <h1 className="text-3xl text-black font-bold">Sign In</h1>
              <button className="text-black bg-rose-100" >Sign In with Google</button>
            </form>
          </div>
        </div>

        {/* Toggle Container */}
        <div className={`absolute top-0 left-1/2 h-full w-1/2 overflow-hidden z-50 flex items-center justify-center transition-transform duration-1000 ease-in-out ${active ? "translate-x-[11%]" : "translate-x-[-100%]"}`}>
          <div className="w-full h-full bg-gradient-to-r from-rose-100 to-rose-50 text-black flex items-center justify-center flex-col text-center">
            <h1 className="text-2xl font-bold">{active ? "Welcome! Back " : "Hello, Friend!"}</h1>
            <p className="text-sm mt-4">{active ? "Continue with Google" : "Register your personal details"}</p>
            <button onClick={() => setActive(!active)} className="bg-transparent border-rose-200 border-white py-2 px-6 rounded-md mt-4">
              {active ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
