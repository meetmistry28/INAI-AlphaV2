import React from 'react';
import './box.css';
import { useNavigate } from 'react-router-dom';

const Box = () => {
  const navigate = useNavigate();

  return (
    <div className="box-page">
      <div className="box-card">
        <h2 className="box-title">Our Training Program is coming soon</h2>
        <p className="box-desc">

        </p>
        <button
          className="box-button"
          style={{ display: 'block', margin: '12px auto 0' }}
          onClick={() => navigate(-1)}
        >
          Back to career page
        </button>
      </div>
    </div>
  );
};

export default Box;
