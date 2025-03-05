import React, { useState } from 'react';
import styles from './Registration.module.css';

const Registration = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [showTooltip, setShowTooltip] = useState(false); // State to control tooltip visibility

  //updates the respective state (name or email)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if name and email are filled
    if (!formData.name || !formData.email) {
      alert('Please fill in both name and email fields.');
      return; // Prevent form submission if fields are empty
    }

    // If both fields are filled, proceed with opening the GitHub page
    window.open('https://github.com/copilot', '_blank');
    //opens a new window or tab

    //window.location.href = 'https://github.com/copilot'; 
    // Navigate to GitHub Copilot page in the same window

    // Function to show a small window with a message

  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Registration Form</h1>
      <form onSubmit={handleSubmit} >
        {/* when the form is submitted the handleSubmit function executed. */}
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={styles.input}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button
            type="submit"
            className={styles.button}
            onMouseOver={() => setShowTooltip(true)}  // Show tooltip on hover
            onMouseOut={() => setShowTooltip(false)}   // Hide tooltip when mouse leaves
          >
            Submit
          </button>
          {showTooltip && <div className={styles.tooltip}>Click to submit the form</div>}
        </div>
      </form>
    </div>
  );
};

export default Registration;