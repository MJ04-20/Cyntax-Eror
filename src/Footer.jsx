import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full z-50 min-h-max backdrop-blur-md bg-white/30">
        <div className="flex flex-col justify-between text-red-500 content-center">
          <div className="flex space-x-5">
            <p className="text-3xl font-bold  bg-gradient-to-b from-[#ffffff] to-[#3EB0C3] bg-clip-text text-transparent" style={{fontFamily: "'Qwitcher Grypen', cursive"}}>CYNTAX EROR</p>

            <a href="https://www.linkedin.com/in/nikhil-tiwari-45a18828b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer">
              <div
                className="w-12 h-12 bg-gray-600 rounded-full bg-cover bg-center transform transition-transform duration-300 ease-in-out hover:scale-110"
                style={{ backgroundImage: "url('/nikhil.jpg')" }}
              ></div>
            </a>

            <a href="https://www.linkedin.com/in/mrutyunjay-lodhi-b48171210/" target="_blank" rel="noopener noreferrer">
              <div
                className="w-12 h-12 bg-gray-600 rounded-full bg-cover bg-center transform transition-transform duration-300 ease-in-out hover:scale-110"
                style={{ backgroundImage: "url('/mj.jpg')" }}
              ></div>
            </a>

            <a href="https://www.linkedin.com/in/md-zaid-faizal/" target="_blank" rel="noopener noreferrer">
              <div
                className="w-12 h-12 bg-gray-600 rounded-full bg-cover bg-center transform transition-transform duration-300 ease-in-out hover:scale-110"
                style={{ backgroundImage: "url('zaid.jpg')" }}
              ></div>
            </a>

            <a href="https://www.linkedin.com/in/r-k-shankar-235b99296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer">
              <div
                className="w-12 h-12 bg-gray-600 rounded-full bg-cover bg-center transform transition-transform duration-300 ease-in-out hover:scale-110"
                style={{ backgroundImage: "url('rk.jpg')" }}
              ></div>
            </a>

            <a href="https://www.linkedin.com/in/rana-prathap-nenavath-bb4971306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer">
              <div
                className="w-12 h-12 bg-gray-600 rounded-full bg-cover bg-center transform transition-transform duration-300 ease-in-out hover:scale-110"
                style={{ backgroundImage: "url('rana.jpg')" }}
              ></div>
            </a>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
