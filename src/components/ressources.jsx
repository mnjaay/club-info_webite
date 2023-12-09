import React from "react";
import Header from "./header";
import Footer from "./footer";
import ErrorPage from "../assets/images/Computer troubleshooting-rafiki.png"

function Ressources(params) {
    return(
        <div  className="  overflow-x-hidden h-screen w-full all">
            <Header/>
             <section class="bg-white dark:bg-gray-900 z-0 mt-12  w-full flex  justify-center items-start  p-10  h-fit">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                        <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Ressources pour la Licence Informatique</h1>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum voluptas sapiente laudantium libero ea repellendus, velit molestiae corporis quo non asperiores ad, commodi natus maxime quos tenetur cupiditate minus? Molestias?.</p>
                </div>


                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                           
                            <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Algorithme</h2>
                            <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Cours Exercies Devoirs Examens</p>
                            <a href="#" class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Voir plus
                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>


                        <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                           
                            <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Programmation</h2>
                            <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Cours Exercies Devoirs Examens</p>
                            <a href="#" class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Voir plus
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                        </div>

                        
                        <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                      
                        <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Architechture des Ordinateurs</h2>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Cours Exercies Devoirs Examens</p>
                        <a href="#" class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Voir plus
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>

                    <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                      
                      <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Developpement Web</h2>
                      <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Cours Exercies Devoirs Examens</p>
                      <a href="#" class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                      Voir plus
                          <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </a>
                  </div>

                        
                    </div>
                </div>
</section>

<Footer/>





        </div>
    );
}
export default Ressources;