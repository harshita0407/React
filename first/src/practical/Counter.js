import { useState } from "react";

const Counter = () => {
    const [Count , setCount] = useState(0);

    return (
        <div>
            <h2>{Count}</h2>
            <button onClick = {() =>setCount(Count+1)}>+</button>
            <button onClick = {() =>setCount(Count-1)}>-</button>

        </div>
    )
}

export default Counter;