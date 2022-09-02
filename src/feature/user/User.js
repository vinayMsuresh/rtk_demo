import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import {fetchUserById,fetchusers} from './userSlice';

function User() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users);
    const userInfo = useSelector(state => state.user.user);
    useEffect(()=>{
        dispatch(fetchusers());
    },[]);
    const setUsersById = (id) => {
        dispatch(fetchUserById(id));
    }
    console.log(userInfo)
  return (
    <div>
        <h2>Users list</h2>
        {users.map(user=> (
            <div key={user.id}>
                <h6 onClick={()=>setUsersById(user.id)}>{user.name}</h6>
            </div>
        ))}

        { Object.keys(userInfo).length > 0 && (
            <>
            <h2>User Info</h2>
            <h5>Name: {userInfo.name}</h5> 
            <h5>email: {userInfo.email}</h5>
            <h5>phone: {userInfo.phone}</h5>
            </>
        )}
    </div>
  )
}

export default User