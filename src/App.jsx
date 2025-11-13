
import { useEffect, useState } from 'react'
import style from './App.module.css'

function App() {
  const [n1, setN1] = useState('')
  const [n2, setN2] = useState('')
  const [respSoma, setRespSoma] = useState('')
  const [error, setError] = useState('')
  const [respSub, setRespSub] =  useState('')
  const [respMult, setRespMult] =  useState('')
  const [respDiv, setRespDiv] = useState('')

  useEffect(() => {
    if (n1 !== '' && n2 !== '' && !isNaN(n1) && !isNaN(n2)) {
      setRespSoma(parseFloat(n1) + parseFloat(n2))
      setRespSub(parseFloat(n1) - parseFloat(n2))
      setRespMult(parseFloat(n1) * parseFloat(n2))
      setRespDiv(parseFloat(n1) / parseFloat(n2))
      setError('')
    } else if (n1 !== '' || n2 !== '') {
      setRespSoma('')
      setError('Digite um número válido para calcular')
    } else {
      setRespSoma('')
      setError('')
    }
  }, [n1, n2])

  return (

    <>
    <button className={style.btnClose} >X</button>
     <div className={style.wrapAll}>
      <h1 className={style.title}>Calculadora</h1>
      <p className={style.subTitulo}>Digite um numero para o calculo</p>
      <div className={style.wrap}>
        <input
          type="number"
          onChange={(e) => setN1(e.target.value)}
          value={n1}
          placeholder="Insira um número"
        />
        <input
          type="number"
          onChange={(e) => setN2(e.target.value)}
          value={n2}
          placeholder="Insira outro número"
        />
      </div>

      <div className={style.wrapResps}>
        <h2>Resultado da Soma =</h2><br />
        <h3>{respSoma}</h3>
      </div>

      <div className={style.wrapResps}>
        <h2>Resultado da Subtração =</h2><br />
        <h3>{respSub}</h3>
      </div>

      
      <div className={style.wrapResps}>
        <h2>Resultado da Multiplicação =</h2><br />
        <h3>{respMult}</h3>
      </div>

      
      <div className={style.wrapResps}>
        <h2>Resultado da Divisão =</h2><br />
        <h3>{respDiv}</h3>
      </div>

    

    </div>
    </>
   
  )
}

export default App
