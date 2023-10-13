import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Company from "./components/Companys/Company";
import Residencies from "./components/Residencies/Residencies";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Company/>
      <Residencies/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;