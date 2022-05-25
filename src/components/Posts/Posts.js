import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
 
 

const Posts = () => {
  
    const [posts, setposts]= useState([]);

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setposts(data))
    }, [])
    return (
        <div>
            <h1>This is from post component = { posts.length}</h1>
            {
                posts.map(post=> <Link key={post.id}   to={`/post/${post.id}`} >{post.id}    </Link>)
            }
<Outlet></Outlet>
        </div>
   
    );
};

export default Posts;