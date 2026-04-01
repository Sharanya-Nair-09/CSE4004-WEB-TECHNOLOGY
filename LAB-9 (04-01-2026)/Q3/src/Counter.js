import React, { useState } from 'react';

const Counter = () => {
  // Requirement: Store counter value using useState and initialize with 0
  const [count, setCount] = useState(0);

  // Requirement: State updater functions for increment/decrement
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.card}>
      <span style={styles.label}>Total Count</span>
      {/* Requirement: Display counter value dynamically */}
      <h1 style={styles.countValue}>{count}</h1>

      <div style={styles.buttonGroup}>
        {/* Requirement: onClick event handling */}
        <button onClick={decrement} style={styles.btnSec}>−</button>
        <button onClick={reset} style={styles.btnReset}>Reset</button>
        <button onClick={increment} style={styles.btnPri}>+</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#FFFFFF',
    padding: '50px',
    borderRadius: '24px',
    boxShadow: '0 20px 40px rgba(30, 58, 138, 0.12)',
    textAlign: 'center',
    border: '1px solid #E2E8F0',
    width: '320px'
  },
  label: { fontSize: '12px', textTransform: 'uppercase', color: '#64748B', fontWeight: 'bold', letterSpacing: '1.5px' },
  countValue: { fontSize: '80px', margin: '20px 0', color: '#1E3A8A', fontWeight: '900' },
  buttonGroup: { display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center' },
  btnPri: { padding: '15px 30px', fontSize: '24px', backgroundColor: '#1E3A8A', color: '#FFF', border: 'none', borderRadius: '12px', cursor: 'pointer' },
  btnSec: { padding: '15px 30px', fontSize: '24px', backgroundColor: '#BFDBFE', color: '#1E3A8A', border: 'none', borderRadius: '12px', cursor: 'pointer' },
  btnReset: { padding: '10px 15px', fontSize: '13px', backgroundColor: 'transparent', color: '#1E3A8A', border: '2px solid #1E3A8A', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }
};

export default Counter;
