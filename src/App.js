import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Our Website!</h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
        </ul>
      </nav>
      <main>
        <section id="home">
          <div className="card">
            <img src="/images/home-image.jpg" alt="Home" />
          </div>
        </section>
        <section id="about">
          <div className="card">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </section>
        <section id="projects">
          <h2>Our Projects</h2>
          <div className="card-grid">
            <div className="card">
              <img src="/images/project1.jpg" alt="Project 1" />
              <h3>Project 1</h3>
              <p>Description of Project 1</p>
            </div>
            <div className="card">
              <img src="/images/project2.jpg" alt="Project 2" />
              <h3>Project 2</h3>
              <p>Description of Project 2</p>
            </div>
            {/* Add more project cards here */}
          </div>
        </section>
        <section id="team">
          <h2>Our Team</h2>
          <div className="card-grid">
            <div className="card">
              <img src="/images/member1.jpg" alt="Team Member 1" />
              <h3>Team Member 1</h3>
              <p>Description of Team Member 1</p>
            </div>
            <div className="card">
              <img src="/images/member2.jpg" alt="Team Member 2" />
              <h3>Team Member 2</h3>
              <p>Description of Team Member 2</p>
            </div>
            {/* Add more team member cards here */}
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Our Website</p>
        <div className="social-icons">
          <a href="#" className="icon-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="icon-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="icon-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="icon-link">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
