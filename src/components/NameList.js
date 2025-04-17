import React from 'react'
import Person from './Person'

function NameList() {
    const names =['Bruce','Clark','Diana']
    const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
      ]
    const nameList = names.map(name=> <h2>{name}</h2>)
    // const personList = persons.map(person=><h2>I am {person.name} I am {person.age} year old. I know {person.skill}</h2>)
    //const personList = persons.map(person=> <Person person={person}></Person>) // here we passing parameter in Person function
    const personList = persons.map(person=> <Person key={person.id} person={person}></Person>) // here we are agin applying key 
  return (
    <div>
        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}
        {
        // names.map(name=><h2>{name}</h2>)
        // <div><h2>{nameList}</h2></div>
        <div><h2>{personList}</h2></div>
        
        }
    </div>
  )
}

export default NameList