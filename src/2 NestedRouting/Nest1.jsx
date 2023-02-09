import { Link } from "react-router-dom";

export default function Nest1(){
    return(
        <>
            <h4>This is the overview page of product</h4>
            <Link to="nest2">Detail</Link>
        </>
    )
}