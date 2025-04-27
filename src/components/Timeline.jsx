import React from 'react';
import HackathonCard from './HackathonCard';

const hackathonIdeas = [
  {
    title: 'Hackathon 1: AI for Healthcare',
    description: 'Build AI solutions for improving diagnostics and patient care.',
  },
  {
    title: 'Hackathon 2: Sustainable Cities',
    description: 'Create smart and eco-friendly city solutions.',
  },
  {
    title: 'Hackathon 3: Fintech Innovation',
    description: 'Develop applications for better personal finance management.',
  },
  {
    title: 'Hackathon 4: EdTech Revolution',
    description: 'Design creative tools to make learning easier and fun.',
  },
  {
    title: 'Hackathon 5: Space Exploration Apps',
    description: 'Invent apps that could help in space missions or astronomy.',
  },
];

function Timeline() {
  return (
    <div style={{ display: 'flex', overflowX: 'auto', padding: '20px', gap: '20px' }}>
      {hackathonIdeas.map((hackathon, index) => (
        <HackathonCard key={index} hackathon={hackathon} />
      ))}
    </div>
  );
}

export default Timeline;
