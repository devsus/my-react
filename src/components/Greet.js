// function Greet(){
//  return <h1>Hello Devendra</h1>
// }

// we can write using arrow function also 
//const Greet = () => <h1>Hello Devendra</h1>
//export const Greet = () => <h1>Hello Devendra</h1> // we can do like that 

// It is a simple way to get props from App.js like
{/* <Greet name="Bruce" heroName="Batman">
        <p>This  is children props</p>
      </Greet>
      <Greet name="Clarck" heroName="Superman">
       <button>CANCEL</button>
      </Greet>
      <Greet name="Diana" heroName="SuperWomen" /> 
*/}

{/*export const Greet = (props) => {
    console.log(props.name);
    return (
        <div>
            <h1>Hello {props.name} Willan name  is : {props.heroName}</h1>
            {props.children}
        </div>
    )
}*/}

// Now we can Distruct props and state using following code .

{/* const Greet = ({name,heroName}) =>{
  return(
    <div>
        <h1>
            Hello {name} A. K. A. {heroName}
        </h1>
    </div>
  )
}
*/}
// Another way  we can do 
const Greet = props =>{
    const {name,heroName} = props
    return(
      <div>
          <h1>
              Hello {name} A. K. A. {heroName}
          </h1>
      </div>
    )
  }
export default Greet;