import React from 'react';

const StudentCard = ({ name, department, marks }) => {
  // Performance color logic (slightly desaturated to match the sage theme)
  const statusColor = marks >= 80 ? '#6B8E6B' : marks >= 50 ? '#A9927D' : '#BC8A8A';

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        {/* Updated: Profile circle to Dark Sage Green */}
        <div style={styles.avatar}>{name.charAt(0)}</div>
        <div style={styles.info}>
          <h3 style={styles.name}>{name}</h3>
          <span style={styles.badge}>{department}</span>
        </div>
      </div>
      <div style={styles.footer}>
        <span style={styles.label}>Academic Score</span>
        <div style={styles.scoreContainer}>
          <div style={{ ...styles.progressBar, width: `${marks}%`, backgroundColor: statusColor }}></div>
          <span style={{ ...styles.marks, color: statusColor }}>{marks}%</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '24px',
    margin: '12px',
    width: '260px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)', // Softer shadow for sage theme
    border: '1px solid #E0E7E0'
  },
  header: { display: 'flex', alignItems: 'center', marginBottom: '20px' },
  avatar: {
    width: '50px', height: '50px', borderRadius: '50%',
    backgroundColor: '#4A5D4E', // Dark Sage Green
    color: '#ffffff',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '22px', fontWeight: '600', marginRight: '15px'
  },
  name: { margin: 0, fontSize: '18px', color: '#2F362F', fontWeight: '700' },
  badge: {
    fontSize: '10px', backgroundColor: '#F1F5F1', color: '#4A5D4E',
    padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', 
    fontWeight: 'bold', marginTop: '4px', display: 'inline-block'
  },
  footer: { borderTop: '1px solid #F1F5F1', paddingTop: '15px' },
  label: { fontSize: '11px', color: '#8A9A8A', marginBottom: '8px', display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' },
  scoreContainer: { display: 'flex', alignItems: 'center', gap: '12px' },
  progressBar: { height: '8px', borderRadius: '10px', flexGrow: 1, backgroundColor: '#E0E7E0' },
  marks: { fontWeight: '700', fontSize: '14px' }
};

export default StudentCard;
