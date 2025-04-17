import React ,{useContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext,ChannelContext } from '../../App'

function ComponentE() {
    // Direct getting Context Value using useContext
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    // <div>
    //     <ComponentF/>
    // </div>
    <div>
        {user}, {channel}
    </div>
  )
}

export default ComponentE