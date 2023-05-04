import React, { useState } from 'react';
import './App.css';

const projects = [
  {
    name: 'TTO_Automation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus quis felis ultricies sagittis. Duis sit amet sapien sed urna placerat commodo.',
  },
  {
    name: 'TTO_Changes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus quis felis ultricies sagittis. Duis sit amet sapien sed urna placerat commodo.',
  },
  {
    name: 'TTO_Innovations',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus quis felis ultricies sagittis. Duis sit amet sapien sed urna placerat commodo.',
  },
  {
    name: 'TTO_Maintenance',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus quis felis ultricies sagittis. Duis sit amet sapien sed urna placerat commodo.',
  },
  {
    name: 'TTO_Upgrades',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus quis felis ultricies sagittis. Duis sit amet sapien sed urna placerat commodo.',
  },
];

const teamMembers = ['Kalyan.K', 'Sneha HS', 'Soham CH', 'Shrikanth', 'Avinash'];

function App() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);

    const results = projects.filter((project) =>
      project.name.toLowerCase().includes(query)
    );

    setSearchResults(results);
  };

  const scrollToSection = (section) => {
    const el = document.getElementById(section);
    el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header>
        <h1>WIP-IT-Team</h1>
      </header>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Team</a>
      </nav>
      <section>
        <h2>Projects</h2>
        <div className="search-bar">
          <input
            type="text"
            value={search}
            placeholder="Search projects..."
            onChange={handleSearch}
          />
        </div>
        {searchResults.length > 0 ? (
          searchResults.map((project) => (
            <article key={project.name}>
              <img src={`${project.name}.jpg`} alt={project.name} />
              <h1>{project.name}</h1>
              <p>{project.description}</p>
              <button onClick={() => scrollToSection('team-section')}>
                Meet the team
              </button>
            </article>
          ))
        ) : (
          projects.map((project) => (
            <article key={project.name}>
              <img src={`${project.name}.jpg`} alt={project.name} />
              <h1>{project.name}</h1>
              <p>{project.description}</p>
              <button onClick={() => scrollToSection('team-section')}>
                Meet the team
              </button>
            </article>
          ))
        )}
      </section>
      <section id="team-section">
        <div className="team-members">
          {teamMembers.map((member) => (
            <div key={member}>{member}</div>
          ))}
        </div>
      </section>
      <footer>
        <p>&copy; 2023 WIP-IT-Team</p>
      </footer>
    </div>
  );
}
export default App;