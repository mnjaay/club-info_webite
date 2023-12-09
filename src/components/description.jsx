import React from "react";
function Description(params) {
    return(
        <div>
            {/*Premiere Partie apres le heroSection */}
            <section>
            <div className="  z-0 mt-12  w-full flex  justify-center items-start  p-10  h-fit">
                     <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-16 ">
                        <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
                        <h2 className="text-3xl font-bold sm:text-4xl text-blue-800">
                        SET INFO FAMILY
                        </h2>
                        <p className="mt-4 text-gray-600">
                        La convivialité est notre atout au club. Ici, vous faites partie d'une famille,
                         pas d'une simple communauté. <a href="/Inscription" className="text-[#0A1A44]"><strong>Rejoignez-nous</strong></a> et ressentez la chaleur.
                        </p>

                        </div>
                                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 ">
                                    <div className="text-white relative bg-baseColor rounded-md p-4 shadow-xl bg-[#0A1A44]">
                                        <div className="flex items-center gap-4">
                                            <h3 className="text-3xl font-bold leading-none">+200</h3>
                                        </div>
                                        <p className="mt-3">Membres</p>
                                    </div>
                                    <div className="text-white relative bg-baseColor rounded-md p-4 shadow-xl bg-[#0A1A44]">
                                        <div className="flex items-center gap-4">
                                            <h3 className="text-3xl font-bold leading-none">+10</h3>
                                        </div>
                                        <p className="mt-3">Seances de Tutorat</p>
                                    </div>
                                    
                                </div>
                               
                                
                        </div> 
        </div>

            </section>
           
            <section >
                   {/*Deuxieme Partie apres le heroSection */}
            <div className="z-0 mt-12  w-full flex  justify-center items-start  p-10  h-fit ">
            <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                      
                        <h2 class="text-[#0A1A44] -900 dark:text-white text-3xl font-extrabold mb-2">MISSION</h2>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                              Notre mission est de créer un environnement inclusif et dynamique où les membres peuvent se connecter, 
                              apprendre et grandir ensemble. Nous nous engageons
                              à promouvoir la collaboration, la créativité et l'apprentissage continu au sein de notre communauté.</p>
                                                                    
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                      
                      <h2 class="text-[#0A1A44] -900 dark:text-white text-3xl font-extrabold mb-2">OBJECTIF</h2>
                      <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                      L'objectif principal de notre club est de faciliter l'échange de connaissances et d'expériences entre ses
                       membres. Nous visons à encourager la croissance personnelle et professionnelle en 
                      offrant des opportunités d'apprentissage, de réseautage et de développement de compétences.</p>
                  </div>
                  <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                      
                      <h2 class="text-[#0A1A44] -900 dark:text-white text-3xl font-extrabold mb-2"> ATELIER-FORMATION </h2>
                      <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                                  Nous organisons des ateliers, des formations et des sessions de mentorat pour aider 
                                  nos membres à développer 
                                  leurs compétences techniques et à rester à jour avec les dernières avancées technologiques.
                          </p>
                      
                  </div>

                </div>
             
             </div>
           
            </section>
            

        </div>
       
                      
    )
}
export default Description;