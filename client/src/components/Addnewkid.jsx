import React from "react";

export default class Addkid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kidfullname: "",
      kidsage: "",
      kiddescription: "",
      idlab: "",
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
            <span>Kid full name</span>
            <input
              type="text"
              name="kidfullname"
              value={this.state.kidfullname}
              onChange={this.onChange}
            />
          </label>
          <label for="field2">
            <span>kid age</span>
            <input
              type="text"
              name="kidsage"
              value={this.state.kidsage}
              onChange={this.onChange}
            />
          </label>
          <label for="field4">
            <span>Kid description</span>
            <textarea
              name="kiddescription"
              onkeyup="adjust_textarea(this)"
              required="true"
              value={this.state.kiddescription}
              onChange={this.onChange}
            ></textarea>
          </label>
          <label for="field3">
            <span>Lab Number</span>
            <input
              type="text"
              name="idlab"
              value={this.state.idlab}
              onChange={this.onChange}
            />
          </label>
          <label>
            <span> </span>
            <input
              type="submit"
              value="register"
              onClick={(e) => {
                e.preventDefault()
                this.props.handlesubmit(this.state);
                this.props.changeView("allKids");
              }}
            />
          </label>
        
        </form>
      </div>
    );
  }
}
