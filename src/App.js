
import './App.css';
import Navbar from './componant/Nav';
import { Route, Routes } from 'react-router-dom';
import About from './componant/About';
import Contact from './componant/Contact'
import Home from './componant/Home';
import Login from './componant/Login'
import Signup from './componant/Signup'
import Footer from './componant/Footer';
import Allquran from './componant/Allquran';
import { AuthProvider } from 'react-auth-kit'
function App() {
  return (
    <div >
       <AuthProvider authType = {'cookie'}
                  authName={'_auth'}>
      <Navbar />
      <Routes>

      <Route  path='/' element={<Home />} />
    <Route  path='/About' element={<About />} />
    <Route  path='/Contact' element={<Contact />} />
    {/* <Route  path='/Privacy' element={<Privacy />} /> */}
    <Route  path='Allquran' element={<Allquran />} />
    <Route  path='Login' element={<Login />} /> 
    <Route  path='Signup' element={<Signup />} /> 
  
  </Routes>
  <Footer />
  </AuthProvider>
    </div>
  );
}

export default App;
