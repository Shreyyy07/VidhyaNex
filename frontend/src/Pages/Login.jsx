import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IMG from '../lib/Images/bg3.jpg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.email) {
            errors.email = 'Email is required';
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        // Reset errors if no validation issues
        setErrors({});

        // Add logic to handle login
        console.log('Form data:', formData);

        // Show success notification and navigate to panel after a delay
        toast.success('Login successful! Redirecting to panel...', {
            onClose: () => navigate('/panel')
        });
    };

    return (
        <div className='bg-cover h-full w-full'
            style={{backgroundImage: `url(${IMG})`}} >
        <div className="flex justify-center items-center h-screen">
        
            <div className="p-8 bg-orange-200 rounded shadow-md w-96 ">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                   {/* <button */}
                    <Link to="/panel" className=" bg-blue-500 flex text-white py-2 rounded hover:bg-blue-600 justify-center">Login</Link>
                    
                  
                </form>
                <p className="mt-4 text-center">
                    Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Signup</Link>
                </p>
                <p className="mt-4 text-center">
                    
                </p>
            </div>
            </div>
         </div>
    );
};

export default Login;










