import React,{useState,useEffect} from "react"
import { Link } from "react-router-dom"
import {toast} from 'react-toastify'
import './style.css'
export default function Favoritos(){
const [filmes,setFilmes] = useState([])
useEffect(()=>{
    const minhaLista = localStorage.getItem("@primeflix")
    setFilmes(JSON.parse(minhaLista)||[])
},[])

function excluirFilme(id){
    let filtroFilmes = filmes.filter( (item) => {
      return (item.id !== id)
    })
    toast.success("Filme removido com sucesso")
    setFilmes(filtroFilmes);
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes) )
  }

return(
    <div className="meus-filmes">
        <h3>Meus filmes</h3>
        {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}
        <ul>
            {filmes.map((item)=>{
                return(
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <div>
                            <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                            <button onClick={()=>excluirFilme(item.id)}>Excluir</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
)
}