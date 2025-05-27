import React, { useEffect, useState } from "react";
function Github(){
    const [data, setData] = useState([]);
    useEffect(() => {
        const response = fetch('https://api.github.com/users/Parvm1102')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching GitHub users:', error));
       
     }, [])
    return (
        <>
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 bg-gray-600 text-white">Github Account</h1>
            <div className="flex">
                <img src={data.avatar_url} alt="" />
                <div className="flex flex-col items-start">
                    <div className="text-gray-700 text-3xl mx-10 my-5">The user is {data.name}</div>
                    <div className="text-gray-700 text-3xl mx-10 mb-5">userId: {data.login}</div>
                    <div className="text-gray-700 text-3xl mx-10 ">Public Repos: {data.public_repos}</div>
                </div>
                
            </div>
            
        </div>
        </>
    );
}

export default Github;