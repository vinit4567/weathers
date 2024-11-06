import React, { useState } from "react";

const FormWithValidation = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State for form errors
  const [formErrors, setFormErrors] = useState({});
  

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate the form
  const validate = () => {
    let errors = {};

    // Name validation (required)
    if (!formData.name) {
      errors.name = "Name is required.";
    }

    // Email validation (required and proper format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Invalid email format.";
    }

    // Password validation (required and length check)
    if (!formData.password) {
      errors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    const errors = validate(); // Check validation

    if (Object.keys(errors).length === 0) {
      // No validation errors, proceed with form submission
      console.log("Form submitted successfully:", formData);
      setFormData({email : '' , password : '' , name : ''})
    } else {
      // Set validation errors in state
      setFormErrors(errors);
    }
  };

 

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.field}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          {formErrors.name && <span style={styles.error}>{formErrors.name}</span>}
        </div>

        <div style={styles.field}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {formErrors.email && <span style={styles.error}>{formErrors.email}</span>}
        </div>

        <div style={styles.field}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          {formErrors.password && <span style={styles.error}>{formErrors.password}</span>}
        </div>
      

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

// Basic inline styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  field: {
    marginBottom: '16px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    backgroundColor: '#61dafb',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop : '50px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },

  btn1 : {
  backgroundColor : 'transparent',
  border :'none',
  marginLeft : '220px',
  marginTop : '-45px',
  


  }
};

export default FormWithValidation;
