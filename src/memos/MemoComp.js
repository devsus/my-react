import React from 'react'

function MemoComp({name}) {
    console.log('Redering memo component')
  return (
    <div>{name}</div>
  )
}

// export default MemoComp    // Or we can use 
export default React.memo(MemoComp)  // it is working here as Higher order component
