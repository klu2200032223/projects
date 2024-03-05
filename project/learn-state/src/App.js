import './index.css'
import React, {useState} from 'react';
export default function App(){
  const[count,setCount]=useState(0);
  const[isOpen,setOpen]=useState(true);
  const but =()=>
  {alert("prev");}
  return(
    <div>
  <button onClick={()=>setOpen(!isOpen)}>
  {isOpen? "Hide" : "Show"}</button>

  {isOpen &&(
  <div className="wrapper">
  <div className="numberWrapper">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
    <p>hello{count}</p>
    <div className="btn">
      <button onClick={but}>previous</button>
      <button onClick={()=>setCount(count+1)}>next</button>
    </div>
    </div>)}
</div>
  )
}

