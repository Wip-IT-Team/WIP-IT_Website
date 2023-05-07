import React, { useState, useRef } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const projectsData = [
  {
    id: 1,
    title: 'TTO_Automation',
    description: 'Description of Project 1',
    image: '/images/project1.jpg',
  },
  {
    id: 2,
    title: 'TTO_Changes',
    description: 'Description of Project 2',
    image: '/images/project2.jpg',
  },
  {
    id: 3,
    title: 'WIP-IT_Website',
    description: 'Description of Project 2',
    image: '/images/project3.jpg',
  },
  // Add more project objects here
];

const teamData = [
  {
    id: 1,
    name: 'Kalyan K',
    description: 'Description of Team Member 1',
    image: 'https://i.postimg.cc/J4sN229G/kalyan.jpg',
  },
  {
    id: 2,
    name: 'Soham CH',
    description: 'Description of Team Member 2',
    image: 'https://i.postimg.cc/bvh1dNdt/soham.jpg',
  },
  {
    id: 3,
    name: 'Shrikant D',
    description: 'Description of Team Member 2',
    image: 'https://i.postimg.cc/vmtfnF6S/shrikant.jpg',
  },
  {
    id: 2,
    name: 'Avinash S',
    description: 'Description of Team Member 2',
    image: 'https://i.postimg.cc/Y2p8b8rW/avinash.jpg',
  },
  {
    id: 2,
    name: 'Sneha HS',
    description: 'Description of Team Member 2',
    image: 'https://i.postimg.cc/V6sMBGqs/sneha.jpg',
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
      }, 500);
      // if sectionId is "about", scroll to the header of the section
      if (sectionId === "about") {
        const header = section.querySelector("h2");
        if (header) {
          setTimeout(() => {
            header.scrollIntoView({ behavior: 'smooth' });
          }, 500);
        }
      }
    }
  };

  return (
    <div className="App">
      <header>
        <h1 id='header'>Welcome to Our Website! WIP-IT_Organization</h1>
        <nav>
          <div className='btn-container'>
          <ul>
            <li>
              <a href="#home" onClick={(e) => handleNavClick(e, 'header')} className='btn'>Home</a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className='btn'>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className='btn'>
                Projects
              </a>
            </li>
            <li>
              <a href="#team" onClick={(e) => handleNavClick(e, 'team')} className='btn'>
                Team
              </a>
            </li>
          </ul>
          </div>
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
      <main className='content'>
      <section id="about" ref={scrollRef}> 
        <div className="card"> 
          <img src="path/to/image.jpg" alt="About Us Image" className="about-image"/> 
          <div className="about-content"> 
            <h2>About Us</h2> 
            <p> 
              Welcome to WIP-IT Website! We are a team of passionate individuals dedicated to providing innovative solutions for your development needs. With years of experience and a customer-focused approach, we aim to deliver high-quality projects tailored to meet your specific requirements. Our expertise ranges from web development to mobile app development, ensuring that we can assist you with a wide range of technology solutions. Trust us to bring your ideas to life and make your digital dreams a reality. 
            </p> 
          </div> 
        </div> 
      </section> 
        <section id="projects" ref={scrollRef}>
          <h2>Our Projects</h2>
          <div className="card-grid">
            {filteredProjects.map((project) => (
              <div className="card projects" key={project.id}>
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
              <div className="card team-members" key={member.id}>
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
