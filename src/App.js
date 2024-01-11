import "./App.css";
import {Link, Outlet} from "react-router-dom";
import React from "react";
import Header from "./components/Header";


//const HomePage = () => <div>Home Page Content</div>;
//const NextPage = () => <div>Next Page Content</div>;

// This 2 unsed variable were giving me warning.

export default function App() {
    return (
      <div className="App">
        <Header/>
        <nav className="App-nav">
          <Link className="nav-link" to = {'/'}>Home</Link>
          <Link className="nav-link" to = {'/about'}>About</Link>
          <Link className="nav-link" to = {'/emotions'}>Emotions</Link>
          <Link className="nav-link" to = {'/premium'}>Premium</Link>
          <Link className="nav-link" to = {'/contact'}>Contact</Link>
          <Link className="nav-link" to = {'/location'}>Location</Link>
        </nav>

        <main className="App-main">
       
        <nav className="App-bottom-nav">
          <Link className="nav-link" to = {'/Privacy Policy'}>Privacy Policy</Link>
          <Link className="nav-link" to = {'/Terms of use'}>Terms of use</Link>
          <Link className="nav-link" to = {'/FAQ'}>FAQ</Link>
         
        </nav>
          
          <div>
            <Outlet/> 
          </div>

        </main>
        <div className="App-bottom-nav">
          <Link className="nav-link" to={'/privacy'}>Privacy Policy</Link>
          <Link className="nav-link" to={'/terms'}>Terms of use</Link>
          <Link className="nav-link" to={'/faq'}>FAQ</Link>
      </div>
      </div>
    );
}
