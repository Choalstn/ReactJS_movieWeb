import { useEffect, useState} from "react";
import Movie from "../components/Movie";
import style from "./Home.module.css"

function Home() {
    const [loading, setLoading] = useState(true); 
    const [movies, setMovies] = useState([]);
    
    const getMovies = async() => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`);
        const json = await response.json();
        
        setMovies(json.data.movies);
        setLoading(false);
    };
    
    useEffect(() => {getMovies()}, []);
    
    return ( 
    <div className={style.container}>
        {loading ? (
            <div className={style.loader}>
                <h1>Loading...</h1> 
            </div>
        )
        : (
            <>
            <div className={style.logo}>MINFLIX</div>


            <div className={style.entireMovie}>
            <div className={style.movies}>
                {movies.map((movie) => (
                <Movie key={movie.id} title={movie.title} coverImg={movie.medium_cover_image} summary={movie.summary} genres={movie.genres} id = {movie.id}/>
                ))}
            </div>
            </div>
                </>
            )}
            </div>
            );
            }

export default Home;