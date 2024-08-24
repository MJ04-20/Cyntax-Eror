import './App.css'
import React from 'react';

function App() {
  return (
   
      <div className="bg-scroll bg-cover h-screen w-screen"
           style={{ backgroundImage: "url('/bgi.png')" }}>
        <div className="flex flex-row justify-between h-full w-full">
          <main className="flex-grow flex justify-center items-center pt-20">
            <p>SETTLE IN</p>
            {/* <CatchphraseRotator /> */}
          </main>
        </div>
      </div>
  
  )
}

export default App


