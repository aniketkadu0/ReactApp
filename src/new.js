import { useLocation } from "react-router-dom";
  
export default function Selection(){
    const { state } = useLocation();
    const { value } = state;
    return(
        <h1>{value} No. Selected </h1>
    );
}
