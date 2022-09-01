import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, incrementByCount} from './counterSlice';
function Counter() {
    const count = useSelector(state=> state.counter.count);
    const dispatch = useDispatch();
  return (
    <div>
        <h6>Count: {count}</h6>
        <button onClick={()=>dispatch(increment())}>Increment</button><br/>
        <button onClick={()=>dispatch(decrement())}>Decrement</button><br/>
        <button onClick={()=>dispatch(incrementByCount(6))}>Increment By Count</button>

    </div>
  )
}

export default Counter