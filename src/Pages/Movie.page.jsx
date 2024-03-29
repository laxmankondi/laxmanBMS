import React from 'react';
import {FaCcVisa, FaCcApplePay} from "react-icons/fa";
import Cast from '../components/Cast/Cast.component';

import MovieHero from '../components/MovieHero/MovieHero.component';
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//config
import TempPosters from "../config/TempPosters.config";


const Movie = () => {

  const settings ={
    infinite:false,
    speed: 500,
    slidesToShow:4,
    slidesToScroll:4,
    InitialSlide:0,
    responsive:[
        { 
        breakpoint: 1024,
        settings:{
            slidesToShow:3,
            slidesToScroll:3,
            infinite:true,
        },
    },
    { 
     breakpoint: 600,
     settings:{
         slidesToShow:2,
         slidesToScroll:2,
         InitialSlide:2,
     },
 },
 { 
     breakpoint: 480,
     settings:{
         slidesToShow:3,
         slidesToScroll:1,
     },
 },
 ],
                            
};

    
    return (
        <>
          <MovieHero />
          <div className="my-10 container px-4 lg:w-2/3 lg:ml-20">
            <div className="flex flex-col items-start">
            <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
            <p>
            Kong is on a journey to find his true home but gets in the way of an enraged Godzilla. The epic clash is only the beginning of the mystery that lies within the core of the Earth.
            </p>
          </div>
          <div className="my-8">
          <hr/>
          </div>

          <div className="my-8">
            <h2 className="text-gray-800 font-bold text-2xl mb-3">Applicable offers</h2>

          <div className="flex flex-col gap-3 lg:flex-row">
          <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
              <FaCcVisa  className="w-full h-full"/>
              </div>
              <div className="flex flex-col items-start ">
                <h2 className="ect-gray-700 text-xl font-bold">Visa Stream Offer</h2>
               <p className="text-gray-600"> Get 50% off up to INR 150 on all RuPay cards* on BookMyShow Stream.</p>
              </div>             
            </div>
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
              <FaCcApplePay  className="w-full h-full"/>
              </div>
              <div className="flex flex-col items-start ">
                <h2 className="ect-gray-700 text-xl font-bold">Filmy Pass</h2>
               <p className="text-gray-600">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
              </div>             
            </div>
          </div>
         </div>
         <div className="my-8">
          <hr/>
          </div>
          <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl">Cart & Crew</h2>

          <div className="flex flex-wrap gap-4">
            <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/alexander-skarsgard-1057902-24-03-2017-13-51-10.jpg"
                    castName="Alexander" role="Nathan Lind"/>
            <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/millie-bobby-brown-1079885-24-05-2019-05-20-16.jpg"
                    castName="Maillie  Bobby" role="Maddison Russell"/>
            <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/rebecca-hall-7076-11-09-2017-05-49-56.jpg"
                    castName="Rebecca Hall" role="ilene Andrews"/>
          </div>
         </div >
         <div className="my-8">
          <hr/>
          </div>
         <div className="my-8">
           <PosterSlider config={settings} images={TempPosters} title="You Might Also Like" isDark={false}/>
         </div>
         <div className="my-8">
          <hr/>
          </div>
         <div className="my-8">
           <PosterSlider config={settings} images={TempPosters} title="BMS XCLUSIV" isDark={false}/>
         </div>
        </div>
       </>
    );
};

export default Movie;
