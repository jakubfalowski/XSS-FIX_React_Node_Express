import React, {useState,useEffect} from "react";
import '../App.css';
import Axios from 'axios';

function OfertSelect() {

  const [CategoryData, setCategoryData] = useState([]);

  useEffect(()=> {
    // var searchParam = new URLSearchParams(this.props.location.search).get("search");
    // console.log(searchParam) ,{ params: { search: searchParam } }
    Axios.get('http://localhost:4000/api/selectOferts').then((response)=>
    {
      setCategoryData(response.data);
    }
  )},[])
  

  return (
    <div className="page-content">
      <hr className="first"></hr>
      <h2> Nasze oferty </h2>
     
      {CategoryData.map((val) =>{
          // return <div className="oferts"> <a href="#top" key={val.title}>{val.title}<p key={val.description.toString()}><b>Opis produktu:</b><br></br> {val.description} </p><p key={val.price.toString()}><b>Cena:</b><br></br> {val.price} </p><p key={val.amount.toString()}><b>Ilość:</b><br></br> {val.amount} </p><p key={val.endDate.toString()}><b>Oferta trwa do:</b><br></br> {val.endDate} </p></a></div>  /* wersja zabezpieczona */
          // return <div><b><span dangerouslySetInnerHTML={{"__html": val.title}} /></b> <br />Opis produktu: <span dangerouslySetInnerHTML={{"__html": val.description}} /></div>  /* wersja niezabezpieczona, kod HTML w dangerouslySetInnerHTML */
           return <div><p><a href={val.title}>Nazwa użytkownika = {val.title}. Akapit przekierowuje do ścieżki twojego użytkownika </a></p></div>; /* wersja niezabezpieczona, kod javascript w atrybucie href znacznika a*/
        })}
      </div>)

}

export default OfertSelect;  