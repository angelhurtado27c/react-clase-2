import {useRef} from 'react'
import './App.css'

function App() {
  const cambio = 23.10
  const refValor = useRef()

  function incrementar(e) {
    const tag = e.target
    tag.innerText = Number(tag.innerText) + 1
  }

  function convertir() {
    refValor.current.innerText *= cambio
  }

  return <>
    <h1>Eventos</h1>
    <p ref={refValor} className="contador" onClick={incrementar}>0</p>
    <button onClick={convertir}>Incrementar</button>
  </>
}

export default App
