import React from 'react'

function Columns() {
  const items = [] // it is array of items 
  return (
    // <div>
    //     <td>Name</td>
    //     <td>Vishwas</td>
    // </div>
    // ---------------------------------------
    // <React.Fragment>
    //   {
    //     items.map(item => (
    //       <React.Fragment key={item.id}>
    //        <h1>Title</h1>
    //        <p>{item.title}</p>
    //       </React.Fragment>

    //     ))
    //   }
    //   <td>Name</td>
    //   <td>Vishwas</td>
    // </React.Fragment>

    //------------------------------------------
    <React.Fragment>
      <td>Name</td>
      <td>Vishwas</td>
    </React.Fragment>
  )
}

export default Columns