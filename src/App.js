import {useRef} from 'react'
import './App.css'

function App() {
  const cambio = 23.10
  const refValor = useRef()

  const incrementar = e => {
    const tag = e.target
    tag.innerText = Number(tag.innerText) + 1
  }

  const convertir = () => {
    refValor.current.innerText *= cambio
  }

  const inputCambio = e => {
      refValor.current.innerText = e.target.value
  }

  return <>
    <h1>Eventos</h1>
    <p ref={refValor} className="contador" onClick={incrementar}>0</p>
    <button onClick={convertir}>Incrementar</button>
    <br/>
    <input onChange={inputCambio}/>
  </>
}

export default App
