import React, { useEffect, useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../component/Navbar';
import { resetPassApi } from '../store/resetPass';
import { useDispatch, useSelector } from 'react-redux';

function ResetPassword() {
    const navigate = useNavigate();
    const response = useSelector((state) => state?.resetResponse?.response?.data?.success);
    const { role, authToken } = useParams();
    const [Mypassword, setMypassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // State to manage loading

    const validatePassword = (pwd) => {
        if (pwd.length < 5) {
            return 'Password must be at least 5 characters long';
        }
        if (!/[0-9]/.test(pwd)) {
            return 'Password must contain at least one integer';
        }
        if (!/[A-Z]/.test(pwd)) {
            return 'Password must contain at least one uppercase letter';
        }
        if (/[^a-zA-Z0-9]/.test(pwd)) {
            return 'Password must not contain symbols';
        }
        return '';
    };

    const dispatch = useDispatch();
    const handleClick = async () => {
        const passwordError = validatePassword(Mypassword);
        if (passwordError) {
            setError(passwordError);
            return;
        }
        if (Mypassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setLoading(true);
        await dispatch(resetPassApi({
            resetLink: authToken,
            Mypassword,
            confirmPassword,
            role
        }));
        setLoading(false); 
    };

    useEffect(() => {
        if (response === true) {
            navigate('/reset-successfully', { replace: true });
        }
    }, [response, navigate]);

    return (
        <div className="gap-12 flex flex-col items-center justify-center bg-white">
            <Navbar />
            <div className="w-full max-w-md">
                <div className="bg-white p-8 rounded-b-lg">
                    <h1 className="text-3xl font-bold text-center mb-2">Reset Your Password</h1>
                    <p className="text-center text-sm text-gray-700 font-semibold mb-6">
                        Provide your new password and confirm your password for new password creation
                    </p>
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    <div className="mb-4">
                        <label className="block text-gray-500 text-sm mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="flex items-center rounded-2xl w-full py-5 px-5 text-gray-700 bg-gray-100 leading-tight">
                            <FaLock className="text-gray-400 mr-2" />
                            <input
                                value={Mypassword}
                                onChange={(e) => {
                                    setMypassword(e.target.value);
                                    setError('');
                                }}
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full focus:outline-none bg-transparent"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-500 text-sm mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <div className="flex items-center rounded-2xl w-full py-5 px-5 text-gray-700 bg-gray-100 leading-tight">
                            <FaLock className="text-gray-400 mr-2" />
                            <input
                                value={confirmPassword}
                                onChange={(e) => {
                                    setconfirmPassword(e.target.value);
                                    setError('');
                                }}
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirm your password"
                                className="w-full focus:outline-none bg-transparent"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            onClick={handleClick}
                            type="button"
                            className={`${loading ? "bg-slate-300  text-slate-500 cursor-not-allowed" : "bg-[#FF004F] text-white"} active:scale-75 duration-300  font-bold py-4 rounded-2xl w-full`}
                            disabled={loading}
                        >
                            {loading ? 'Resetting...' : 'Reset Password'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
