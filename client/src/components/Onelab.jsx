import React from "react";

export default class Onelab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labname: this.props.e.labname,
      labnumber: this.props.e.labnumber,
      id:this.props.e.idlab,
      show: true,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const show = this.state.show;
    return (
      <div className="onelab">
        {show ? (
          <ul key={this.props.e.idlab}>
            <li>Name: {this.props.e.labname}</li>
            <li>Nbr: {this.props.e.labnumber}</li>
            <button
              className="btn btn-success btn-sm"
              onClick={() => {
                this.setState({
                  show: false,
                });
              }}
            >
              Update
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.props.dellab(this.props.e.idlab)}
            >
              Delete
            </button>
          </ul>
        ) : (
          <div>
            <input
              className="form-control form-control-sm"
              type="text"
              name="labname"
              value={this.state.labname}
              onChange={this.onChange}
              placeholder={this.props.e.labname}
            />
            <input
              className="form-control form-control-sm"
              type="text"
              name="labnumber"
              value={this.state.labnumber}
              onChange={this.onChange}
              placeholder={this.props.e.labnumber}
            />
        
            <button
              className="btn btn-success btn-sm"
              onClick={() => {
                this.props.Updatelab(this.state.id,this.state)
                console.log(this.state);
                this.setState({
                  show: true,
                });
              }}
            >
              Confirm
            </button>
          </div>
        )}
      </div>
    );
  }
}
