import React from "react";

export default class Addlab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labname: "",
      labnumber: "",
      kids_idkid: "",
      
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="addkid">
        <form class="form-style-4">
          <label for="field1">
            <span>Lab name</span>
            <input
              type="text"
              name="labname"
              value={this.state.labname}
              onChange={this.onChange}
            />
          </label>
          <label for="field2">
            <span>Lab number</span>
            <input
              type="text"
              name="labnumber"
              value={this.state.labnumber}
              onChange={this.onChange}
            />
          </label>
          <label for="field4">
            <span>Students</span>
            <textarea
              name="kids_idkid"
              onkeyup="adjust_textarea(this)"
              required="true"
              value={this.state.kids_idkid}
              onChange={this.onChange}
            ></textarea>
          </label>
        
          <label>
            <span> </span>
            <input
              type="submit"
              value="register"
              onClick={(e) => {
                e.preventDefault()
                this.props.labsubmit(this.state);
                this.props.changeView("alllab");
              }}
            />
          </label>
        
        </form>
      </div>
    );
  }
}
