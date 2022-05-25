import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {frirndId}= useParams();

    const [friend, setFriend]= useState({});

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${frirndId}`)
        .then(res =>res.json())
        .then(data => setFriend(data))
        

    }, [])
    return (
        <div>
      
            <h2>This is details of a bandu {frirndId}</h2>
            <h2>Name : {friend.name}</h2>
            <h3>Email : {friend.email}</h3>
            <h1>City : {friend.address?.city}</h1>
            <h1>City : {friend.address?.geo.lat}</h1>
        </div>
    );
};

export default FriendDetail;