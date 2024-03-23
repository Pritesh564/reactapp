


import Navbar from './components/navbar.jsx'
import AboutPage from './components/about.jsx'
import ContactPage from './components/contact.jsx'
import HomePage from './components/homepage.jsx'
import {Routes,Route} from 'react-router-dom'


const App = () => {
    return (
        <div>
            
            <Navbar/>
            

            <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='contact' element={<ContactPage/>}/>
            </Routes>
        </div>
    );
};

export default App;

