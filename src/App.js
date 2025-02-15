import img_0 from './img-reyes/rey_atanagildo.png'
import img_1 from './img-reyes/rey_sisebuto.png'
import {useRef} from 'react'
import './App.css'

function App() {
  const refValor = useRef()
  let i_img = 0

  const incrementar = e => {
    const tag = e.target
    let i = Number(tag.innerText) + 1
    if (i > 9) {
      i = 0
      tag.classList.remove('rojo')
    } else if (i > 7)
      tag.classList.add('rojo')
    // console.dir(tag) // Muestra las propiedades del elemento
    tag.innerText = i
  }

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
    <button>Incrementar</button>
    <br/>
    <input/>
  </>
}

export default App
