import { useState } from "react"
import Square from "./Components/Square"


const App = () => {

  const [value, setValue] = useState("");
  const [squares, setSquares] = useState(Array(9).fill(null))

  
  const squareClick = () => {
    setValue("X")
  }


  return (
    <>
    <div className="board-row">
      <Square handleClick={squareClick} value={squares[0]} />
      <Square handleClick={squareClick} value={value} />
      <Square handleClick={squareClick} value={value} />

    </div>
    <div className="board-row">
      <Square handleClick={squareClick} value="4" />
      <Square handleClick={squareClick} value="5" />
      <Square handleClick={squareClick} value="6" />


    </div>
    <div className="board-row">
      <Square handleClick={squareClick} value="7" />
      <Square handleClick={squareClick} value="8" />
      <Square handleClick={squareClick} value="9" />


    </div>
      
    </>
  )
}

export default App