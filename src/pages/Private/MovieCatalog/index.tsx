import { AxiosRequestConfig } from "axios";
import MovieFilter, { MovieFilterData } from "components/MovieFilter";
import Pagination from "components/Pagination";
import ReviewCard from "components/ReviewCard";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/requests";
import CardLoader from "./CardLoader";

import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: MovieFilterData;
}


const MovieCatalog = () => {

  const [page, setPage] = useState<SpringPage<Movie>>();
  const [isLoading, setIsLoading] = useState(false);

  const [ controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>( 
    {
      activePage: 0,
      filterData : { name: "", genre: null}
    }  
  );

  const handlePageChange = ( pageNumber: number ) => {
    setControlComponentsData({activePage: pageNumber, filterData: controlComponentsData.filterData });
  }

  const handleSubmitFilter = (data: MovieFilterData) => {
    setControlComponentsData({activePage: 0, filterData: data});
  }


  const getMovies = useCallback(() => {

    const params : AxiosRequestConfig =  { 
      method: 'GET',
      url: "/movies",
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        name: controlComponentsData.filterData.name,
        genreId: controlComponentsData.filterData.genre?.id
      },
      withCredentials: true
   }

   setIsLoading(true);
    requestBackend(params)
    .then( response => {
       setPage(response.data);
     })
    .finally( () => {
       setIsLoading(false);
    });
  }, [controlComponentsData] );

  useEffect( () => {
    getMovies();
  }, [getMovies])


  return (

    <div className="container">
        <div className="catalog-container">
            
            <MovieFilter onSubmitFilter={handleSubmitFilter} />

            <div className="row">
            { isLoading ? <CardLoader /> : (page?.content.map( movie => (
                  <div className="col-sm-6 col-lg-4 col-xl-3" key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                      <ReviewCard movie={movie} />
                    </Link>
                  </div>
              ))) }
            </div>

            <div className="row" >
              <Pagination
                  forcePage={page?.number}
                  pageCount={(page) ? page.totalPages : 0} 
                  range={3} 
                  onChange={handlePageChange}
              />
            </div>
        </div>
    </div>


  );
};

export default MovieCatalog;