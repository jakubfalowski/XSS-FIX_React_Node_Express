import React from 'react';
class Hello extends React.Component {
  render() {
      return(
      <div>
        <hr />
        <h2> {this.props.login} ! </h2>
      </div>
      );
    }
  
}


export default Hello