import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
const {postId}= useParams();
const [post , setPost] =useState([]);
useEffect(()=> {
    const url=`https://jsonplaceholder.typicode.com/posts/${postId}`;
    console.log(url)
fetch(url)
.then(res => res.json())
.then(data => setPost(data))
}, [postId])
    return (
        <div>
            <h4>This is post details {postId}</h4>
            <h4>{post.title}</h4>
            <h5>{post.body}</h5>

        </div>
    );
};

export default PostDetail;