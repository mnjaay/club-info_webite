import './App.css';
import Home from './components/home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Projets from './components/projets';
import Blogs from './components/blogs';

import EventList from './components/eventList';
import Ressources from './components/ressources';
import AboutUs from './components/AboutUs';
import OurTeams from './components/OurTeams';
function App() {
  return (
           <Router>
             <Routes>
               <Route path='/' element={<Home/>}/>
              {/* */} <Route path='/Projets' element={<Projets/>}/>
               <Route path='/Evenements' element={<EventList/>}/>
               <Route path='/Blogs' element={<Blogs/>}/>
               <Route path='/Ressources' element={<Ressources/>}/>
               <Route path='/Abouts' element={<AboutUs/>}/>
               <Route path='/Developers' element={<OurTeams/>}/>
             </Routes>
           </Router> 
        
  );
}

export default App;
