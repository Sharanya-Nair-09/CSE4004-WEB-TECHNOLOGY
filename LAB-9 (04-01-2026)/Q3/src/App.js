import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div style={appStyles.container}>
      <header style={appStyles.header}>
        <h1 style={appStyles.title}>Interactive Counter System</h1>
        <p style={appStyles.subtitle}>Exercise 3: State & Event Handling</p>
      </header>
      <main style={appStyles.main}>
        <Counter />
      </main>
    </div>
  );
}

const appStyles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#FFFDF5', // Cream White
    fontFamily: '"Inter", sans-serif',
    padding: '80px 20px'
  },
  header: { textAlign: 'center', marginBottom: '60px' },
  title: { color: '#1E3A8A', fontSize: '36px', fontWeight: '900', marginBottom: '10px' },
  subtitle: { color: '#64748B', fontSize: '18px' },
  main: { display: 'flex', justifyContent: 'center' }
};

export default App;
