import React from "react";
import photo from "../assets/images/Developer activity-bro.png";
import logo from "../assets/images/Screenshot 2023-10-10 at 10-56-26 set info club.png";
function HeroSection() {
  return (
    
 <div className=" z-0 mt-12  w-full flex  justify-center items-start  p-10  h-fit ">
      <div className="   md:p-5 p-3 m-3  bg w-full   h-fit item-start  grid md:grid-cols-2    grid-cols-1 ">
        <div className=" flex flex-col items-center justify-center">
          <div className="w-full">
            <div className="gap-x-3 flex w-[100%] justify-start items-center my-2">
              {/* <img src={logo} className=" rounded-full w-[100px] h-[100px] contain" alt="" /> */}
              <span className="flex flex-row text-[6vw] font-bold text-[#g] uppercase">
                {" "}
                Set Info Club
              </span>
            </div>
            <div className="w-[100%] my-1 h-[0.2px] bg-gray-400"></div>
          </div>
          
          <h1 className="text-[2rem] text-start text-[#0A1A44] ">
            Notre mission au sein du club informatique de l'Université de Thiès
            est de renforcer la scène technologique sénégalaise en connectant
            les développeurs et en offrant un soutien communautaire.
          </h1>
          <h1 className="text-[1.7rem] text-start text-black">
            Notre objectif est de populariser la technologie dans tout le
            Sénégal.
          </h1>
        </div>
        <div className="flex md:p-3 p-0 w-full md:h-full h-fit items-center justify-center">
          <img className="anim w-full h-full image" src={photo} alt="" />
        </div>
      </div>
      
    </div>
   




  );
}

export default HeroSection;
