import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setInc } from "../action";

function Infoper() {
    let disp = useDispatch() ;
    let val = useSelector( state => state.cont ) ;
    let ip  = useSelector( state => state.infoper ) ;
    return(
        <div>
            <h1>{val}</h1>
            <span className="tamlet">{ip}</span>
            <button onClick={ () => disp( setInc(1) )}>+1</button>
        </div>
    ) ;
}

export default Infoper ;