import React from 'react';
import StudentCard from './StudentCard';

function App() {
  const students = [
    { id: 1, name: "Arjun Mehta", department: "Computer Science", marks: 94 },
    { id: 2, name: "Sanya Iyer", department: "Electrical", marks: 88 },
    { id: 3, name: "Rohan Varma", department: "Mechanical", marks: 72 },
    { id: 4, name: "Priya Nair", department: "Information Tech", marks: 58 }
  ];

  return (
    <div style={appStyles.container}>
      <header style={appStyles.header}>
        <h1 style={appStyles.title}>Student Portal</h1>
        <div style={appStyles.underline}></div>
      </header>
      <div style={appStyles.grid}>
        {students.map(s => <StudentCard key={s.id} {...s} />)}
      </div>
    </div>
  );
}

const appStyles = {
  container: {
    minHeight: '100vh', 
    backgroundColor: '#ECF3EB', // Light Sage Green Background
    padding: '60px 20px', 
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif'
  },
  header: { textAlign: 'center', marginBottom: '50px' },
  title: { fontSize: '36px', color: '#2F362F', fontWeight: '800', marginBottom: '10px' },
  underline: { height: '4px', width: '60px', backgroundColor: '#4A5D4E', margin: '0 auto', borderRadius: '2px' },
  grid: {
    display: 'flex', justifyContent: 'center',
    flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto'
  }
};

export default App;
