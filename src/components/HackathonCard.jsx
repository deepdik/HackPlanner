import React from 'react';
import { useNavigate } from 'react-router-dom';

function HackathonCard({ hackathon }) {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate(`/hackathon/${encodeURIComponent(hackathon.title)}`);
  };

  return (
    <div style={{
      minWidth: '300px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h3>{hackathon.title}</h3>
      <p>{hackathon.description}</p>
      <button onClick={handleProceed} style={{ marginTop: '10px' }}>
        View Details
      </button>
    </div>
  );
}

export default HackathonCard;
