

interface SquareProps {
    value: string
    handleClick: () => void
}


const Square = ({value, handleClick}:SquareProps) => {


    
  return (
    <>
        <button onClick={handleClick} className="square">{value}</button>
    </>
  )
}

export default Square