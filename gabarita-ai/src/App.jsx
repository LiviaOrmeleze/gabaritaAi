import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min"
import Header from "./component/header/Header";
import logo from '/logo.png'
import "./scss/styles.scss"

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100 m-0 p-0">
      <BrowserRouter>
      <Header  className='d-flex align-items-center'
      logo={logo}/>


      <main className="flex-grow-1 d-flex flex-column">
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      </main>

      
      </BrowserRouter>
    </div>
  )
}

export default App
