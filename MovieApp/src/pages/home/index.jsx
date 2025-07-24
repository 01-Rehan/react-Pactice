import { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import { useDispatch,useSelector } from "react-redux";
import { GetMovies } from "../../api/getMovie";

const Home = () => {

    const dispatch = useDispatch();

    const {Movies} = useSelector(state => state.Movies)
    console.log(Movies.results)

    useEffect(()=>{
        dispatch(GetMovies());
    },[]);

    return (
        <>
        <Navbar />
        </>
    )
}
export default Home;