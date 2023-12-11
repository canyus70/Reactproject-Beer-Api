
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import BeerList from './components/beer/BeerList'
import BeerDetails from './components/beer/BeerDetails'


function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/beerlist" element={<BeerList/>}/>
      <Route path="/beer/:id" element={<BeerDetails/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
