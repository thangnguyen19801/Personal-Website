import "./App.css";
import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const refe = [homeRef, aboutRef, contactRef];
  return (
    <div className="App">
      <header className="App-header">
        <Header refe={refe} />
      </header>
      <div className="home_bg position-static mt-4" ref={homeRef}>
        <div
          className="home_content container-fluid d-flex align-items-center mb-5 py-5 rounded"
          id="home"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
                <img
                  className="img-fluid my-auto rounded-circle shadow-sm"
                  src="https://img.bleacherreport.net/img/images/photos/003/530/635/hi-res-a1585cd4c3ed9ca5cb5db1a6ac39f522_crop_exact.jpg?w=1200&h=1200&q=75"
                  alt="my_avatar"
                  style={{ width: "60vh" }}
                />
              </div>
              <div className="col-lg-7 text-center text-lg-left">
                <h3 className="text-white font-weight-normal mb-3">I'm</h3>
                <h1 className="display-3 text-uppercase text-primary mb-2">
                  Nguyen Minh Thang
                </h1>
                <h1 className="typed-text-output d-inline font-weight-lighter text-white">
                  Front End Developer
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about_bg mx-auto" ref={aboutRef}>
        <div
          className="about_content container-fluid d-flex align-items-center mb-5 py-5 d-flex"
          id="about"
        >
          <div className="container ">
            <div className="row align-items-center justify-item-end text-dark">
              <div>
                <h2>Hi, I'm Nguyen Thang</h2>
                <p>
                  I'm 21 years old and I'm final-year student at Hanoi
                  University of Science and Technology where I majored in
                  Computer Science. I am a very motivated person and a fast
                  learner. I'm very interested at building and developing
                  Software and always ready to reach new level in this field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
