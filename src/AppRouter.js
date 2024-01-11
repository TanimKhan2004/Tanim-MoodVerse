import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Emotions from "./components/Emotions";
import Premium from "./components/Premium";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Location from "./components/Location";


export default function AppRouter(){
  return (

  <Router>
    <Routes>
      <Route path ={'/'} element = {<App/>}>
        <Route index element={<Home/>}/>
        <Route path = {'/about'} element = {<About/>}/>
        <Route path = {'/emotions'} element = {<Emotions/>}/>
        <Route path = {'/premium'} element = {<Premium/>}/>
        <Route path = {'/contact'} element = {<Contact/>}/>
        <Route path = {'/location'} element = {<Location/>}/>
       
        <Route path = {'/faq'} element = {<Faq/>}/>
        <Route path = {'/privacy'} element = {<Privacy/>}/>
        <Route path = {'/terms'} element = {<Terms/>}/>
      </Route>
    </Routes>
  </Router>
  )
}