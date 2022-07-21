import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState("");

    const {id}= useParams();

    const getMovie = async() => {
        const json = await(await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json());
        console.log(json.data.movie);

        setMovieDetail(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {getMovie()}, []);

    console.log(id);

    return (
        <div>
            {loading ? <h1>Loading ...</h1> 
            : <div>
                <img src={movieDetail.medium_cover_image} />
                <p>  {movieDetail.title_long} </p>
                <p> {movieDetail.description_full}</p>

            </div>}
        </div>
    )
}

export default Detail;