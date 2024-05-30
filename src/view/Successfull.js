// src/components/PasswordResetSuccess.js
import React from 'react';
import Navbar from '../component/Navbar';

const Successfully = () => {

    const handleClick = () => {
        window.location.replace("https://www.joinclaris.com");
    }

    return (
        <div className=" flex flex-col items-center justify-center bg-white">
            <Navbar />
            <main className="max-w-sm flex flex-col items-center mt-12">
                <h1 className="text-2xl font-bold mb-4">Password Reset Successful</h1>
                <div className="bg-green-100 rounded-full p-6 mb-4">
                    <img src="https://img.icons8.com/color/96/000000/checked.png" alt="Success" />
                </div>
                <p className="text-gray-600 text-center mb-8">
                    Your password has been successfully reset. You can now log in with your new password
                </p>
                <button
                    onClick={handleClick}
                    type="submit"
                    className="bg-[#FF004F] active:scale-75 duration-300 text-white font-bold py-4  rounded-2xl w-full "
                >
                    close
                </button>
            </main>
        </div>
    );
}

export default Successfully;
