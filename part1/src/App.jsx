import { useState } from "react"

const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  // return (
  //   <div>
  //     {left}
  //     <button onClick={()=>setLeft(left+1)}>Left</button>
  //     <button onClick={()=>setRight(right+1)}>Right</button>
  //     {right}
  //   </div>
  // )
  const [clicks, setClicks] = useState({
    left:0, right:0
  })

  // const handleLeftClick = () => {
  //   const newClicks = {
  //     ...clicks,
  //     left: clicks.left+1
  //     // right: clicks.right
  //   }
  //   console.log(newClicks)
  //   setClicks(newClicks)
  // }

  // const handleRightClick = () => {
  //   const newClicks = {
  //     // left: clicks.left,
  //     ...clicks,
  //     right: clicks.right+1
  //   }
  //   console.log(newClicks)
  //   setClicks(newClicks)
  // }

  const handleLeftClick = () => {setClicks({...clicks, left: clicks.left+1})}
  const handleRightClick = () => {setClicks({...clicks, right: clicks.right+1})}

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
      {clicks.right}
    </div>
  )
}

export default App