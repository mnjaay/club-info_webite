import React from "react";
import photo from '../assets/images/galery/IMG-20231106-WA0032.jpg'
import photo1 from '../assets/images/galery/IMG-20231106-WA0033.jpg'
import photo2 from '../assets/images/galery/IMG-20231106-WA0034.jpg'
import photo3 from '../assets/images/galery/IMG-20231106-WA0035.jpg'
import photo4 from '../assets/images/galery/IMG-20231106-WA0036.jpg'
import photo5 from '../assets/images/galery/IMG-20231106-WA0037.jpg'
import photo6 from '../assets/images/galery/IMG-20231106-WA0038.jpg'
import photo7 from '../assets/images/galery/IMG-20231106-WA0039.jpg'
import photo8 from '../assets/images/galery/IMG-20231106-WA0040.jpg'
function Galery() {
    return(
    <div className="z-0 mt-12  w-full flex  justify-center items-start  p-10  h-fit">
        

       
<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img class="h-auto max-w-full rounded-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src={photo1} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src={photo3} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src={photo5} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src={photo6} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src={photo7} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src={photo8} alt=""/>
    </div>
  

</div>

    </div>
    )
}
export default Galery;