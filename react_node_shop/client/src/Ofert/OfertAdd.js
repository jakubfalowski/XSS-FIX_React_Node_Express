import React, {useState} from "react";
import '../App.css';
import Axios from 'axios';

function OfertAdd() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [datetime, setDatetime] = useState("");

  const submitAddOfert = () => {
      Axios.post("http://localhost:4000/api/addOferts", {
        title: title,
        description: description,
        price: price,
        amount: amount,
        datetime: datetime,
      }).then(() => {
        alert("successful insert ofert");
      });
  };
  return (
    <div className="page-content">
      <hr className="first"></hr>
      <h2> Dodawanie oferty </h2>
          <section className="row"> <p> Wpisz tytuł </p> <input type="text" name = "title" onChange={(e) => { setTitle(e.target.value);
            }} 
            ></input> </section>
          <section className="row"> <p> Wpisz opis </p> <textarea rows="11"  name="description" onChange={(e) => { setDescription(e.target.value);
            }}></textarea> </section>
          <section className="row"> <p> Wpisz cene </p> <input id="money" type="number" name="price"  title="Podaj walute" placeholder="wpisz liczbę groszy" onChange={(e) => { setPrice(e.target.value);
            }} required></input></section>
          <section className="row"> <p> Wpisz liczbe produktów </p> <input type="number" name="amount" onChange={(e) => { setAmount(e.target.value);
            }}></input> </section>
          <section className="row"> <p> Wybierz date zakończenia </p> <input type="date" name="datetime" onChange={(e) => { setDatetime(e.target.value);
            }}></input></section>
          
          <button onClick={submitAddOfert}>KLIKNIJ</button>
          
      </div>)

}

export default OfertAdd;  