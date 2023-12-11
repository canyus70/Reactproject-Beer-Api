import { Link } from "react-router-dom";
import "./Beer.css"



const BeerItem = (props) => {
    return ( 
        <article className="itemwrapper">
            <div className="item">
            <img src={props.img} alt={props.name}/>
            <p>{props.name}</p>
            <p>{props.spruch}</p>
            <p>{props.beitrag}</p>
            <Link to={`/beer/${props.id}`} state="/beerlist">Details</Link>
            </div>
        </article>
    );
}

export default BeerItem;