import React, {useReducer} from 'react'
import './App.css';
import CompA from './Component/CompA';
import CompB from './Component/CompB';
import CompC from './Component/CompC';
export const Count = React.createContext()
const initial = 0
const reducer = (state,action) => {
  switch (action){
    case 'increment' : return state+1 
    case 'decrement' : return state-1
    case 'reset' : return initial
    case 'default' : return state
  }
}
function App() {
  const [count,dispatch] = useReducer(reducer,initial)
  return (
    <Count.Provider value = {{Cnt : count, Dsp : dispatch}}> 
    <div className="App">
      <h1> Counted till --- {count}</h1>
      <CompA/>
      <CompB/>
      <CompC/>
    </div>
    </Count.Provider>
    
  );
}

export default App;
