import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const HomeRandomBeer = () => {

    const [randomId, setRandomId] = useState('')

    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(response => response.json())
            .then(data => {
                setRandomId(data._id)
            })
    }, [])

    return ( 
        
        <article className="homerandombeer">
            <Link to={`/beer/${randomId}`} state="/">
            <div>
                <img src="./ran.png" alt="Beer" />
                </div>
            </Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iste laboriosam nulla molestiae totam tenetur doloribus minima error asperiores. Quis rem iusto amet hic numquam sunt sit, in eos quibusdam!</p>
        </article>

    );
}

export default HomeRandomBeer;