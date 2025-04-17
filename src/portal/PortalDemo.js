import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    // <div id="portal-root"></div>  added in index.html
  return ReactDOM.createPortal(
    <h1>
        Poratl Demo 
    </h1>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo