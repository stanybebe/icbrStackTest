import React, { useState } from 'react';
import axios from 'axios';
const FormComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const formStyles = {
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '400px',
            margin: '0 auto',
        },
        input: {
            width: '100%',
        },
        button: {
            marginTop: '16px',
        },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8000/api/submit-form/",
                formData,
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
            console.log("Success:", response.data);
          } catch (error) {
            console.error("Error:", error.response?.data || error.message);
          }
          
        console.log('Form submitted:', formData);
        

        // Add your form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} style={formStyles.form}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;