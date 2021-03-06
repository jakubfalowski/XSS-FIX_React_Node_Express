import React, {useState,useEffect} from "react";
import '../App.css';
import Axios from 'axios';
import { useLocation } from "react-router-dom";
import queryString from 'query-string'

function OfertSelectFromCategory() {

  const {search} = useLocation()
  const searchParams = new URLSearchParams(search)
  const query = searchParams.get('searchID');
  const [ID, setID] = useState("");

  const [CategoryData, setCategoryData] = useState([]);

  const selectWithCategories = () => {
    Axios.get("http://localhost:3000/category/:search", {
      searchID: {query},})
    .then((response) =>
    {
      setCategoryData(response.data);
    });
};

  const insertID = () => {
    Axios.post("http://localhost:4000/api/selectOfertsByID", {
      searchID: {query},
    }).then(() => {
      alert("successful insert");
    });
    return false;
};

  return (
    <div className="page-content">
      <hr className="first"></hr>
     
      {(query) ? <h2> Obecna kategoria: {query} </h2> : <h2> Prosze wybrać kategorie </h2>} 
      <button onClick={insertID} > Wyświetl </button> 
      </div>)

}

export default OfertSelectFromCategory;  