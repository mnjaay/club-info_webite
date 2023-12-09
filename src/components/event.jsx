import React from "react";
import weekendtech from '../assets/images/weekendtech.jpg'
function Events() {
    return(
        <div className="bg-white">
            <div class="flex items-center justify-center  max-w-screen-2xl ">
 
                <div class="w-1/2 mx-auto w-full max-w-screen-xl mx-auto p-4 md:p-8 ">
                       <ol class="relative border-l border-gray-200  dark:border-gray-700 ">                  
                                <li class="mb-10 ml-6">            
                                        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                            </svg>
                                        </span>
                                        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Les Evenements A Venir <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">NOUVEAU</span></h3>
                                           {/*<!-- Div du dernier evenzment-->*/}
                                        <div class="mt-3 sm:pr-8">
                                        <div class="max-w-xl mx-auto bg-cyan-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                            <div class="md:flex">
                                            <div class="md:shrink-0 h-100 w-100">
                                                <img class="h-100 w-full object-cover md:h-full md:w-48" src={weekendtech} alt="Modern building architecture"/>
                                            </div>
                                            <div class="p-8 bg-">
                                                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold ">Week-End Tech</div>
                                                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">SET INFO CLUB - UIDT</a>
                                                <p class="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus neque quas sit. Ut qui dolore eligendi atque accusamus hic repudiandae, quas quam amet eos dolorum totam quos voluptatem beatae eius?/</p>
                                            </div>
                                            </div>
                                        </div>  
                                        </div>
                                        

                        
                            </li>
                     </ol>

                </div>


            </div>
        </div>
    );
}
export default Events;