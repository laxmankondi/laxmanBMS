import React from "react";

import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//config
import TempPosters from "../config/TempPosters.config";

const HomePage = () => {
    return (
    <>
   <div className="flex flex-col gap-10">
   <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 my-3">The Best Of Entertainment</h1>
    <EntertainmentCardSlider/>    
    </div>

    
    <div className="bg-bms-800 p-12 flex-col gap-3">
    <div className= "container mx-auto px-4 flex flex-col gap-3">
        <div className="hidden md:flex">       
              <img
               src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
               className="w-full h-full"
               />         
        </div>
        <PosterSlider images={TempPosters} title="premieres" subtitle="Brand new  releases every friday" isDark/>
        </div>
    </div>
   </div>
   <div className="container mx-auto px-4 my-8">
   <PosterSlider images={TempPosters} title="Online Streaming Events" subtitle="Brand new  releases every friday" isDark={false}/>
   </div>
   <div className="container mx-auto px-4 my-8">
   <PosterSlider images={TempPosters} title="Outdoor events" subtitle="Brand new  releases every friday" isDark={false}/>
   </div> 
    </>
    );
};

export default HomePage;