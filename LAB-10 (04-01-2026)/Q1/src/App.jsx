import React, { useState } from 'react';
import './App.css';

function App() {
  // Manage form input fields using the useState Hook
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Capture user input changes using the onChange event handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Bind input field values to state (Controlled Component)
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error message when user starts typing again
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // Validate input fields using conditional logic
  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    
    const emailRegex = /\S+@\S+\.\S+/;
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    setErrors(tempErrors);
    // Return true if no errors found
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission using onSubmit
  const handleSubmit = (e) => {
    // Prevent default form submission if validation fails
    e.preventDefault();
    
    if (validate()) {
      console.log("Form Submitted Successfully:", formData);
      setSubmitted(true);
      
      // Reset form fields after successful submission
      setFormData({ name: '', email: '', password: '' });
      
      // Clear success message after a few seconds
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="container">
      <div className="form-card">
        <h2>User Information</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
            />
            {/* Display validation error messages dynamically */}
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Min. 6 characters"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <button type="submit">Submit Information</button>
          
          {submitted && <p className="success-msg">Form submitted successfully!</p>}
        </form>
      </div>
    </div>
  );
}

export default App;
