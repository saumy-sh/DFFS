
import React, { useState } from 'react';
import axios from 'axios';


export const SignUp = () => {
    const [formData, setFormData] = useState({
        userAddress: '',
        userPassword: '',
        userStatus: 'citizen'
    });
    const [status,setStatus] = useState(process)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const response = await axios.post("http://localhost:5000/user/signup", formData)
            
            console.log(response.data);
            setStatus("User created successfully")
            // Handle success (e.g., redirect to login page)
        } catch (err) {
            console.error(err);
            setStatus("An error occurred!")
        }
    };

    return (
        <body>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Ether Address:</label>
                    <input
                        type="text"
                        name="userAddress"
                        value={formData.userAddress}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="userPassword"
                        value={formData.userPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>User Type:</label>
                    <select name="userStatus" value={formData.userStatus} onChange={handleChange}>
                        <option value="citizen">Citizen</option>
                        <option value="police officer">Police Officer</option>
                    </select>
                </div>
                <button type="submit">Sign Up</button>
            </form>
            {status && <p style={{ color: 'red' }}>{status}</p>}
            <p>Already have an account? <a href="/login">Login</a></p>
        </body>
    );
};


