import React from 'react'
import club from '../assets/images/galery/IMG-20231106-WA0035.jpg'
import { FaTwitter, FaInstagram } from 'react-icons/fa'
import Footer from './footer'
import Header from './header'

function AboutUs() {
    return (
        <div>
         <Header/>
        <section className=' pt-20'>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-14 md:py-24 lg:py-10 ">
            <h2 className="mb-8 text-3xl font-bold md:text-5xl lg:mb-14 text-center">A propos de <abbr title="Set Info Club">SIC</abbr> </h2>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <img src={club} alt="" className="inline-block h-full w-full rounded-2xl object-cover" />
            <div className="flex flex-col gap-5 rounded-2xl border border-blue-700 p-10 sm:p-10">
                <h2 className="text-3xl font-bold md:text-5xl text-center"></h2>
                <p className="text-sm sm:text-base text-justify">
                    Le club a pour objectif de fournir un environnement d'apprentissage et de collaboration aux etudiants qui souhaitent améliorer leurs connaissances en programmation et développer leurs compétences en informatique.
                    Pour permettre à la communauté d'être à jour sur les dernières tendances de la technologies, le club organise régulièrement des activités comme des ateliers de codage, des compétitions de programmation, des conférences entre autres ....
                </p>
                <div className="mt-4 flex self-center space-x-8">
                    {/* Lien instagram du club */}
                    <a href="#" blank className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]">
                        <FaInstagram className='inline-block h-full w-full text-pink-500'/>
                    </a>
                    {/* Lien X du club si existe bien sur sinon on peut l'enlever */}
                    <a href="#" className="flex h-8 w-8 max-w-full flex-col items-center justify-center rounded-full bg-[#ecf2ff] px-2 font-bold text-[#1353fe]">
                        <FaTwitter className='inline-block h-full w-full'/>
                    </a>
                </div>
            </div>
            </div>
        </div>
        <div className='mx-auto w-full max-w-7xl px-5 py-16 md:px-14 md:py-24 lg:py-10'>
        <h2 className="mb-8 text-3xl font-bold md:text-5xl lg:mb-14 text-center">Contacter nous </h2>

        <form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prenom</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Statut</label>
            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
        </div>  
        <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse mail</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
       </div>
      
    </div>
    <div class="mb-6">
      
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre Message</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ecrire votre message..."></textarea>

    </div> 
   
    
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Envoyer</button>
</form>

        </div>
        


        </section>
        <Footer/>
        </div>
    )
}

export default AboutUs