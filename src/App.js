import { Route,Routes } from "react-router-dom";
import Nav from "./Nav.js"
import Slider from "./Slider.js"
import Productslist from './Productslist.js'; 
import About from "./About.js";
import Detail from "./Detail.js";  

function App() {
  return (
    <>
      <Nav />
      <Routes >
        <Route  path="/" element={
          <>     
            <Slider />
            {/* <Scroll/> */}
            <Productslist /></>
        } />
        <Route  path="prod/:prodid" element={<Detail/>}/>
        <Route   path="/about" element={<About/>}/>
        <Route  path="/products" element={<Productslist/>}/>

      </Routes>
   
    </>
  );
}

export default App;
