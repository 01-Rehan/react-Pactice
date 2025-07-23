import { useDispatch,useSelector } from "react-redux";
import { decreament, increament } from "../slice/CounterSlice";

export const Button = () =>{

    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count)
    console.log(count)

    const ClickIncreament = () => {
        dispatch( increament() );
    }
    const ClickDecreament = () => {
        dispatch( decreament() );
    }

    return (
        <h2 style={{textAlign:"center"}}>
        <button onClick={ClickIncreament}>UP</button>
        <span>{count}</span>
        <button onClick={ClickDecreament}>Down</button>
        </h2>
    )
}