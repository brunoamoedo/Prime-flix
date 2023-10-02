import React from "react";
import ReactLoading from 'react-loading';
import { useState,useEffect } from "react";
import {api} from '../../service/api'
import { Link } from "react-router-dom";
import './style.css'
export default function Home(){
    const [filmes,setFilmes] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing",{
                params:{
                    api_key:'96d88efc37f9b20636f61e8789744f6c',
                    language:'pt-br',
                    page:2
                }
            })
            setFilmes(response.data.results.slice(0,10))
            setLoading(false)
            //console.log(response.data.results.slice(0,10))
        }
        loadFilmes()
    },[])
    if (loading)
    {
        return(
                <div className="loading">
                    <h2><ReactLoading type={'bubbles'} color={'#000000'} height={200} width={100}/></h2>
                </div>
        )
    }else
    {
       return(
        <div className="container">
          <div className="lista-filmes">
            {filmes.map((filme) => {
              return(
                <article key={filme.id}>
                  <strong>{filme.title}</strong>
                  <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                  <Link to={`/filme/${filme.id}`}>Acessar</Link>
                </article>
              )
            })}
          </div>
        </div>
      )
    }
}