import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  getCatsFetch } from './postSlice';
function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(state=> state.posts.cats);
    useEffect(()=> {
        dispatch(getCatsFetch());
    },[]);
  return (
    <div>
        <h2> Posts list </h2>
        {posts && posts.map(post=> (
            <p key={post.id}>{post.title}</p>
        ))}
    </div>
  )
}

export default Posts