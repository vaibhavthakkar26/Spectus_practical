import { ENDPOINTURL } from "../utils/helper";
import { get } from "./webRequest";

export const getApiDataHandler = (story:string,page:number) =>{
    return get(`${ENDPOINTURL}/search_by_date?tags=${story}&page=${page}`)
};