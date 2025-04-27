import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Same hackathonIdeas array as Timeline
const hackathonIdeas = [
  {
    title: 'Hackathon 1: AI for Healthcare',
    description: 'Build AI solutions for improving diagnostics and patient care.',
    problemStatement: 'Problem: Current diagnostic systems often suffer from delays and inaccuracies. Create a system that uses AI/ML for faster and more reliable diagnosis of diseases like cancer, diabetes, or rare disorders. Bonus for patient-friendly interfaces.',
  },
  {
    title: 'Hackathon 2: Sustainable Cities',
    description: 'Create smart and eco-friendly city solutions.',
    problemStatement: 'Problem: Urbanization is leading to resource depletion and environmental degradation. Build IoT-based smart solutions to monitor air quality, manage waste, and optimize energy usage in cities.',
  },
  {
    title: 'Hackathon 3: Fintech Innovation',
    description: 'Develop applications for better personal finance management.',
    problemStatement: 'Problem: Many people lack access to smart, customized financial advice. Build a fintech app that offers real-time budgeting, investment suggestions, and fraud detection for users.',
  },
  {
    title: 'Hackathon 4: EdTech Revolution',
    description: 'Design creative tools to make learning easier and fun.',
    problemStatement: 'Problem: Education gaps persist worldwide. Design an educational app that adapts to different learning speeds/styles and uses gamification to boost engagement.',
  },
  {
    title: 'Hackathon 5: Space Exploration Apps',
    description: 'Invent apps that could help in space missions or astronomy.',
    problemStatement: 'Problem: Space missions require precise planning and monitoring. Build an app that simulates mission planning, trajectory tracking, or helps in citizen astronomy projects.',
  },
];

function HackathonDetail() {
  const { hackathonTitle } = useParams();
  const navigate = useNavigate();

  const hackathon = hackathonIdeas.find(h => h.title === decodeURIComponent(hackathonTitle));

  if (!hackathon) {
    return <div>Hackathon not found!</div>;
  }

  const handleContinue = () => {
    navigate(`/email-form/${encodeURIComponent(hackathon.title)}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{hackathon.title}</h1>
      <p><strong>Short Description:</strong> {hackathon.description}</p>
      <h2>Problem Statement</h2>
      <p>{hackathon.problemStatement}</p>

      <button onClick={handleContinue} style={{ marginTop: '20px' }}>
        Continue to Email Form
      </button>
    </div>
  );
}

export default HackathonDetail;
