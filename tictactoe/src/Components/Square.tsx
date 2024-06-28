

interface SquareProps {
    value: string
    onSquareClick: () => void
}


const Square = ({value, onSquareClick}:SquareProps) => {


    
  return (
    <>
        <button onClick={onSquareClick} className="square m-1">{value}</button>
    </>
  )
}

export default Square