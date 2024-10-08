import { useState } from "react"

// const Hello = ({name, age}) => {
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - age
//   }
//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you were born in {bornYear()} </p>
//     </div>
//   )
// }

const Display = ({count}) => <div>{count}</div>

const Button = ({onClick, text}) =><button onClick={onClick}>{text}</button>

const App = () => {
  const [counter, setCounter] = useState(0)
  // setTimeout(
  //   () => setCounter(counter+1),
  //   1000
  // )
  console.log('rendering with counter value', counter)
  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter+1)
  }
  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter-1)
  }
  
  // const handleClick = () => {
  //   console.log('clicked')
  // }
  return (
    <>
      {/* <div>{counter}</div> */}
      {/* <button onClick={handleClick}> */}
      {/* <button onClick={() => console.log('clicked')}> */}
      <div>
        <Display count={counter} />
        <Button onClick={increaseByOne} text='plus'/>
        <Button onClick={setToZero} text='zero' />
        <Button onClick={decreaseByOne} text='minus' />
      </div>
    </>
      /* <div>
        <p>Hello world, it is {now.toString}</p>
        <p>
          {a} plus {b} is {a+b}
        </p>
        <Hello name={name} age={age}/>
        <Hello name="Leo" age={21}/>
      </div>
      <div>
        <p>{friends[0].name} {friends[0].age}</p>
        <p>{friends[1].name} {friends[1].age}</p>
      </div> */  
  )
}

export default App