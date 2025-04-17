import React, { useState } from 'react'
import useInput from './hooks/useInput'

function UserForm() {
    //const [firstName, setFirstName] = useState('')  // used before custom hook useInput 
    //const [lastName, setLastName] = useState('') // used before custom hook useInput 
    const [firstName,bindFirstName,resetFirstName] = useInput('')
    const [lastName,bindLasttName,resetLastName] = useInput('')
    const submitHandler = e => {
        e.preventDefault() // stop refreshing page
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    {/* before using of useInput('') hook */}
                    {/* <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} /> */} 
                    {/* after using  useInput('') hook */}
                    <input type="text" {...bindFirstName}/>

                </div>
                <div>
                    <label>Last Name</label>
                    {/* before using of useInput('') hook */}
                    {/* <input type='text' value={lastName} onChange={e => setLastName(e.target.value)} /> */}
                    {/* After using useInput('') hook */}
                    <input type="text" {...bindLasttName}/>
                </div>
                <button>Submit</button>
            </form>

        </div>
    )
}

export default UserForm