import React from 'react';

import MovieInfo from './Movieinfo.component';

const MovieHero = () => {
    return (
        <>
        {/*small*/}
         <div>
             <div className="relative md:hidden w-full" style={{ height: "calc(180vw)"}}>
                 <div className="absolute z-20 bottom-4 left-4">
                 <MovieInfo/>
                 </div>
                   <div className="w-full h-48 bg-opacity-50 absolute bg-black z-10 bottom-0"/>
                   <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODQlICA5OGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122511-ansmvxvkql-portrait.jpg"
                         alt="poster"
                         className="w-full h-full"
                         />
             </div>
             {/*medium*/}
               <div className="relative hidden md:block w-full lg:hidden" 
                    style={{ height: "calc(100vw)"}}>
                 <div className="w-full h-60 bg-opacity-50 absolute bg-black z-10 bottom-0"/>
                    <div className="absolute z-20 bottom-4">
                 <MovieInfo/>
                   </div>
                  <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODQlICA5OGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122511-ansmvxvkql-portrait.jpg"
                         alt="poster"
                         className="w-full h-full"
                         />  
             </div>
              {/*large*/}
             <div className="relative hidden w-full lg:block" style={{height:"30rem"}}>
                 
                 <div className="absolute z-10 w-full h-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34,34,34) 38.3%, rgba(34,34,34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
                }}
                />
                <div className="absolute z-30 left-24 top-10 flex items-center gap-10 ">
                <div className="w-64 h-96 ">
                    <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/godzilla-vs-kong-et00122511-29-07-2021-03-44-24.jpg"
                          alt="Poster"
                          className="w-full h-full rounded-xl" />
                </div>
                <div>
                    <MovieInfo/>
                </div>
                </div>
             <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/godzilla-vs-kong-et00122511-29-07-2021-03-44-24.jpg"
                         alt="poster"
                         className="w-full h-full"
                         />
             </div>
             </div>   
        </>
    );
};

export default MovieHero;

//"https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/mortal-kombat-et00308446-29-07-2021-11-48-26.jpg"
