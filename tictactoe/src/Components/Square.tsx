

interface SquareProps {
    value: string
    onSquareClick: () => void
}


const Square = ({value, onSquareClick}:SquareProps) => {


    
  return (
    <>
        <button onClick={onSquareClick} className="square">{value}</button>
    </>
  )
}

export default Square