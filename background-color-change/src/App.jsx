import { useState } from 'react'
import Button from './components/Button'
function App() {
  const [color, setColor] = useState("purple");

  return (
    <>
      <div className='w-screen h-screen duration-500  flex justify-center items-end' style = {{backgroundColor : color}}>
        <div className='flex items-center justify-center gap-2 p-3 bg-blue-200 border-2 border-black rounded-3xl w-4/5 h-fit mb-5'>
          <Button setColor= {setColor} color = "Red"/>
          <Button setColor= {setColor} color = "Green"/>
          <Button setColor= {setColor} color = "Blue"/>
          <Button setColor= {setColor} color = "Olive"/>
          <Button setColor= {setColor} color = "Gray"/>
          <Button setColor= {setColor} color = "Yellow"/>
          <Button setColor= {setColor} color = "Pink"/>
          <Button setColor= {setColor} color = "Purple"/>
          <Button setColor= {setColor} color = "Lavender"/>
          <Button setColor= {setColor} color = "White"/>
          <Button setColor= {setColor} color = "Black"/>
        </div>
      </div>
    </>
    
  )
}

export default App
