import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min"
import Header from "./component/header/Header";
import logo from '/logo.png'
import pessoasHome from './assets/home.jpg'


import "./scss/styles.scss"

const App = () => {
  return (


      <BrowserRouter>
      <Header  className='d-flex align-items-center'
      logo={logo}/>
      <Home className="d-flex flex-column"
      pessoasHome={pessoasHome}/>
      
      <main className="flex-grow-1 d-flex flex-column">
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      </main>

      
      </BrowserRouter>
 
  )
}

export default App
