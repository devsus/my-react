import React from 'react';


 const Hello = () =>{
    // it is the using of JSX
//     return(
//      <div>
//         <h1>Hello Devendra</h1>
//      </div>

//     )
// ......Now without using JSX
   return React.createElement('div', {id:'hello',class:'dummyClass'},  React.createElement('h1', null, 'Hello Devendra'))
 }

export default Hello