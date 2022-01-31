// const kategorie = ['Dom','Rodzina','Elektronika','Nieruchomości','Obuwie','Odzież'];
// const lista_kategorii = kategorie.map((kategorie, i) => <li key={"kategorie_" + i}>{kategorie}</li>);
// function Categories() {
//   return (
//     <div>
//       <hr className="first"></hr>
//       <h2> Kategorie </h2>
//       <a href="."> <ul className="row">
//       {lista_kategorii}
//       </ul>
//       </a>
//     </div>
//   );
// }

// export default Categories;  

import React, {useState} from "react";
import './../App.css';
import Axios from 'axios';

function CategoriesAdd() {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submitReviewCategories = () => {
      Axios.post("http://localhost:4000/api/addCategories", {
        name: name,
        description: description,
      }).then(() => {
        alert("successful insert category");
      });
  };
  return (
    <div className="page-content">
      <hr></hr>
        <h4> Wpisz nowe kategorie:</h4>
        <form method="post">
            <input type="text" placeholder="nazwa kategorii" 
            name="name"
            onChange={(e) => { setName(e.target.value);
            }}
            ></input><br></br>

            <input type="text" placeholder="opis" 
            name="description"
            onChange={(e) => 
              { setDescription(e.target.value);
            }}
            ></input><br></br>
        </form>
            <button onClick={submitReviewCategories}> KLIKNIJ </button>
            
        <br></br>
    </div>
  );
}

export default CategoriesAdd