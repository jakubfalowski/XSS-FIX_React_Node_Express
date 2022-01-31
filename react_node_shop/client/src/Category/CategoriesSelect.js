import React, {useEffect, useState} from "react";
import './../App.css';
import Axios from 'axios';

function CategoriesSelect() {

    const [movieCategoriesList, setCategoryList] = useState([]);
    const [searchID, setID] = useState("");
  
    useEffect(()=> {
    Axios.get('http://localhost:4000/api/selectCategories').then((response)=>
    {
      setCategoryList(response.data);
    }
  )},[])

  const submitID = () => {
    Axios.post("http://localhost:4000/api/selectCategoriesByID", {
      searchID: searchID,
    }).then(() => {
      alert("successful insert ofert");
    });
};

  return (
    <div>
        <hr></hr>
<h2>Wybierz kategorie</h2><form>
        {movieCategoriesList.map((val) =>{
            return (<div>
                <input type="radio" id={val.name}
                 name="searchID" key={val.name} value={val.id} onChange={(e) => { setID(e.target.value);
                 }}/>
                <b>{val.name}</b><p>{val.description}</p>
            </div>)

        })} <button type="submit" onClick={submitID}>Wybierz</button></form>
  </div>)
}

export default CategoriesSelect