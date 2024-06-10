import React from "react";
import { Link } from "react-router-dom";
import "./weddingphotogr.css";
import "./navbar.css";
import "./variables.css";
import "animate.css";

const Weddingphotogr = () => {
  return (
    <div>
      <main className="about-project">
        <img
          src="public/wedding/logo-wed.png"
          className="logo-wed"
          alt="Wedding photographer logo"
        />
        <div className="project-text">
          <h1 className="animate__animated animate__pulse">
            Wedding Photographer Blog
          </h1>
          <h2>The project</h2>
          <p>
            This project is my most recent semester project/exam. <br />The task
            was to create a blog webpage. I chose my photography<br />
            business as the theme for this project, simply because I <br />love
            photography and wanted to create something with my own work.
          </p>
          <div className="buttons">
            <a href="https://playful-starburst-538f4c.netlify.app" target="_blank" rel="noopener noreferrer">
              <button>Go to website</button>
            </a>
            <a
              href="https://github.com/Noroff-FED-Campus-Assignments/fed1-exam-juliakalvik.git"
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
              src="public/wedding/wedlowf1.png"
              alt="Screenshot of low-fidelity design"
            />
            <p>&gt;</p>
            <img
              src="public/wedding/wedhig1.png"
              alt="Screenshot of high-fidelity design"
            />
            <hr id="line" width="1" size="500" />
            <img
              src="public/wedding/wedlowf2.png"
              alt="Screenshot of low-fidelity design"
            />
            <p>&gt;</p>
            <img
              src="public/wedding/wedhig2.png"
              alt="Screenshot of high-fidelity design"
            />
          </div>
          <h3>The final product</h3>
          <div className="wed-gallery">
            <img
              src="public/wedding/wedgal2.png"
              alt="Screenshot from final project website"
            />
            <img
              src="public/wedding/wedgal1.png"
              alt="Screenshot from final project website"
            />
            <img
              src="public/wedding/wedgal3.png"
              alt="Screenshot from final project website"
            />
            <img
              src="public/wedding/wedgal4.png"
              alt="Screenshot from final project website"
            />
            <img
              src="public/wedding/wedgal5.png"
              alt="Screenshot from final project website"
            />
            <img
              src="public/wedding/wedgal6.png"
              alt="Screenshot from final project website"
            />
            <img
              src="public/wedding/wedgal7.png"
              alt="Screenshot from final project website"
            />
            <img
              src="public/wedding/wedgal8.png"
              alt="Screenshot from final project website"
            />
            <img
              src="public/wedding/wedgal9.png"
              alt="Screenshot from final project website"
            />
          </div>
        </div>
      </section>
      <footer>
        <section className="footer">
          <div className="buttons-footer">
            <a href="https://playful-starburst-538f4c.netlify.app" target="_blank" rel="noopener noreferrer">
              <button>Go to website</button>
            </a>
            <a
              href="https://github.com/Noroff-FED-Campus-Assignments/fed1-exam-juliakalvik.git"
              target="_blank" rel="noopener noreferrer">
              <button>Github</button>
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Weddingphotogr;
