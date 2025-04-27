import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function EmailForm() {
  const { hackathonTitle } = useParams();
  const [emails, setEmails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Emails entered:', emails);
    // here you can call your API to send emails
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Enter Emails for {decodeURIComponent(hackathonTitle)}</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="10"
          cols="50"
          placeholder="Enter emails separated by commas"
          value={emails}
          onChange={(e) => setEmails(e.target.value)}
          style={{ width: '100%', marginTop: '10px' }}
        />
        <br />
        <button type="submit" style={{ marginTop: '10px' }}>Send Email Template</button>
      </form>
    </div>
  );
}

export default EmailForm;
