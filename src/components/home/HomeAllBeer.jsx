import { Link } from 'react-router-dom';
import "./Home.css"


const HomeAllBeer = () => {


    return ( 

        <article className="homeallbeer">
            <Link to="/beerlist">
                <div>
                <img src="./all.png" alt="Beer" />
                </div>
            </Link>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ut odio fugiat nostrum reiciendis tempora? Ipsum reprehenderit ducimus iure tempore quia molestias nostrum sit itaque eaque fuga? Tempora, unde eum!</p>
        </article>
    );
}

export default HomeAllBeer;