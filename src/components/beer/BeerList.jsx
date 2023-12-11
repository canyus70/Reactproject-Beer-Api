import BeerItem from "./BeerItem";
import React, { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar"

const BeerList = () => {
    const [allBeer, setAllBeer] = useState([])

    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => response.json())
            .then(data => setAllBeer(data))
    }, [])



    return (  
        
        <section className="listlayout">
            {allBeer.map((beer) => 
            <BeerItem
            id={beer._id}
            img={beer.image_url}
            name={beer.name}
            spruch={beer.tagline}
            beitrag={beer.contributed_by}
            />)}
            <NavBar/>
        </section>
    )
};

export default BeerList;