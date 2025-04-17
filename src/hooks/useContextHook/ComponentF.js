import React from 'react'
import { UserContext, ChannelContext } from '../../App'

function ComponentF() {
    return (
        <div>
            {/* <UserContext.Consumer>
            {
                user =>{   //getting user context value from  App.js 
                    return <div>User Context value {user}</div>
                }
            }
        </UserContext.Consumer> */}
            {/* Above code is getting single context */}

            <UserContext.Consumer>
                {
                    user => {   //getting user context value from  App.js 
                        return(
                            <ChannelContext.Consumer>
                                {
                                    channel =>{
                                       return <div>User Context value {user}, Channel Context {channel}</div>
                                    }
                                }
                            </ChannelContext.Consumer>

                        ) 
                    }
                }
            </UserContext.Consumer>


        </div>
    )
}

export default ComponentF