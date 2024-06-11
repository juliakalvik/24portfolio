import React from "react";
import { Link } from "react-router-dom";
import "./csm.css";
import "./navbar.css";
import "./variables.css";
import "animate.css";

const ScienceMuseum = () => {
  return (
    <div>
      <main className="about-project">
        <img
          src="/csm/logo-csm.png"
          className="logo-wed"
          alt="Science Museum logo"
        />
        <div className="project-text">
          <h1 className="animate__animated animate__pulse">
            Community Science Museum
          </h1>
          <h2>The project</h2>
          <p>
            This project was my first semester project/exam. <br />The task was to
            create a website for a science museum for children and teenagers age
            7-15.<br />
            You can read more about the design choices and overall process in the
            readme file on GitHub.
          </p>
          <div className="buttons">
            <a href="https://cheerful-gecko-5e0185.netlify.app" target="_blank" rel="noopener noreferrer">
              <button>Go to website</button>
            </a>
            <a
              href="https://github.com/juliakalvik/SP_Julia_22.git"
              target="_blank" rel="noopener noreferrer">
              <button>Github</button>
            </a>
          </div>
          <hr />
        </div>
      </main>
      <section className="the-process">
        <h3>The process</h3>
        <p>
          From research to sketching, from low-fidelity to high-fidelity, to coding
          and then the final product.<br />
          Scroll down to see more.
        </p>
        <div className="process-content">
          <h3>Design</h3>
          <p>
            I tend to make a lot of different design sketches, both low- and
            high-fidelity.<br />
            Here I am only showing my design for the index page. Please reach out
            if you would like to see more.
          </p>
          <div className="design">
            <img
              src="/csm/csmlowf1.png"
              alt="Screenshot of low-fidelity design"
            />
            <p>&gt;</p>
            <img
              src="/csm/csmhig1.png"
              alt="Screenshot of high-fidelity design"
            />
            <hr id="line" width="1" size="500" />
            <img
              src="/csm/csmlowf2.png"
              alt="Screenshot of low-fidelity design"
            />
            <p>&gt;</p>
            <img
              src="/csm/csmhig2.png"
              alt="Screenshot of high-fidelity design"
            />
          </div>
          <h3>The final product</h3>
          <div className="wed-gallery">
            <img
              src="/csm/csmgal1.png"
              alt="Screenshot from final project website"
            />
            <img
              src="/csm/csmgal2.png"
              alt="Screenshot from final project website"
            />
            <img
              src="/csm/csmgal3.png"
              alt="Screenshot from final project website"
            />
            <img
              src="/csm/csmgal4.png"
              alt="Screenshot from final project website"
            />
            <img
              src="/csm/csmgal5.png"
              alt="Screenshot from final project website"
            />
            <img
              src="/csm/csmgal6.png"
              alt="Screenshot from final project website"
            />
            <img
              src="/csm/csmgal7.png"
              alt="Screenshot from final project website"
            />
            <img
              src="/csm/csmgal8.png"
              alt="Screenshot from final project website"
            />
            <img
              src="/csm/csmgal9.png"
              alt="Screenshot from final project website"
            />
          </div>
        </div>
      </section>
      <footer>
        <section className="footer">
          <div className="buttons">
            <a href="https://cheerful-gecko-5e0185.netlify.app" target="_blank" rel="noopener noreferrer">
              <button>Go to website</button>
            </a>
            <a
              href="https://github.com/juliakalvik/SP_Julia_22.git"
              target="_blank" rel="noopener noreferrer">
              <button>Github</button>
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default ScienceMuseum;
