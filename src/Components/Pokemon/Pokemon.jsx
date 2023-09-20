import { Link } from "react-router-dom";
import "./Pokemon.css"
function Pokemon({name,image,id}){
  return <div className="Pokemon"> 
    <Link to={`/prakash/${id}`}>
    <div className="Pokemon-name">{name}</div>
    <div><img className="Pokemon-img" src={image}/></div>
    </Link>
  </div>
}
export default Pokemon;