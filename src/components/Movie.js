import PropTypes from "prop-types"; 
import {Link} from "react-router-dom";

//<a> 태그 대신 Link를 사용하는 이유 : 결과는 동일하지만, <a>태그는 페이지 전체를 재로딩함

function Movie({title, coverImg, summary, genres, id}) {
     return (
        <div>
        <img src={coverImg} alt={title}/>
        <h2> 
          <Link to={`/movie/${id}`}>{title} </Link>    
        </h2>
        <p> {summary}  </p>
        <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
        </ul>
        </div>
     );
}

Movie.propTypes = {
  coverImg : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired,
  id : PropTypes.number.isRequired

}

export default Movie;