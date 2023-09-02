import React,{useContext} from 'react'
import { Count } from '../App'

function CompD() {
    const cnt = useContext(Count)
  return (
    <div>
      <h3> In Comp -- D</h3>
      <button onClick={()=> cnt.Dsp('increment')}> Increment</button>
      <button onClick={()=> cnt.Dsp('decrement')}> Decrement </button>
      <button onClick={()=> cnt.Dsp('reset')}> Reset</button>
    </div>
  )
}

export default CompD
