import React from "react";
import Footer from './footer';
import Header from './header.jsx'
import HeroSection from './heroSection.jsx' 
//import Events from './event.jsx';
import Description from "./description";

//import EventList from "./eventList";
import Galery from "./galerie";

function Home() {
    return(
        <div className="overflow-x-hidden h-screen w-full all">
                <Header/>
                <HeroSection/> 
                <Description/>
                <Galery/>
                <Footer/>
        </div>
    )
}
export default Home;