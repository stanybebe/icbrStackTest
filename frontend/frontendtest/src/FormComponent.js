import React, { useState } from 'react';
import axios from './axiosConfig'; 
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

// Assuming you have a function to get CSRF token
const FormComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handle input field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Get CSRF token from cookies
    const getCSRFToken = () => {
        const cookies = document.cookie.split(';');
        const csrfCookie = cookies.find(cookie => cookie.trim().startsWith('csrftoken='));
        return csrfCookie ? csrfCookie.split('=')[1] : '';
    }

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const csrfToken = getCSRFToken(); 

        try {
            const response = await axios.post("http://localhost:8000/api/submit-form/", formData, {
                headers: {
                  'Content-Type': 'application/json',
                  'X-CSRFToken': csrfToken,  // Send CSRF token for protection
                },
                withCredentials: true
              });
            console.log("Success:", response.data);
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
        }
    };

    return (
        <Paper sx={{ padding: 3, maxWidth: 400, margin: '0 auto' }}>
            <Typography variant="h6" gutterBottom>Submit Your Message</Typography>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        required
                    />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        type="submit"
                        sx={{ marginTop: 2 }}
                    >
                        Submit
                    </Button>
                </Box>
            </form>
        </Paper>
    );
};

export default FormComponent;
