import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import style from "./Detail.module.css";

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
            {loading ? 
            <div className={style.loader}>
                <h1>Loading ...</h1> 
            </div>
            : (
                <>
                <div className={style.movie_detail}> <Link to="/" className={style.logo}> MINFLIX</Link></div>
                <div className={style.detail_left}>
                    <p className={style.title}> {movieDetail.title_long}</p>
                    <img src={movieDetail.medium_cover_image} className={style.img}/>
                </div>
                
                <div className={style.detail_right}>
                    <ul>
                        {movieDetail.genres.map((g) => (<li key={g}>{g}</li>))}
                    </ul>
                    <p className={style.detail_description}> {movieDetail.description_full}</p>
                </div>
               
            </>
            )}
        </div>
    )
}

export default Detail;