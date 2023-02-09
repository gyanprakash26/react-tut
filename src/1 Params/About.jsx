import { useParams,useNavigate } from "react-router-dom";
function About() {
  // const Params = useParams();
  // const {name} = Params
  const navigate = useNavigate();
    let { namee } = useParams();
    return (
      <div>
        <h3>About : {namee}</h3>
        <button onClick={()=>navigate('/filter')}>Filter </button>
      </div>
    );
  }
  export default About;
  