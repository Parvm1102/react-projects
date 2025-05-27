import React, { use } from "react";
import { useParams } from "react-router-dom";
function User(){
    const params = useParams();
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 bg-gray-600 text-white">User Profile</h1>
            <p className="text-gray-700">The user is {params.userId}</p>
        </div>
    );
}

export default User;