import styles from "../styles/formulario.module.css";
import Cartao from "../components/Cartao";
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";


export default function Formulario() {
  const[qtdePortas, setQtdePortas] = useState(0)
  const[comPresente, setComPresente] = useState(0)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor= "#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text= "Quantidade portas?" 
          value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)}/>
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text= "Porta com Presente?" 
          value={comPresente} onChange={presente => setComPresente(presente)}/>
        </Cartao>
        
        <Cartao bgcolor="#28a085">
        <Link href={`/jogo/${qtdePortas}/${comPresente}`} passHref>
          <h2 className= {styles.link} >Iniciar</h2>
        </Link>
        </Cartao>
      </div>
    </div>
  )
}
