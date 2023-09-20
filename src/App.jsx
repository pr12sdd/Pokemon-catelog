
import { Link } from 'react-router-dom'
import './App.css'
import Pokedex from './Components/Pokedex/Pokedex'
import CustomRoutes from './Routes/CustomRoutes'

function App() {

  return (
    <div className='Pokedex'>
      <h1 className="heading">
        <Link to="/">Pokedex</Link>
      </h1>
      <CustomRoutes/>
    </div>
  )
}

export default App
