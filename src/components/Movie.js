import PropTypes from "prop-types"; 
import {Link} from "react-router-dom";
import style from "./Movie.module.css";
//<a> 태그 대신 Link를 사용하는 이유 : 결과는 동일하지만, <a>태그는 페이지 전체를 재로딩함

function Movie({title, coverImg, summary, genres, id}) {
     return (
        <div className={style.container}>
          
        <div className={style.front}>
        <img src={coverImg} alt={title} className={style.imgsize}/>
        </div>

        <div className={style.back}>
          <div>
          <Link to={`/movie/${id}`} className={style.backLink}>
            <h2> {title} </h2>
          </Link>
            </div>
        </div>

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