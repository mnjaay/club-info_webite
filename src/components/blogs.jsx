import React from "react";
import Footer from './footer';
import Header from './header.jsx'
 import { FaGamepad,FaCubes } from 'react-icons/fa'
 import { BsCodeSlash } from 'react-icons/bs' 
 import { LiaNetworkWiredSolid } from 'react-icons/lia' 
 import { DiScrum } from 'react-icons/di' 
 import { MdOutlineSecurity } from 'react-icons/md' 
 import { BiMicrochip } from 'react-icons/bi'
 

 
function Blogs(params) {
    return(
        <div className="overflow-x-hidden h-screen w-full all">
       
        <Header/>
       <div className="z-0 mt-12  w-full flex  justify-center items-start  p-10  h-fit ">
                        <div class=" mx-auto my-8 sm:grid sm:gap-6 relative min-h-[640px] w-[90%]
                            flex flex-col gap-6 max-[640px]:items-center
                            sm:grid-cols-12  
                            sm:grid-rows-[minmax(230px,_300px)_minmax(230px,_300px)_minmax(230px,_300px)_minmax(230px,_300px)]
                            md:grid-rows-[minmax(230px,_1fr)_minmax(230px,_1fr)_minmax(230px,1fr)]  
                            lg:grid-rows-4
                            " > 

                    {  /*<!-- card_1 -->*/}
                    <div class="bg-[#0b144f] relative px-6 py-4 text-white max-[640px]:w-[80%]  min-h-[230px] max-w-[350px] rounded-xl lg:row-start-2 lg:row-span-2  lg:col-start-1 lg:col-span-3  md:col-span-4 sm:col-span-6">
                        <div class=" h-[100px] mb-2">
                        <span><i class="fa-sharp fa-solid fa-code text-3xl text-cyan-400 mb-2"><BsCodeSlash/> </i></span>
                        <h1 class="text-xl mb-2 pb-1 font-bold">Développement web</h1>
                        </div>
                        <p class="text-gray-300 text-sm mb-3 min-h-[120px] ">
                        Le développement web repose sur l’utilisation des langages (HTML/CSS, JavaScript...) pour écrire des programmes qui sont ensuite exécutés par les ordinateurs. Les instructions ...
                        </p>

                        <div class="sm:mt-2 sm:h-[30px] sm:relative">
                        <a href="https://www.digital-campus.fr/glossaire-du-web/definition-developpement-web" class="text-cyan-300 text-sm hover:text-cyan-500 sm:absolute sm:bottom-0" target="_blank">lire plus</a>
                        </div>

                    </div>


                    {  /*<!-- card_2 -->*/}
                    <div class="bg-[#0b144f] relative px-6 py-4 text-white max-[640px]:w-[80%] min-h-[230px]  max-w-[350px] rounded-xl lg:row-start-1 lg:row-span-2  lg:col-start-4 lg:col-span-3 md:col-span-4 sm:col-span-6">
                        <div class=" h-[100px] mb-2">
                            <span><i class="fa-solid fa-gamepad text-3xl text-cyan-400 mb-2"><FaGamepad/></i></span>
                            <h1 class="text-xl mb-2 pb-1 font-bold">développement jeux videos</h1>
                        </div>
                        <p class="text-gray-300 text-sm mb-3 min-h-[120px] ">
                            Le développement de jeux vidéo est le processus de conception, de programmation et de test d'un jeu vidéo. L'effort est entrepris par un développeur, allant d'une seule personne à ...
                        </p>

                        <div class="sm:mt-2 sm:h-[30px] sm:relative">
                            <a href="https://fr.wikipedia.org/wiki/D%C3%A9veloppement_de_jeux_vid%C3%A9o" class="text-cyan-300 text-sm hover:text-cyan-500 sm:absolute sm:bottom-0" target="_blank">lire plus</a>
                        </div>
                    </div>

                    {  /*<!-- card_3 -->*/}
                    <div class="bg-[#0b144f] relative text-white px-6 py-4 max-[640px]:w-[80%] min-h-[230px] max-w-[350px] rounded-xl lg:row-start-1 lg:row-span-2  lg:col-start-7 lg:col-span-3 md:col-span-4 sm:col-span-6">
                        <div class=" h-[100px] mb-2">
                        <span><i class="fa-solid fa-cubes text-3xl text-cyan-400 mb-2"><FaCubes/></i></span>
                        <h1 class="text-xl mb-2 pb-1 font-bold">ui/ux design</h1>
                        </div>
                        <p class="text-gray-300 text-sm mb-3 min-h-[120px] ">
                        Le designer UX (user eXperience) et le designer UI (user interface) est une évolution et une spécialisation récente du métier de web designer. Le premier s’intéresse à l’expérience utilisateur ...
                        </p>
                        
                        <div class="sm:mt-2 sm:h-[30px] sm:relative">
                        <a href="https://www.cidj.com/metiers/designer-ux-ui" class="text-cyan-300 text-sm hover:text-cyan-500 sm:absolute sm:bottom-0 " target="_blank">lire plus</a>
                        </div>
                        
                    </div>

                    {  /*<!-- card_4 -->*/}
                    <div class="bg-[#0b144f] relative text-white px-6 py-4 max-[640px]:w-[80%] min-h-[230px] max-w-[350px] rounded-xl lg:row-start-1 lg:row-span-2  lg:col-start-10 lg:col-span-3 md:col-span-4 sm:col-span-6">
                        <div class=" h-[100px] mb-2">
                        <span><i class="fa-solid fa-circle-nodes text-3xl text-cyan-400 mb-2"><LiaNetworkWiredSolid/> </i></span>
                        <h1 class="text-xl mb-2 pb-1 font-bold">Réseaux</h1>
                        </div>
                        <p class="text-gray-300 text-sm mb-3 min-h-[120px] ">
                        un réseau est défini par la mise en relation d’au moins deux systèmes informatiques au moyen d’un câble ou sans fil, par liaison radio. Le réseau le plus basique comporte deux ...
                        </p>
                        
                        <div class="sm:mt-2 sm:h-[30px] sm:relative ">
                        <a href="https://www.ionos.fr/digitalguide/serveur/know-how/reseau-informatique-definition/" class="text-cyan-300 text-sm hover:text-cyan-500 sm:absolute sm:bottom-0" target="_blank">lire plus</a>
                        </div> 
                    </div>

                    {  /*<!-- card_5 -->*/}
                    <div class="bg-[#0b144f] relative text-white px-6 py-4 max-[640px]:w-[80%] min-h-[230px] max-w-[350px] rounded-xl lg:row-start-3 lg:row-span-2 lg:col-start-4 lg:col-span-3 md:col-span-4 sm:col-span-6">
                        <div class=" h-[100px] mb-2">
                        <span><i class="fa-solid fa-shield text-3xl text-cyan-400 mb-2"><MdOutlineSecurity/> </i></span>
                        <h1 class="text-xl mb-2 pb-1 font-bold">sécurité</h1>
                        </div>
                        <p class="text-gray-300 text-sm mb-3 min-h-[110px] ">
                        La sécurité informatique est un terme générique utilisé pour décrire l’ensemble des stratégies, méthodes, solutions et outils utilisés pour protéger a confidentialité, l’intégrité et la ...
                        </p>
                        
                        <div class="sm:mt-2 sm:h-[30px] sm:relative  sm:bottom-0 ">
                        <a href="https://www.crowdstrike.fr/cybersecurity-101/it-security/" class="text-cyan-300 text-sm hover:text-cyan-500 sm:absolute sm:bottom-0" target="_blank">lire plus</a>
                        </div>
                        
                    </div>

                    {  /*<!-- card_6 -->*/}
                    <div class="bg-[#0b144f] relative text-white px-6 py-4 max-[640px]:w-[80%] min-h-[230px] max-w-[350px] rounded-xl lg:row-start-3 lg:row-span-2 lg:col-start-7 lg:col-span-3 md:col-span-4 sm:col-span-6">
                        <div class=" h-[100px] mb-2">
                        <span><i class="fa-solid fa-microchip text-3xl text-cyan-400 mb-2"><BiMicrochip/></i></span>
                        <h1 class="text-xl mb-2 pb-1 font-bold">intelligence artificielle</h1>
                        </div>
                        <p class="text-gray-300 text-sm mb-3 min-h-[110px] ">
                        L'intelligence artificielle (IA) est un processus d'imitation de l'intelligence humaine qui repose sur la création et l'application d'algorithmes exécutés dans un environnement informatique...
                        </p>
                        
                        <div class="sm:mt-2 sm:h-[30px] sm:relative ">
                        <a href="https://www.netapp.com/fr/artificial-intelligence/what-is-artificial-intelligence/" class="text-cyan-300 text-sm hover:text-cyan-500 sm:absolute sm:bottom-0" target="_blank">lire plus</a>
                        </div>
                    </div>

                    {  /*<!-- card_7 -->*/}
                    <div class="bg-[#0b144f] relative text-white px-6 py-4 max-[640px]:w-[80%] min-h-[230px] max-w-[350px] rounded-xl lg:row-start-3 lg:row-span-2 lg:col-start-10 lg:col-span-3 md:col-span-4 sm:col-span-6">
                        
                        <div class=" h-[100px] mb-2">
                        <span><i class="fa-solid fa-arrows-split-up-and-left text-3xl text-cyan-400 mb-2"><DiScrum/> </i></span>
                        <h1 class="text-xl mb-2 pb-1 font-bold">scrum / agile</h1>
                        </div>
                        <p class="text-gray-300 text-sm mb-3 min-h-[110px] ">
                        Scrum est une des méthodes de gestion de projet Agile. En tant que telle, son objectif est d’améliorer la productivité des équipes agiles même à distance, tout en permettant ...
                        </p>
                        
                        <div class="sm:mt-2 sm:h-[30px] sm:relative">
                        <a href="https://www.tuleap.org/fr/agile/comprendre-methode-agile-scrum-10-minutes" class="text-cyan-300 text-sm hover:text-cyan-500 sm:absolute sm:bottom-0" target="_blank">lire plus</a>
                        </div>
                        
                    </div>





                    </div>
       </div>
        
        <Footer/>
  
      </div>


    )
}
export default Blogs;