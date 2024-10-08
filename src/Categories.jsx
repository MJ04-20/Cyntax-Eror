import React from 'react';
import { useLocation } from 'react-router-dom';
import CategoryCard from "./CategotyCard.jsx";

function Categories() {
  const location = useLocation();
  const city = location.state?.city || "Kalyani"; // Default if no city is passed

  return (
    <div className="bg-scroll bg-cover"
    style={{backgroundImage: "url('/bgi2.png')"}}>
          <div className='h-screen w-screen flex flex-col p-20 overflow-x-hidden '>
      <div className="flex justify-between mb-4">
      <h1 className='text-black font-extrabold'>Categories</h1>
        <h2 className='text-black  text-xl font-bold'>{city}</h2>
      </div>
      
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <CategoryCard categoryName="Transportation Fares" image={"Transport.jpeg"} />
          <CategoryCard categoryName="Food" image={"Food.jpeg"}/>
          <CategoryCard categoryName="Maid" image={"Maid.jpeg"}/>
          <CategoryCard categoryName="Gather Points" image={"Gather.jpeg"}/>
          <CategoryCard categoryName="Rent" image={"Flat.jpeg"}/>
         
          {/* Add more CategoryCard components here */}
          
        </div>
      </div>
    </div>
    </div>

  );
}

export default Categories;
