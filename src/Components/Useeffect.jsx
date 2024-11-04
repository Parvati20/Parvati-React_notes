// The useEffect hook is one of the most commonly used hooks in React. It allows you to perform side effects in your function components. 
// Side effects are actions that affect something outside of the component, like fetching data, directly updating the DOM, or setting up a subscription.
// /side effects => network request, data fetching, manual DOM manipulation, event listeners, timers, logging, etc.
// useEffect accepts two arguments. The second argument is optional.
// useEffect(<function>, <dependency>)
// *  it is used for communication from outside world,useffect never return something.
// * A component is never re-rendering based on props,if we want to re-render then we have to use useeffect hook,means useefffect renders but dont return the value.
// * useeffect responsible for re-rendering Component.


// Syntax of useeffect:-
// it takes a callback function as the first argument and a dependency array as the second paramenter.

// / to call an APi in react there are two methods
  //fetch= > default method to call API's
  //axios = > it is a library that you have to install explicitly
    //ERROR BOUNDARY = > Error boundary is a component that is used to catch the errors in the child components tree and display a fallback UI instead of crashing the whole component tree.


// 1. No Dependency Array:If you don't pass a dependency array, useeffect will run whenever the component is rendered or any state changes in the component.
// useEffect(() => {
//     console.log('Effect ran after every render');
//   });

// 2. Empty Dependency Array: If you pass an empty array, the useEffect runs only once, after the initial render. 

// seEffect(() => {
//     console.log('Effect ran only once after the initial render');
//   }, []);
  
// 3. if the dependency array is not empty the the useeffect willl run whenever the value of the dependency array changes.


// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log('Effect is running because "count" changed:', count);
//   }, [count]); // Dependency array includes "count"

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default MyComponent;