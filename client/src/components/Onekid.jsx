import React from "react";

export default class Onekid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kidfullname:this.props.e.kidfullname,
      kidsage: this.props.e.kidsage,
      kiddescription:this.props.e.kiddescription,
      show: true,
      id:this.props.e.idkid
    
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    console.log("upd", this.state.show);
    const show = this.state.show;
    return (
      <div className="onekid">
        <ul>
          {show ? (
            <li>Name: {this.props.e.kidfullname}</li>
          ) : (
            <input className="form-control form-control-sm"
              type="text"
              name="kidfullname"
              value={this.state.kidfullname}
              onChange={this.onChange}
              placeholder={this.props.e.kidfullname}
            />
          )}
          {show ? (
            <li>Age: {this.props.e.kidsage}</li>
          ) : (
            <input className="form-control form-control-sm"
              type="text"
              name="kidsage"
              value={this.state.kidsage}
              onChange={this.onChange}
              placeholder={this.props.e.kidsage}
            />
          )}
          {show ? (
            <li>Desc: {this.props.e.kiddescription}</li>
          ) : (
            <input className="form-control form-control-sm"
              type="text"
              name="kiddescription"
              value={this.state.kiddescription}
              onChange={this.onChange}
              placeholder={this.props.e.kiddescription}
            />
          )}{" "}<br></br>
          {show ? (
            <button
              className="btn btn-success btn-sm"
              onClick={() => {
                this.setState({
                  show: false,
                });
                // this.props.handleupdate(this.state);
                // console.log("upd", this.state.show);
              }}
            >
              Update
            </button>
          ) : (
            <button
              className="btn btn-success btn-sm"
              onClick={() => {
                this.props.handleupdate(this.state.id,this.state)
                console.log(this.state);
                this.setState({
                  show: true,
                });
              }}
            >
              Confirm
            </button>
          )}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.del(this.props.e.idkid)}
          >
            Delete
          </button>
        </ul>
        <br></br>
        <br></br>
      </div>
    );
  }
}
