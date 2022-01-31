import './App.css';

function Mainbar() {
  return (
    <div className="mainbar"> 
        <div className="lmain">
            <a href="/"> </a>
        </div>
        <div className="rmain">
            <div className="btn-group">
                <a href="/register"> <button type="button" className="btn btn-light" >Zarejestruj 
                </button></a>
            </div>
            <div className="btn-group">
                <a href="/login"> <button type="button" className="btn btn-light" > Zaloguj
                </button></a>
            </div>
            <div className="btn-group">
                <a href="/"> <button type="button" className="btn btn-light" > Strona główna
                </button></a>
            </div>
            
        </div>
    </div>
  );
}

export default Mainbar;  