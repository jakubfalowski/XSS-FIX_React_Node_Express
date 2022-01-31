import React, {useEffect, useState} from "react";

const test = <b> aaa </b>;
const test2 = '<b> aa </b>';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unqoute: test,
      quote: test2,
    };
  }
  
    render() {
      return (
        <div>
          <p> test {this.state.unqoute} razy {this.state.quote}</p>
          </div>
      );
    }
    
  }

  // const [test3, settest3] = useState('');
// const [test4, settest4] = useState('');


// const numbers = ['<b> aaa </b>', test, 3, 4, <b> test </b>];


// function Example(){
//   const submitUsers = () => {
//     alert("xd");
//   };
//     return(
//     <div>
//         <button onClick={settest3(<b> eee </b>)} > aaa </button> 
//         <button onClick={settest4('<b> eee </b>')} > aaa </button>
//     </div>
//     ); 
// }

  
  export default Example