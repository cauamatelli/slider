import { useState } from 'react'
import './App.css'
import mb04 from './assets/mb04-1.avif'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
      <header></header>
      <section className="produtos">
        
        {/* Card1 */}
        <div className="card">
          <img src={mb04} alt=""className="img-card" />
          <h2>Tênis de Basquete MB.04 Scooby Doo </h2>
          <p className="desc">  NITRO™: espuma avançada injetada com nitrogênio projetada para fornecer capacidade de resposta e amortecimento superiores em um conjunto leve
          PUMAGRIP: Composto de borracha de desempenho durável projetado para tração em todas as superfícies</p>
          <p className="classificacao">★★★★☆ (2893) </p>
          <p className="preco">R$ 1299,99</p>
          <p className="off">-31%</p>
        </div>
         {/* Card2 */}
         <div className="card">
          <img src={mb04} alt=""className="img-card" />
          <h2>Tênis de Basquete MB.04 Scooby Doo </h2>
          <p className="desc">  NITRO™: espuma avançada injetada com nitrogênio projetada para fornecer capacidade de resposta e amortecimento superiores em um conjunto leve
          PUMAGRIP: Composto de borracha de desempenho durável projetado para tração em todas as superfícies</p>
          <p className="classificacao">★★★★☆ (2893) </p>
          <p className="preco">R$ 1299,99</p>
          <p className="off">-31%</p>
        </div>
         {/* Card3 */}
         <div className="card">
          <img src={mb04} alt=""className="img-card" />
          <h2>Tênis de Basquete MB.04 Scooby Doo </h2>
          <p className="desc">  NITRO™: espuma avançada injetada com nitrogênio projetada para fornecer capacidade de resposta e amortecimento superiores em um conjunto leve
          PUMAGRIP: Composto de borracha de desempenho durável projetado para tração em todas as superfícies</p>
          <p className="classificacao">★★★★☆ (2893) </p>
          <p className="preco">R$ 1299,99</p>
          <p className="off">-31%</p>
        </div>
      </section>
      <section className="destaque"></section>
      <footer></footer>
     </main>
    </>
  )
}

export default App
