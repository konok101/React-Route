import React, { useEffect, useState } from 'react';
import Friend from '../../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, [])
    return (
        <div>
            <h1>This is friend</h1>
            <h4>Friends length: {friends.length}</h4>
            {
                friends.map(friend=> <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;