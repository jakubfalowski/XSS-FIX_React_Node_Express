import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import Cookies from "js-cookie";
import Axios from 'axios';

import{
BrowserRouter as Router,
Routes,
Route,
useParams,
} from "react-router-dom"

import OfertAdd from "./Ofert/OfertAdd"
import CategoriesAdd from "./Category/CategoriesAdd"
import Hello from "./Hello";
import Register from "./Register";
import Login from "./Login";
import Error from "./Error";
import CategoryOption from "./Category/CategoryOption";
import OfertSelect from "./Ofert/OfertSelect";
import Navbar from "./Navbar";
import NavbarLogged from "./NavbarLogged";
import CategoriesSelect from "./Category/CategoriesSelect";
// import OfertSelectByID from "./Ofert/OfertSelectByID";
import Logout from "./Logout";
import OfertSelectFromCategory from "./Category/OfertSelectFromCategory";

function App(){

    // const [auth, setAuth] = React.useState(false);
    
    
    // const readCookie = () => {
    //   const user = ;
    //   if(user){
        
    //     setAuth(true);
    //   }
    // }

    // React.useEffect(() => {
    //   readCookie();
    // },[])

    return(

      <Router>
        {Cookies.get("userId") ? <div><NavbarLogged /> <Hello login="Jesteś zalogowany" /></div> : <div><Navbar /><Hello login="Zaloguj się by korzystać w pełni z naszego serwisu" /></div>}
        <Routes>
          <Route exact path='/' element={<div className="container"></div>} />
          <Route path={'/login'} element={Cookies.get("userId") ? <div className="container"><Error /></div> : <div className="container"><Login /></div> } />
          <Route path={'/register'} element={Cookies.get("userId") ? <div className="container"><Error /></div> : <div className="container"><Register /></div> } />
          <Route path={'/logout'} element={Cookies.get("userId") ? <div className="container"><Logout /></div>: <div className="container"><Error /></div> } />
          <Route path={'/Ofert'} element={<div className="container"><OfertSelect /></div>} />
          <Route path={'/OfertAdd'} element={ Cookies.get("userId") ? <div className="container"><OfertAdd /></div> : <div className="container"><Error /></div>} />
          <Route path={'/OfertInfo'} element={<div className="container"><CategoryOption /></div> } />
          <Route path={'/Category'} element={Cookies.get("userId") ? <div className="container"><CategoriesAdd /><CategoriesSelect /><OfertSelectFromCategory /></div> : <div className="container"><CategoriesSelect /><OfertSelectFromCategory /></div> } />
          <Route path='/test' > </Route> 
          <Route path='*' element={<Error /> } />
        </Routes>
        </Router>);
          
      
  }
  
ReactDOM.render(<App/>,document.getElementById('root'));