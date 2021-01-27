import React from "react";
export class AddMultipleDivOnClick extends React.Component {
  constructor() {
    super();
    this.state = {
      rowList: [true],
    };
  }

  add() {
    let rowList = [...this.state.rowList];
    rowList.push(true);
    this.setState({ rowList });
  }

  remove(i) {
    let rowList = [...this.state.rowList];
    rowList.splice(i, 1);
    this.setState({ rowList });
  }

  render() {
    let { rowList } = this.state;
    return (
      <div className="intent" id="intent1" style={{ border: "1px solid #eee" }}>
        {rowList.map((x, i) => {
          return (
            <div className="form-group row" key={i}>
              <label htmlFor="intent" className="col-sm-1 col-form-label">
                Intent
              </label>
              <div className="col-sm-5">
                <input
                  type="text"
                  className="form-control"
                  name="indent[]"
                  placeholder="Enter intent"
                />
                <button onClick={() => this.remove(i)}>Remove</button>
              </div>
            </div>
          );
        })}
        <button onClick={() => this.add()}>Add New</button>
      </div>
    );
  }
}

// ReactDOM.render(<AddMultipleDivOnClick />, document.getElementById("root"));
