import React, { useState } from 'react'
import { getLogin } from '../ApiCall/api'

import loginImg from '../assets/sang_logo.png'
import '../App.css'
import { json, useNavigate } from 'react-router-dom'
function Login() {
    const Navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setpassword] = useState()


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await getLogin({
                sLoginName: email,
                sPassword: password
            });
            console.log('Login Response:', res.status);
            if (res.status == '200') {
                Navigate('/home')
            }

        } catch (error) {
            console.error('Login Error:', error);
        }

    };

    return (
        <>
            <div className="flex mt-20 w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl" style={{ backgroundColor: '#F2F3F5' }}>
                <div className="hidden bg-cover lg:block lg:w-1/2">
                    <img className="login" src={loginImg} alt="" />
                </div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-7 sm:h-8" src={loginImg} alt="" />
                    </div>

                    <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                        Welcome back!
                    </p>


                    <form onSubmit={handleSubmit}>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Email Address</label>
                            <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Password</label>
                                <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                            </div>

                            <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password"
                                name='password' value={password} onChange={(e) => setpassword(e.target.value)} required />
                        </div>

                        <div className="mt-6">
                            <button className="signButton w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" onSubmit={handleSubmit}>
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                        <a href="#" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</a>

                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login