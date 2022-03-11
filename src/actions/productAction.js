import { FETCHING_PRODUCT } from "../constants";

export const getProdctList=()=>(dispatch)=>{
    console.log("called");
    return fetch(`https://double-chabi-server.herokuapp.com/getProducts`)
    .then((res) => res.json())
    .then((json) => {
        dispatch({type: FETCHING_PRODUCT, payload:json.list});
    });
}
