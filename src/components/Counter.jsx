import React, { useState } from "react";

// const Counter = () => {
//     //declare [value, setValue] = useState(initialValue)
//     const [count, setCount] = useState(0); // state contains count with a value of 0.

//     const incrementCounter = () => {
//         setCount(count + 1); // setValue(value)
//     };

//     const decrementCounter = () => {
//         setCount(count - 1);
//     }

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={incrementCounter}>Increment the counter</button>
//             <button onClick={decrementCounter}>Decrement the counter</button>
//         </div>
//     );
// };

// refactored Counter code
const CountDisplay = (props) => {
    return (
        <div>
            <h1>{props.count}</h1>
        </div>
    )
};

const CountButton = (props) => {
    const incrementCounter = () => {
        props.setCount(props.count + 1);
    };

    const decrementCounter = () => {
        props.setCount(props.count - 1);
    };

    return (
        <div>
            <button onClick={incrementCounter}>Increment the counter</button>
            <button onClick={decrementCounter}>Decrement the counter</button>
        </div>
    );
};

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <CountDisplay count={count} />
            <CountButton setCount={setCount} count={count} />
        </div>
    );
};

export default Counter;