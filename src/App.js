import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Quizzical from "./components/Quizzical/Quizzical";
import Description from "./components/Description/Description";
import Career from "./components/Career/Career";

function App() {
  const [language, setLanguage] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {!language && <Intro setLanguage={setLanguage} />}
              {language && (
                <div className="App">
                  <Header />
                  <Navbar setLanguage={setLanguage} language={language} />
                  <About />
                  <Career/>
                  <Skills />
                  <Description/>
                  <Projects />
                  <Contact />
                  <Footer />
                </div>
              )}
            </>
          }
        />
        <Route path="/quizzical" element={<Quizzical />} />
      </Routes>
    </Router>
  );
}

export default App;
