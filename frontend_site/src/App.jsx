import React, { Component } from "react"
import './App.css'

const carNoteItems = [
  {
      "id": 1,
      "note_title": "Abastecimento",
      "note_description": "30L Aditivada\r\nPosto Elefantinho Premium Nações",
      "note_km": 200360,
      "note_date": "2024-09-11T19:32:01Z",
      "completed": true
  },
  {
      "id": 2,
      "note_title": "Abastecimento",
      "note_description": "25L Aditivada\r\nPosto Elefantinho Premium Nações",
      "note_km": 200680,
      "note_date": "2024-09-25T21:53:00Z",
      "completed": false
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      carNoteList: carNoteItems,
    }
  }

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }

    return this.setState({ viewCompleted: false });
  }

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
          onClick={() => this.displayCompleted(true)}
        >
          Complete
        </span>
        <span
          className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
          onClick={() => this.displayCompleted(false)}
        >
          Incomplete
        </span>
      </div>
    )
  }

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.carNoteList.filter(
      (item) => item.completed == viewCompleted
    )

    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todo" : ""
          }`}
          title={item.note_description}
        >
          {item.note_title}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
          >
            Delete
          </button>
        </span>
      </li>
    ))
  }

  render() {
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">MyCarNote App</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                >
                  Add Car Note
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default App
