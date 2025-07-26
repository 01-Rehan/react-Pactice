import { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import { useDispatch,useSelector } from "react-redux";
import { GetMovies } from "../../api/getMovie";
import MovieCard from "../../components/card/MovieCard";
import { all } from "axios";
import './style.css'

const Home = () => {
    const dispatch = useDispatch();

    const {Movies} = useSelector(state => state.Movies)
    // console.log(Movies)

    useEffect(()=>{
        dispatch(GetMovies());
    },[]);

    return (
        <>
        <Navbar />
        
        <div className="container">
        {
            Movies?.length > 0 && Movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
        }
        </div>
        </>
    )
}
export default Home;