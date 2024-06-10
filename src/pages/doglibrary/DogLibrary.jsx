import React from "react";
import { Link } from "react-router-dom";
import "./doglibrary.css";
import "./navbar.css";
import "./variables.css";

const DogLibrary = () => {
  return (
    <div>
      <main className="about-project">
        <img
          src="public/dogs/logo-doglibr.png"
          className="logo-wed"
          alt="Dog Library logo"
        />
        <div className="project-text">
          <h1 className="animate__animated animate__pulse">Dog Library</h1>
          <h2>The project</h2>
          <p>
            This project was my first using JavaScript. <br />The task was to
            fetch a REST API using JavaScript, and implement different filtering
            methods. <br />
            I love dogs, so I chose to use the dog API for this particular
            project. <br />
            I called it Dog Library because it allows you to search through 172
            different breeds of dogs <br />
            and read informative keywords about each specific breed.
          </p>
          <div className="buttons">
            <a href="https://statuesque-naiad-1f2ee4.netlify.app" target="_blank" rel="noopener noreferrer">
              <button>Go to website</button>
            </a>
            <a
              href="https://github.com/Noroff-FED-Campus-Assignments/fed-y1-javascript-course-assignment_list-detail-with-api-juliakalvik.git"
              target="_blank" rel="noopener noreferrer">
              <button>Github</button>
            </a>
          </div>
          <hr />
        </div>
      </main>
      <section className="the-process">
        <div className="process-content">
          <h3>The final product</h3>
          <div className="wed-gallery">
            <img src="public/dogs/doggal1.png" alt="Screenshot from final project website" />
            <img src="public/dogs/doggal2.png" alt="Screenshot from final project website" />
            <img src="public/dogs/doggal3.png" alt="Screenshot from final project website" />
            <img src="public/dogs/doggal4.png" alt="Screenshot from final project website" />
            <img src="public/dogs/doggal5.png" alt="Screenshot from final project website" />
            <img src="public/dogs/doggal6.png" alt="Screenshot from final project website" />
            <img src="public/dogs/doggal7.png" alt="Screenshot from final project website" />
            <img src="public/dogs/doggal8.png" alt="Screenshot from final project website" />
            <img src="public/dogs/doggal9.png" alt="Screenshot from final project website" />
          </div>
        </div>
      </section>
      <footer>
        <section className="footer">
          <div className="buttons">
            <a href="https://statuesque-naiad-1f2ee4.netlify.app" target="_blank" rel="noopener noreferrer">
              <button>Go to website</button>
            </a>
            <a
              href="https://github.com/Noroff-FED-Campus-Assignments/fed-y1-javascript-course-assignment_list-detail-with-api-juliakalvik.git"
              target="_blank" rel="noopener noreferrer">
              <button>Github</button>
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default DogLibrary;
