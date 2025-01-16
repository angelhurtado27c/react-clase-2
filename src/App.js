import './App.css'

function App() {
  function incrementar(e) {
    const tag = e.target
    tag.innerText = Number(tag.innerText) + 1
  }

  return <>
    <h1>Eventos</h1>
    <p className="contador" onClick={incrementar}>0</p>
    <button>Incrementar</button>
  </>
}

export default App
