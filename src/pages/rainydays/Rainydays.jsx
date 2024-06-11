import React from "react";
import "./rainydays.css";
import "./navbar.css";
import "./variables.css";
import "animate.css";

const RainyDays = () => {
  return (
    <div>
      <main className="about-project">
        <img
          src="/rainyDays/logo-rainydays.png"
          className="logo-wed"
          alt="Rainy Days logo"
        />
        <div className="project-text">
          <h1 className="animate__animated animate__pulse">Rainy Days</h1>
          <h2>The project</h2>
          <p>
            This project was my very first design- and coding assignment.
            <br />The task was to create a website that sells jackets for outdoor
            activities, such as hiking.<br />
            As you will see, I started with making the low- and high-fidelity
            design,
            <br />and then completely changed the design later.
          </p>
          <div className="buttons">
            <a href="https://musical-malasada-1cce99.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button>Go to website</button>
            </a>
            <a
              href="https://github.com/juliakalvik/CA_htmlcss_2022.git"
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
            Here I am only showing my low-fidelity design for the jacket specific
            and checkout page (for small phone screen).<br />
            The high-fidelity design is how I first decided to both design and code
            the website.<br />
            Later, I re-designed the website, as you can see in the final
            results.<br />
            Please reach out if you would like to see more.
          </p>
          <div className="design">
            <img src="/rainyDays/rainydayslowf1.png" alt="Screenshot of low-fidelity design" />
            <img src="/rainyDays/rainydayshig1.png" alt="Screenshot of high-fidelity design" />
            <hr id="line" width="1" size="500" />
            <img src="/rainyDays/rainydayshig2.png" alt="Screenshot of low-fidelity design" />
            <img src="/rainyDays/rainydayshig3.png" alt="Screenshot of high-fidelity design" />
          </div>
          <h3>The final product</h3>
          <div className="wed-gallery">
            <img src="/rainyDays/rdgal1.png" alt="Screenshot from final project website" />
            <img src="/rainyDays/rdgal2.png" alt="Screenshot from final project website" />
            <img src="/rainyDays/rdgal3.png" alt="Screenshot from final project website" />
            <img src="/rainyDays/radgal4.png" alt="Screenshot from final project website" />
            <img src="/rainyDays/radgal5.png" alt="Screenshot from final project website" />
            <img src="/rainyDays/radgal6.png" alt="Screenshot from final project website" />
            <img src="/rainyDays/radgal7.png" alt="Screenshot from final project website" />
            <img src="/rainyDays/radgal8.png" alt="Screenshot from final project website" />
            <img src="/rainyDays/radgal9.png" alt="Screenshot from final project website" />
          </div>
        </div>
      </section>
      <footer>
        <section className="footer">
          <div className="buttons">
            <a href="https://musical-malasada-1cce99.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button>Go to website</button>
            </a>
            <a
              href="https://github.com/juliakalvik/CA_htmlcss_2022.git"
              target="_blank" rel="noopener noreferrer">
              <button>Github</button>
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default RainyDays;
