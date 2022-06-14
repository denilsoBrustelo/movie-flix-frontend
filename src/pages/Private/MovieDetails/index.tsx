import { AxiosRequestConfig } from "axios";
import ReviewForm from "components/ReviewForm";
import ReviewListing from "components/ReviewListing";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Review } from "types/review";
import { hasAnyRoles } from "util/auth";
import { requestBackend } from "util/requests";
import MovieDetailsCard from "./MovieDetailsCard";

import './styles.css';

type urlParams = {
  movieId: string;
}
const MovieDetails = () => {

  const { movieId } = useParams<urlParams>();
  const [ reviews, setReviews] = useState<Review[]>([]);

  const getMovieReviews = useCallback(() => {
      
      const config: AxiosRequestConfig = {
        method: 'GET',
        url: `movies/${movieId}/reviews`,
        withCredentials: true,
      };

      requestBackend(config).then( (response) => {
        setReviews(response.data);
      });

  }, [movieId]);

  useEffect(() => {
    getMovieReviews()
  }, [getMovieReviews]);


  const handleInsertReview = (review: Review) => {
     const clone = [...reviews];
     clone.push(review);
     setReviews(clone);
  }

   return (
      <div className="movie-details-container">

          <MovieDetailsCard movieId={movieId}  />
          
         { hasAnyRoles(['ROLE_MEMBER']) && (
            <ReviewForm  movieId={movieId} onInsertReview= { handleInsertReview } />

         )}
          
           <ReviewListing reviews={reviews}  />
      </div>
    );
  };
  
  export default MovieDetails;