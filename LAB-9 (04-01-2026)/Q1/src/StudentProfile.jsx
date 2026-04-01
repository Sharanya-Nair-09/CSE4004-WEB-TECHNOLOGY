import React from 'react';
import './Profile.css';

const StudentProfile = () => {
  // Functional Requirement: JavaScript variables for details
  const name = "John Doe";
  const department = "Computer Science";
  const year = "3rd Year";
  const section = "Section C";

  return (
    <div className="background-container">
      <div className="glass-card">
        <h1 className="title">STUDENT PROFILE</h1>
        
        <div className="content">
          <div className="info">
            <div className="row">
              <span className="label">NAME</span>
              <span className="colon">:</span>
              <span className="value">{name}</span>
            </div>
            <div className="row">
              <span className="label">DEPARTMENT</span>
              <span className="colon">:</span>
              <span className="value">{department}</span>
            </div>
            <div className="row">
              <span className="label">YEAR</span>
              <span className="colon">:</span>
              <span className="value">{year}</span>
            </div>
            <div className="row">
              <span className="label">SECTION</span>
              <span className="colon">:</span>
              <span className="value">{section}</span>
            </div>
          </div>

          <div className="photo-container">
            <div className="photo-placeholder">
              {/* Profile icon SVG */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
