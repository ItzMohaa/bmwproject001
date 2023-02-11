
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Models from './Components/Models'
import Navbar from './Components/Navbar'
import Car from './Components/Car'
import {variantcontext} from './variantcontext'
import { AnimatePresence } from 'framer-motion'
import News from './Components/News'
import Trade from './Components/Trade'
import About from './Components/About'
import Contact from './Components/Contact'



function App() {
  const variants = {
    initial:{
      y:'-100vh',
    },
    visible:{
      y:0
    },
    exit:{
      y:'-100vh'
    }

  }


  return (
    <div className="App">
     <variantcontext.Provider value={variants}>
      
      <Navbar/>
      <AnimatePresence mode='wait'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/models' element={<Models/>}/>
        <Route path= '/:model' element={<Car/>}/>
        <Route path= '/news' element={<News/>}/>
        <Route path= '/trade' element={<Trade/>}/>
        <Route path= '/about' element={<About/>}/>
        <Route path= '/contact' element={<Contact/>}/>
      </Routes>
      </AnimatePresence>
      
      </variantcontext.Provider>
      

    </div>
  )
}

export default App
