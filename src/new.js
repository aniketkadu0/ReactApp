import { useLocation } from "react-router-dom";
  
export default function Selection(){
    const location  = useLocation();
    return(
        <h1>Room no. {location.state} is Selected </h1>
    );
}
