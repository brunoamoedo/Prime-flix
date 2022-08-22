import './style.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function Header()
{
  const navigation = useNavigate()
return (
  <header>
    <div className='menu'>
      <Link to={'/'}>
        <span>PrimeFlix</span>  
       </Link> 
    </div>
    <div className='meus_filmes'>
        <button onClick={()=>{
            navigation('/favoritos',{replace:true})
        }}>Meus filmes</button>
    </div>
  </header>
)
}