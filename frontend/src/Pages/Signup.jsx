import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IMG from '../lib/Images/bg3.jpg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    role: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (checked ? value : '') : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname) {
      newErrors.firstname = 'First name is required';
    } else if (/\s/.test(formData.firstname)) {
      newErrors.firstname = 'First name should not contain spaces';
    }

    if (!formData.lastname) {
      newErrors.lastname = 'Last name is required';
    } else if (/\s/.test(formData.lastname)) {
      newErrors.lastname = 'Last name should not contain spaces';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase character';
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one digit';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
     
      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast.success('User created successfully! Redirecting to login page...', {
            onClose: () => navigate('/login'),
          });
        } else {
          console.error('Signup failed:', response.statusText);
          toast.error('Signup failed. Please try again later.');
        }
      } catch (error) {
        console.error('Signup error:', error);
        toast.error('Signup failed. Please try again later.');
      }
    }
  };

    return (
        <div className='bg-cover h-full w-full' style={{ backgroundImage: `url(${IMG})` }}>
            <div className="flex justify-center items-center h-screen">
                <div className="p-8 bg-orange-200 rounded shadow-md w-96">
                    <h2 className="text-2xl font-bold mb-6">Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Firstname</label>
                            <input
                                type="text"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                            />
                             {errors.firstname && <p className="text-red-500">{errors.firstname}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Lastname</label>
                            <input
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                            />
                            {errors.lastname && <p className="text-red-500">{errors.lastname}</p>}
                        </div>
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
                            {errors.email && <p className="text-red-500">{errors.email}</p>}
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
                           {errors.password && <p className="text-red-500">{errors.password}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Role</label>
                            <div>
                                <label className="inline-flex items-center mr-4">
                                    <input
                                        type="checkbox"
                                        name="role"
                                        value="student"
                                        checked={formData.role === 'student'}
                                        onChange={handleChange}
                                        className="form-checkbox"
                                    />
                                    <span className="ml-2">Student</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="role"
                                        value="teacher"
                                        checked={formData.role === 'teacher'}
                                        onChange={handleChange}
                                        className="form-checkbox"
                                    />
                                    <span className="ml-2">Teacher</span>
                                </label>
                            </div>
                        </div>
                        <button 
                        type="submit" 
                        className="bg-blue-500 w-full text-white py-2 rounded hover:bg-blue-600"
                        a href="/login">
                            Signup
                        </button>
                    </form>
                    <p className="mt-4 text-center">
                        Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
