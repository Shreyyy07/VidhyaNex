import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IMG from '../lib/Images/bg-2.jpg';

const Panel = () => {
    const navigate = useNavigate();

    const handleTeacherLogin = () => {
        navigate('/teacher-dashboard'); 
    };

    return (
        <div className='bg-cover h-full w-full' style={{ backgroundImage: `url(${IMG})` }}>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg max-w-md w-full">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Select Login Type</h2>
                    <div className="flex flex-col space-y-4">
                        <Link 
                            to="/dashboard" 
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-center text-lg"
                        >
                            Login as Student
                        </Link>
                        <button
                            onClick={handleTeacherLogin}
                            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 text-lg"
                        >
                            Login as Teacher
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panel;
