import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/contact"><li>Contact Us</li></Link>
            <Link to ="/about/gyan"><li>Gyan</li></Link>
            <Link to ="/about/rama"><li>Rama</li></Link>
            <Link to ="/filter"><li>Filter</li></Link>
        </ul>
        </>
    )
}