import axios from '../Services/Axios';
import React, { useEffect } from 'react';

function Home() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userToken = localStorage.getItem('token');
                console.log("home token 9",userToken);
                if (!userToken) {
                    console.error('Token is missing or invalid');
                }
                const res = await axios.get(
                    `http://103.120.178.195/CoreSecurityApi/User/GetUsers`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${userToken}`
                        }
                    }
                );
                console.log('User Data:', res.data);
                // Handle the retrieved user data as needed
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures this runs only once on component mount

    return (
        <div>Home</div>
    );
}

export default Home;
