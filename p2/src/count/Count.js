import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,incrementByAmount,clearAll} from './counterSlice';
const Count = () => {
const value=useSelector((state)=>state.counter.value);
const dispatch=useDispatch()
  return (
   <>
   <h1 className='text-center p-5 text-xl uppercase w-[600px] font-mono text-white'>counter app react-reduxtoolkit</h1>
   <h1 className='text-center p-5 text-3xl uppercase w-[600px] font-mono text-white'>TailwindCss</h1>
    <div className='   w-[700px] bg-yellow-400 p-10 flex   '>

        <button className='p-2 text-xl mx-3 bg-yellow-700 text-white' onClick={()=>{dispatch(increment())}}>increment</button>
        <span className='p-8 mx-2 text-xl bg-black w-[80px] text-white'>{value}</span>
        <button className='p-2 mx-4  text-xl bg-yellow-700 text-white' onClick={()=>{dispatch(decrement())}}>decrement</button>
        <button className='p-3 text-xl bg-green-600 text-white mx-5' onClick={()=>{dispatch(incrementByAmount(5))}}>incrementby five</button>
        <button className='p-2 text-xl bg-red-600 text-white mx-5' onClick={()=>{dispatch(clearAll())}}>clearAll</button>
      
    </div>
    </>
  )
}

export default Count
