import React from "react";
import "./holidaze.css";
import "./navbar.css";
import "./variables.css";
import "animate.css";

const Holidaze = () => {
  return (
    <div>
      <main className="about-project">
        <img
          src="/holidaze/holidaze-hero.png"
          className="logo-wed"
          alt="Rainy Days logo"
        />
        <div className="project-text">
          <h1 className="animate__animated animate__pulse">Holidaze</h1>
          <h2>The project</h2>
          <p>
            My latest exam project. The task was to create <br /> a airbnb-like
            website for customers to either book a destination <br /> or sign up
            as a host to create and manage their venues.
          </p>
          <div className="buttons">
            <a
              href="https://holidazeyourlife.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Go to website</button>
            </a>
            <a
              href="https://github.com/juliakalvik/exam24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Github</button>
            </a>
          </div>
          <hr />
        </div>
      </main>
      <section className="the-process">
        <h3>The process</h3>
        <p>
          From research to sketching, from low-fidelity to high-fidelity, to
          coding and then the final product.
          <br />
          Scroll down to see more.
        </p>
        <div className="process-content">
          <h3>Design</h3>
          <p>
            I tend to make a lot of different design sketches, both low- and
            high-fidelity.
            <br />
            Here I am only showing my high-fidility design - for smart phone.
            <br />
            Please reach out if you would like to see more.
          </p>
          <div className="design">
            
            <img
              src="holidaze/holidaze1.png"
              alt="Screenshot of low-fidelity design"
            />
            <img
              src="holidaze/holidaze2.png"
              alt="Screenshot of high-fidelity design"
            />
            <hr id="line" width="1" size="500" />
            <img
              src="holidaze/holidaze3.png"
              alt="Screenshot of low-fidelity design"
            />
            <img
              src="holidaze/holidaze4.png"
              alt="Screenshot of high-fidelity design"
            />
          </div>
          <h3>The final product</h3>
          <div className="wed-gallery">
            
            <img
              src="holidaze/holidaze5.png"
              alt="Screenshot from final project website"
            />
            <img
              src="holidaze/holidaze6.png"
              alt="Screenshot from final project website"
            />
            <img
              src="holidaze/holidaze4.png"
              alt="Screenshot from final project website"
            />
            <img
              src="holidaze/holidaze7.png"
              alt="Screenshot from final project website"
            />
            <img
              src="holidaze/holidaze8.png"
              alt="Screenshot from final project website"
            />
            <img
              src="holidaze/holidaze9.png"
              alt="Screenshot from final project website"
            />
            <img
              src="holidaze/holidaze10.png"
              alt="Screenshot from final project website"
            />
            <img
              src="holidaze/holidaze11.png"
              alt="Screenshot from final project website"
            />
            <img
              src="holidaze/holidaze12.png"
              alt="Screenshot from final project website"
            />
          </div>
        </div>
      </section>
      <footer>
        <section className="footer">
          <div className="buttons">
            <a
              href="https://holidazeyourlife.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Go to website</button>
            </a>
            <a
              href="https://github.com/juliakalvik/exam24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Github</button>
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Holidaze;
