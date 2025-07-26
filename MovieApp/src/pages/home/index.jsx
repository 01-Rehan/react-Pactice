import { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import { useDispatch,useSelector } from "react-redux";
import { GetMovies } from "../../api/getMovie";
import MovieCard from "../../components/card/MovieCard";
import { all } from "axios";
import './style.css'
import { getMoviesBySearch } from "../../utils/getMoviesBySearch";

const Home = () => {
    const dispatch = useDispatch();

    const {Movies , SearchValue } = useSelector(state => state.Movies)
    // console.log(Movies)

    const filterBySearchName = getMoviesBySearch(Movies,SearchValue);


    useEffect(()=>{
        dispatch(GetMovies());
    },[]);

    return (
        <>
        <Navbar />
        
        <div className="container">
        {
            filterBySearchName?.length > 0 && filterBySearchName.map(movie => <MovieCard key={movie.id} movie={movie}/>)
        }
        </div>
        </>
    )
}
export default Home;