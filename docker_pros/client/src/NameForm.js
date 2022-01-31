import React from "react";
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'xxx'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        React.createElement(
            "p",
            null,
            'xx'
          )
      alert('Podano następujące imię: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Imię:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Wyślij" />
        </form>
      );
    }
  }

  export default NameForm