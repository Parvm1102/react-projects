import { useCallback, useState, useEffect, useRef} from 'react'

import './App.css'

function App() {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [symbolAllowed, setSymbolAllowed] = useState(false)
    const [password, setPassword] = useState("")
    const passwordRef = useRef(null)
    const passwordGenerator = useCallback(() => {
      let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      if (numberAllowed) {
        str += "0123456789"
      }
      if (symbolAllowed) {
        str += "!@#$%^&*()_+[]{}|;:,.<>?/"
      }
      let pass = ""
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * str.length)
        pass += str[randomIndex]
      }
      setPassword(pass)
    }, [length, numberAllowed, symbolAllowed])
    useEffect(() => {
      passwordGenerator();
    }, [passwordGenerator])
    const copyToClipboard = () => {
      if (passwordRef.current) {
        passwordRef.current.select();
        window.navigator.clipboard.writeText(password)
      }
    }
  return (
      <>
        <div className='w-full mx-auto shadow-md rounded-3xl px-6 py-3 my-8 text-orange-500 bg-gray-600'>
          <h1 className='text-white text-center mb-2'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-amber-50 text-blue-900 text-2xl'>
          <input
            type="text"
            value={password}
            className='outline-none py-1 px-3 flex-1 min-w-0'
            placeholder='generate password'
            readOnly
            ref = {passwordRef}
          />
          <button className='px-3 py-1 bg-blue-500 text-white hover:bg-blue-600 shrink-0'
          onClick={copyToClipboard}>
            Copy
          </button>
          </div>
          <div className='flex items-center justify-between mb-4'>
            <label className='text-white'>Length: {length}</label>
            <input
              type="range"
              min="4"
              max="32"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className='w-full'
            />
            <label className='text-white flex items-center'>
              <input
                type="checkbox"
                className="mr-2"
                checked={numberAllowed}
                onChange={(e) => setNumberAllowed(e.target.checked)}
              />
              Include Numbers
            </label>
            <label className='text-white flex items-center'>
              <input
                type="checkbox"
                className="mr-2 transform-scale-125"
                checked={symbolAllowed}
                onChange={(e) => setSymbolAllowed(e.target.checked)}
              />
              Include Symbols
            </label>
          </div>
          
        </div>
      </>
  )
}

export default App
