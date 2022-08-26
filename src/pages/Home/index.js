
import {Link} from "react-router-dom";
import Cards from "../../components/card"
import Searh from "../../components/searh";

const Home=(props)=> {
    return (
      <>
      
        <Cards products={props.products}/>
      
      </>
    );
  }

  export default Home