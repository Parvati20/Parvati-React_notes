// usememo:-usememo is a hook that is used to optimize the performance of the functional Component.
// * usememo is used to memoize the value of the function that is passed as the first argument.
// * usememo is used to cache the value of the function that is passed as the first argumemt.
// * usememo is used to not re-render the component , if the value of the function is not changed.
// * usememo returns a memoized value.
// * Using usememo , we can return a value but using useEffect , we can not return a value.

// ** Usememo is a hook that provides a facility to prevent a unneccary re-render of a function ot it returns a value.

// example without usememo:
const square=()=>{
    console.timeLog("square is called");
    for(let i=0;i<10000;i++){
        return number*number;
    }
}

// ** with usememo this will not be called unless the dependency is changed.
// const square=usememo(()=>{
//     console.log("square is called")
//     for(let i=0;i<1000;i++){
//         return number*number;
//     }
// },[number])