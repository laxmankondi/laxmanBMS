import React from "react";
import Slider from "react-slick";

const EntertainmentCard =(props) => {
    return (
    <>
    <div className="w-full h-30 px-2">
        <img className="w-full h-full rounded-xl" src={props.src} alt="entertainment images"/>
    </div>
    </>
    );
};

const EntertainmentCardSlider =() => {
    const EntertainmentImage = [
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjI1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",                            
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAgRXZlbnRz,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/adventure-collection-202010140844.png",
    ];

const settings ={
       Infinity:false,
       autoplay:false,
       slidesToShow:4,
       slidesToScroll:4,
       InitialSlide:0,
       responsive:[
           { 
           breakpoints: 1024,
           settings:{
               slidesToShow:3,
               slidesToScroll:2,
               infinite:true,
           },
       },
       { 
        breakpoints: 600,
        settings:{
            slidesToShow:2,
            slidesToScroll:1,
            InitialSlide:1,
        },
    },
    { 
        breakpoints: 480,
        settings:{
            slidesToShow:2,
            slidesToScroll:1,
        },
    },
    ]
                               
};
    return (
        <>
        <Slider {...settings}>
            {
                EntertainmentImage.map((image) => (
                <EntertainmentCard src={image}/> ))
            }

        </Slider>
        </>
    );

};

export default EntertainmentCardSlider;
