import { useCallback, useEffect, useState } from "react";
import { Movie } from "types/movie";
import { requestBackend } from "util/requests";

import './styles.css';

type Props = {
    movieId: string;
   
 }

const MovieDetailsCard = ( { movieId } : Props  ) => {

  const [movie, setMovie] = useState<Movie>();

  const getMovie = useCallback(() => {

      requestBackend({ url: `/movies/${movieId}`, withCredentials: true })
      .then(
         (response) => {
            setMovie(response.data)
         }  
         
       );
  }, [movieId]);


  useEffect(() => {
    getMovie()
  }, [getMovie]);


   return (
          <div className="base-card movie-details-card-content">
            <img className="movie-details-card-image" src={movie?.imgUrl} alt="MovieImage" />
            <div className="movie-details-card-right">
              <h1> {movie?.title} </h1>
              <h2> {movie?.year} </h2>
              <p> {movie?.subTitle} </p>
              <div className="movie-details-card-sinopse-container">
                {movie?.synopsis}
              </div>
            </div>
         </div>
    );
  };
  
  export default MovieDetailsCard;