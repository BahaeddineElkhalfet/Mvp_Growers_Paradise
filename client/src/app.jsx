import axios from "axios";
import React from "react";
import Home from "./components/Home.jsx";
import Lab from "./components/Lab.jsx";
import Kids from "./components/kids.jsx";
import Addkid from "./components/Addnewkid.jsx";
import Addlab from "./components/Addlab.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      lab: [],
      kids: [],
      id: "",
      onekid: {},
    };
    this.changeView = this.changeView.bind(this);
    this.delete = this.delete.bind(this);
    this.deletelab = this.deletelab.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
    this.handleupdate = this.handleupdate.bind(this);
    this.Updatelab = this.Updatelab.bind(this);
    this.labsubmit = this.labsubmit.bind(this);
  }
  // get data from database
  getting = () => {
    var p1 = axios.get("http://localhost:3000/allkids");
    var p2 = axios.get("http://localhost:3000/alllab");
    Promise.all([p1, p2])
      .then((data) => {
        this.setState({
          lab: data.pop().data,
          kids: data.shift().data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getting();
  }
  // change the view in the state
  changeView(view) {
    this.setState({
      view,
    });
  }
  // delete a kid from the list
  delete(id) {
    axios
      .delete(`http://localhost:3000/delete/${id}`)
      .then(() => console.log("deleted"))
      .catch(() => console.log("not deleted"));
    this.getting();
  }
  // delete a lab from the list lab
  deletelab(id) {
    axios
      .delete(`http://localhost:3000/deletelab/${id}`)
      .then(() => console.log("deleted"))
      .catch(() => console.log("not deleted"));
    this.getting();
  }

  Submit(event) {
    event.preventDefault();
  }
  //Add kid
  handlesubmit(kid) {
    console.log(kid);
    axios
      .post(`http://localhost:3000/postkids`, kid)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({
      kids: [kid, ...this.state.kids],
    });
  }
  //Add a lab
  labsubmit(lab) {
    console.log(lab);
    axios
      .post(`http://localhost:3000/postlab`, lab)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({
      lab: [lab, ...this.state.lab],
    });
  }

  handleupdate(id, kid) {
    console.log("hello", id, kid);
    axios
      .put(`/kid/${id}`, kid)
      .then((result) => {
        console.log("upadte", result);
      })
      .catch((err) => {
        console.log(err);
      });
    this.getting();
  }
  // update lab information
  Updatelab(id, lab) {
    console.log("hello", id, lab);
    axios
      .put(`/lab/${id}`, lab)
      .then((result) => {
        console.log("upadte", result);
      })
      .catch((err) => {
        console.log(err);
      });
    this.getting();
  }
  // render view
  renderView() {
    if (this.state.view === "home") {
      return <Home />;
    }
    if (this.state.view === "allLab") {
      return (
        <Lab
          lab={this.state.lab}
          dellab={this.deletelab}
          changeView={this.changeView}
        />
      );
    }
    if (this.state.view === "allKids") {
      return (
        <Kids
          kids={this.state.kids}
          del={this.delete}
          changeView={this.changeView}
          handleupdate={this.handleupdate}
          infokid={this.infokid}
        />
      );
    }
    if (this.state.view === "Addkid") {
      return (
        <Addkid
          handlesubmit={this.handlesubmit}
          handleupdate={this.handleupdate}
          changeView={this.changeView}
        />
      );
    }
    if (this.state.view === "alllab") {
      return (
        <Lab
          Updatelab={this.Updatelab}
          changeView={this.changeView}
          lab={this.state.lab}
          dellab={this.deletelab}
        />
      );
    }
    if (this.state.view === "addlab") {
      return (
        <Addlab
          changeView={this.changeView}
          labsubmit={this.labsubmit}
          Updatelab={this.Updatelab}
        />
      );
    }
  }

  render() {
    return (
      <div>
        {console.log("lab :", this.state.lab)}
        {console.log("kids :", this.state.kids)}
        <h1
          className="text-primary text-center"
          onClick={() => {
            this.changeView("home");
          }}
        >
          <span>Gro</span>wers Para<span>dise</span>
        </h1>
        <nav className="nav">
          <button
            className={
              this.state.view !== "home" ? "nav-unselected" : "nav-selected"
            }
            onClick={() => {
              this.changeView("home");
            }}
          >
            Home
          </button>
          <button
            className={
              this.state.view !== "Addkid" ? "nav-unselected" : "nav-selected"
            }
            onClick={() => {
              this.changeView("Addkid");
            }}
          >
            Add kid
          </button>
          <button
            className={
              this.state.view === "allKids" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("allKids")}
          >
            All Kids
          </button>
          <button
            className={
              this.state.view === "addlab" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("addlab")}
          >
            Add Lab
          </button>
          <button
            className={
              this.state.view === "alllab" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("alllab")}
          >
            All lab
          </button>
        </nav>
        {this.renderView()}
      </div>
    );
  }
}
export default App;
