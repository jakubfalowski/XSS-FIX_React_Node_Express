import React from 'react';

class CategoryOption extends React.Component {
  render() {
      return(
    <div>
      <hr></hr>
        <h2> Kategoria: <a href="#top" id="category"> Gry planszowe </a></h2><h4 id="title"> NOGI STONOGI Gra planszowa rodzinna dla dzieci </h4>
        <div className="price">
            <p> 28.90 zł </p>
			            <span> Użytkownik: </span><span> x </span>
            <p> Wybierz liczbę sztuk: </p>
            <form action="summary.php" method="post">
                <input type="number" name="amount" value="1" required="" /><br/>
                <input type="submit" />
            </form>
        </div>
    </div>
    
    
    
    
    );
  }
}


export default CategoryOption