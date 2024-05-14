import React from "react";

const Banner = ({ theme }) => {
   return (
      <div
         className={`container mx-auto my-3 theme-${
            theme === "" ? "default" : theme
         }`}
      >
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <img
               src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg"
               alt="home-image"
               className="w-full object-fit rounded-md"
            />
            <div className="flex flex-col gap-3 col-span-2">
               <h2 className="text-3xl font-bold text-primary">
                  Book your new Home Right now
               </h2>
               <p className="text-lg font-normal">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                  perspiciatis sed sit commodi eius rem minus deleniti quae
                  dignissimos, rerum temporibus nesciunt, tempora voluptatem
                  neque corrupti illo consectetur suscipit. A.
               </p>
               <div className="space-x-3">
                  <button className="px-4 py-2 bg-primary text-white rounded-md d-inline">
                     Button
                  </button>
                  <button className="px-4 py-2 bg-transparent border border-primary text-primary rounded-md d-inline">
                     Button
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
