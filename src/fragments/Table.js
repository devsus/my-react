import React from 'react'
import Columns from './Columns'

function Table() {
  return (
    <table>
       <tbody>
        <tr>
            {/* will maintain columns by Columns.js component */}
            <Columns/>
        </tr>
       </tbody>
    </table>
  )
}

export default Table