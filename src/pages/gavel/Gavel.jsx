import React from "react";
import { Link } from "react-router-dom";
import "./gavel.css";
import "./navbar.css";
import "./variables.css";
import "animate.css";

const Gavel = () => {
  return (
    <div>
      <main className="about-project">
        <img
          src="gavel/gavel4.png"
          className="logo-wed"
          alt="Science Museum logo"
        />
        <div className="project-text">
          <h1 className="animate__animated animate__pulse">
          Gavel
          </h1>
          <h2>The project</h2>
          <p>
            This project was my second semester project/exam. <br />The task was to
            create an e-commerce like website for users to add listings and biddings to different items.<br />
            You can read more about the design choices and overall process in the
            readme file on GitHub. <br /> PLEASE NOTE: this website works best in light mode.
          </p>
          <div className="buttons">
            <a href="https://semproauch-julia.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button>Go to website</button>
            </a>
            <a
              href="https://github.com/juliakalvik/sempro_auc"
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
          
          <h3>The final product</h3>
          <div className="wed-gallery">
            <img
              src="gavel/gavel1.png"
              alt="Screenshot from final project website"
            />
            <img
              src="gavel/gavel2.png"
              alt="Screenshot from final project website"
            />
            <img
              src="gavel/gavel3.png"
              alt="Screenshot from final project website"
            />
            <img
              src="gavel/gavel4.png"
              alt="Screenshot from final project website"
            />
           
          </div>
        </div>
      </section>
      <footer>
        <section className="footer">
          <div className="buttons">
            <a href="https://semproauch-julia.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button>Go to website</button>
            </a>
            <a
              href="https://github.com/juliakalvik/sempro_auc"
              target="_blank" rel="noopener noreferrer">
              <button>Github</button>
            </a>
          </div>
        </section>
      </footer>
      
    </div>
  );
};

 export default Gavel;