import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <form>
                <div>
                    <input type='text' placeholder='First name' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
                </div>
                <br></br>
                {/* With the help of this ...name operator we can show both name in <h2> */}
                <div>
                    <input type='text' placeholder='Last name' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
                </div>
                <h2>Your first name is - {name.firstName}</h2>
                <h2>Your last name is - {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default HookCounterThree