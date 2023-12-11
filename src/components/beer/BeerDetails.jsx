import { Link, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Beer.css"



const BeerDetails = () => {
    const [beerDetail, setBeerDetail] = useState([]);
    const { id } = useParams();
    const location = useLocation();
    console.log(location)



    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
            .then(res => res.json())
            .then(data => {
                const filteredBeer = data.filter((beer) => {
                    return beer._id === id;
                })
                setBeerDetail(filteredBeer);
            })
    }, [])




    return ( 

        <section className="details">
            {beerDetail.map((elt) => <div key={elt._id}>
                <img src={elt.image_url} alt="" />
                <h2>{elt.name}</h2>
                <p>First Brewed: {elt.first_brewed}</p>
                <p>Attenuation Lvl: {elt.attenuation_level}</p>
                <p>{elt.description}</p>
            </div>)}
            <Link to={location.state}>Back</Link>
            {/* <NavBar/> */}
        </section>


    );
}

export default BeerDetails;