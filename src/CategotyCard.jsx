import React from 'react'

function CategoryCard({categoryName,image}) {
  return (
    <div className="w-[300px] rounded-md border">
    <img
      src={image}
      alt={categoryName}
      className="h-[200px] w-full rounded-md object-cover"
    />
    <div className="p-4">
      <h1 className="text-lg font-bold text-black">{categoryName}</h1>
      {/* <p className="mt-3 text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
      </p> */}
      <button
        type="button"
        className="mt-4 rounded-sm bg-[#42737B] px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
       Explore
      </button>
    </div>
  </div>
  )
}

export default CategoryCard