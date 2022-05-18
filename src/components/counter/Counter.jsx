import react,{useState} from 'react'

function Counter() {
    const [state,setState] = useState(100);
    // console.log(state);
    // console.log(setState);
    // let counter=10;
    const increment =()=>{
        console.log("Increment Called")
        setState(state+1)
    };
    const decrement =()=>{
        console.log("decrement Called")
        setState(state-1)
    };
  return (
    <div>
        <button onClick={decrement}>-</button>
        {state}
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter;