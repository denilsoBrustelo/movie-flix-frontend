import { Movie } from "types/movie";
import './styles.css';


type Props = {
  movie: Movie;
}


const ReviewCard = ( {movie} : Props) => {

  return (

    <div className="base-card  movie-card-container">
        <img className="movie-card-image" src={movie.imgUrl} alt="MovieImage" />
        <div className="movie-card-content">
          <h1> {movie.title} </h1>
          <h2> {movie.year} </h2>
          <p> {movie.subTitle} </p>
        </div>
    </div>
  );
};

export default ReviewCard;