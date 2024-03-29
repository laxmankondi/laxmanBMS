import React, {useState, useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//component
import { NextArrow, PrevArrow } from "./Arrows.component";


const HeroCarousal = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
     const requestNowPlayingMovies = async () => {
         const getImages = await axios.get("/movie/now_playing");
         setImages(getImages.data.results);
     };    
     
     requestNowPlayingMovies();
      

    }, []);

    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding :"300px",
        slideToshow: 1,
        infinite: true,
        slidesToScroll: 1,
        NextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,

    };

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        NextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
      };
    
    return (
        <>
       <div className="lg:hidden">
       <HeroSlider {...settings}>
          {images.map((image) => (
                  <div className="w-full h-56 md:h-80 py-3">
                      <img 
                           src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                           alt="testing" className="w-full h-full rounded-md"
                      />
                  </div>
              ))
          }
        </HeroSlider>
       </div>

       <div className="hidden lg:block">
       <HeroSlider {...settingsLG}>
          {images.map((image) => (
                  <div className="w-full h-96 px-2 py-3">
                      <img 
                           src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                           alt="testing" className="w-full h-full rounded-md"
                      />
                  </div>
              ))
          }
        </HeroSlider>
       </div>
        </>
    );
};
export default HeroCarousal;

/*const images = ["https://images.unsplash.com/photo-1523274158540-2aa98c15ec26?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8cm5TS0RId3dZVWt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                       "https://images.unsplash.com/photo-1523274158540-2aa98c15ec26?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8cm5TS0RId3dZVWt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1523274158540-2aa98c15ec26?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8cm5TS0RId3dZVWt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                       "https://images.unsplash.com/photo-1523274158540-2aa98c15ec26?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8cm5TS0RId3dZVWt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1523274158540-2aa98c15ec26?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8cm5TS0RId3dZVWt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",]; */