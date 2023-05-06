import React, { useState, useRef } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of Project 1',
    image: '/images/project1.jpg',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of Project 2',
    image: '/images/project2.jpg',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description of Project 2',
    image: '/images/project3.jpg',
  },
  // Add more project objects here
];

const teamData = [
  {
    id: 1,
    name: 'Team Member 1',
    description: 'Description of Team Member 1',
    image: '/images/member1.jpg',
  },
  {
    id: 2,
    name: 'Team Member 2',
    description: 'Description of Team Member 2',
    image: '/images/member2.jpg',
  },
  {
    id: 3,
    name: 'Team Member 3',
    description: 'Description of Team Member 2',
    image: '/images/member3.jpg',
  },
  {
    id: 2,
    name: 'Team Member 4',
    description: 'Description of Team Member 2',
    image: '/images/member4.jpg',
  },
  {
    id: 2,
    name: 'Team Member 5',
    description: 'Description of Team Member 2',
    image: '/images/member5.jpg',
  },
  // Add more team member objects here
];

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [filteredTeam, setFilteredTeam] = useState(teamData);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredProjects = projectsData.filter((project) =>
      project.title.toLowerCase().includes(query)
    );
    const filteredTeam = teamData.filter((member) =>
      member.name.toLowerCase().includes(query)
    );

    setFilteredProjects(filteredProjects);
    setFilteredTeam(filteredTeam);
  };

  const scrollRef = useRef(null);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Delay in milliseconds
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Welcome to Our Website! WIP-IT_Organization</h1>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
                Projects
              </a>
            </li>
            <li>
              <a href="#team" onClick={(e) => handleNavClick(e, 'team')}>
                Team
              </a>
            </li>
          </ul>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <button type="submit">Search</button>
          </div>
        </nav>
      </header>
      <main>
        <section id="about" ref={scrollRef}>
          <div className="card">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </section>
        <section id="projects" ref={scrollRef}>
          <h2>Our Projects</h2>
          <div className="card-grid">
            {filteredProjects.map((project) => (
              <div className="card" key={project.id}>
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="team" ref={scrollRef}>
          <h2>Our Team</h2>
          <div className="card-grid">
            {filteredTeam.map((member) => (
              <div className="card" key={member.id}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.description}</p>
              </div>
            ))}
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
