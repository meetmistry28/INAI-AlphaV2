import React from 'react';
import './box.css';
import { useNavigate } from 'react-router-dom';

const Boxintern = () => {
  const navigate = useNavigate();

  return (
    <div className="box-page">
      <div className="box-card">
        <h2 className="box-title">Apply now for Internships & fill your details</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
          <a 
            href="https://forms.gle/CYosPZVZjopWGJMH6" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#4285F4',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: '500',
              textAlign: 'center',
              minWidth: '120px'
            }}
          >
            Apply Now 
          </a>
          <button
            className="box-button"
            style={{
              backgroundColor: '#5d7e9bff',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '500',
              minWidth: '120px'
            }}
            onClick={() => navigate(-1)}
          >
            Back to career page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Boxintern;
