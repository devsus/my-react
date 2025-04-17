import React from 'react'
// I am Child component

// function FRInput() {
//     return (
//         <div>
//             <input type='text'>   {/*  This is the Child Ref */}
//             </input>
//         </div>
//     )
// }

// will use arrow function
const FRInput = React.forwardRef((props,ref) =>{
    return(
        <div>
            <input type='text' ref={ref}></input>
        </div>
    ) // return closing 
}) // forward Ref closing

export default FRInput