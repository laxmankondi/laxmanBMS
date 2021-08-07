import React from 'react';

//component
import Poster from '../components/Poster/Poster.component';
import PlaysFilter from '../components/PlaysFilter/PlaysFilter.component';

const Plays= () => {
    return (
        <>
         
         <div className="container mx-auto px-4">
              <div className="w-full lg:flex lg:flex-row-reverse">
                  <div className="lg:w-3/4">
                      <h2 className="text-2xl font-bold mb-4">Plays in Hyderabad</h2>
                        <div className="flex flex-wrap">
                          <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
                 <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313464-azyxnpqxnd-portrait.jpg"
                         title="Digital Theatre Fest By EnActe, Rage & Bookmyshow"
                          subtitle="English/Hindi ₹199"/>
                     </div>
                     <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
                 <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313464-azyxnpqxnd-portrait.jpg"
                         title="Digital Theatre Fest By EnActe, Rage & Bookmyshow"
                          subtitle="English/Hindi ₹199"/>
                     </div>
                     <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
                 <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313464-azyxnpqxnd-portrait.jpg"
                         title="Digital Theatre Fest By EnActe, Rage & Bookmyshow"
                          subtitle="English/Hindi ₹199"/>
                     </div>
                     <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
                 <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313464-azyxnpqxnd-portrait.jpg"
                         title="Digital Theatre Fest By EnActe, Rage & Bookmyshow"
                          subtitle="English/Hindi ₹199"/>
                     </div>
    
                  </div>
               </div>
             <div className="lg:w-3/12">
             <h2 className="text-2xl font-bold mb-4">Filters</h2>
             <div className="">
                 < PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
                 < PlaysFilter title="Langage" tags={["Hindi", "English", "Telugu", "Tamil"]}/>
                 < PlaysFilter title="Categories" tags={["Theater", "Online Streaming Plays"]}/>
                 < PlaysFilter title="Genres" tags={["Drama", "Comedy", "Historical", "Online Streaming Plays"]}/>
              </div> 
             </div>
         </div>
       </div>
     </>
    );
};

export default Plays;
