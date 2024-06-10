import React from 'react';
import { Link } from 'react-router-dom';
import "../variables.css"

const ProjectSection = () => {
  return (
    <main className='projectSection'>
      <section className="project-1" id="pro1">
        <div className="pro1-text">
          <h2>Holidaze</h2>
          <p>A website for booking your<br />next trip,<br />just like airbnb!</p>
          <div className="pro-button">
            <Link to="/holidaze"  rel="noopener noreferrer">
              <button>more about this project</button>
            </Link>
          </div>
        </div>
        <div className="pro1-photo">
          <img src="public/holidaze/holidaze-hero.png" id="pro-img" alt="Screenshot from the blog webpage" />
        </div>
      </section>

      <section className="project-2">
        <div className="pro2-photo">
          <img src="public/csm1.png" id="pro-img" alt="Screenshot from the Community Science Museum webpage" />
        </div>
        <div className="pro2-text">
          <h2>Gavel</h2>
          <p>A website for bidding<br />on different products<br />for everyone!</p>
          <div className="pro-button">
            <Link to="/gavel"  rel="noopener noreferrer">
              <button>more about this project</button>
            </Link>
          </div>
        </div>
      </section>
     
      <section className="project-1" id="pro1">
        <div className="pro1-text">
          <h2>wedding photographer blog</h2>
          <p>A website including a blog for<br />posting updates about being<br />either a photographer or a client</p>
          <div className="pro-button">
            <Link to="/weddingphotogr"  rel="noopener noreferrer">
              <button>more about this project</button>
            </Link>
          </div>
        </div>
        <div className="pro1-photo">
          <img src="public/wedphotblog1.png" id="pro-img" alt="Screenshot from the blog webpage" />
        </div>
      </section>

      <section className="project-2">
        <div className="pro2-photo">
          <img src="public/csm1.png" id="pro-img" alt="Screenshot from the Community Science Museum webpage" />
        </div>
        <div className="pro2-text">
          <h2>Community Science Museum</h2>
          <p>A website including a blog for<br />posting updates about being<br />either a photographer or a client</p>
          <div className="pro-button">
            <Link to="/csm"  rel="noopener noreferrer">
              <button>more about this project</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="project-3">
        <div className="pro3-text">
          <h2>DogLibrary</h2>
          <p>A website including a blog for<br />posting updates about being<br />either a photographer or a client</p>
          <div className="pro-button">
            <Link to="/doglibrary"  rel="noopener noreferrer">
              <button>more about this project</button>
            </Link>
          </div>
        </div>
        <div className="pro3-photo">
          <img src="public/doglibr1.png" id="pro-img" alt="Screenshot from the DogLibrary webpage" />
        </div>
      </section>

      <section className="project-4">
        <div className="pro4-photo">
          <img src="public/rainydays2.png" id="pro-img" alt="Screenshot from the RainyDays webpage" />
        </div>
        <div className="pro4-text">
          <h2>RainyDays</h2>
          <p>A website including a blog for<br />posting updates about being<br />either a photographer or a client</p>
          <div className="pro-button">
            <Link to="/rainydays"  rel="noopener noreferrer">
              <button>more about this project</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectSection;
