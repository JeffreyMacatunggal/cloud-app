import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-red-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <h1 className="text-4xl font-bold text-gray-800">404</h1>
                <p className="text-lg text-gray-700">Page Not Found</p>
                <button 
                    onClick={() => navigate('/')}
                    className="inline-flex items-center px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-3" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    <span className="text-sm font-medium">
                        Back to Home
                    </span>
                </button>
            </div>
        </div>
    );
}

export default NotFound;
