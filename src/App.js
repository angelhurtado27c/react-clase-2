import img_0 from './img-reyes/rey_atanagildo.png'
import img_1 from './img-reyes/rey_sisebuto.png'
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

  let i_img = 0
  const cambiarImagen = e => {
    let img
    switch (i_img) {
      case 0:
        img = img_1
        i_img = 1
        break
      case 1:
        img = img_0
        i_img = 0
        break
    }
    e.target.src = img
  }
  
  return <>
    <h1>Eventos</h1>
    <img src={img_0} onClick={cambiarImagen} />
    <p ref={refValor} className="contador" onClick={incrementar}>0</p>
    <button onClick={convertir}>Incrementar</button>
    <br/>
    <input onChange={inputCambio}/>
  </>
}

export default App
