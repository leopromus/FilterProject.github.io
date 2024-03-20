/* import React, { useState, useEffect } from "react";
import meal from "./meal.js";
 */
const App = () => {
  const [ValueInit, IncreasedVal] = useState(10);
  const [bgColor, bgChange] = useState("maroon");
  const [bgText, textChange] = useState("Project 01");

  const Increment = () => {
    IncreasedVal(ValueInit - 1);
  };

  const ChangeBg = () => {
    bgChange("black");
    textChange("Project 01 Completed 😃");
  };

  const normaInfo = () => {
    bgChange("maroon");
    textChange("Project 01");
  };

  const [textarea, setTextarea] = useState("");
  const [Predata, setPreData] = useState("");

  const clearData = () => {
    setTextarea("");
  };

  const handleData = (e) => {
    setTextarea(e.target.value);
  };

  const PreviewData = () => {
    setPreData(textarea);
  };

  const [Newnum, setIncresed] = useState(0);

  const IncrementNum = () => {
    setIncresed(Newnum + 1);
  };

  const decrementNum = () => {
    if (Newnum > 0) {
      setIncresed(Newnum - 1);
    } else {
      alert("Minimum limit reached");
    }
  };

  const [newTime, setTime] = useState(new Date().toLocaleTimeString());

  const changeTime = () => {
    let chTime = new Date().toLocaleTimeString();
    setTime(chTime);
  };

  useEffect(() => {
    const interval = setInterval(changeTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const [newbgColor, setColor] = useState({
    color: "red",
    backgroundColor: "black",
  });

  const [TextMode, setTextMode] = useState("Dark Mode");

  const changeMode = () => {
    if (newbgColor.backgroundColor === "red") {
      setColor({ color: "red", backgroundColor: "black" });
      setTextMode("Dark Mode");
    } else {
      setColor({ color: "black", backgroundColor: "red" });
      setTextMode("Red Mode");
    }
  };

  const [newName, setnewName] = useState("");
  const [newMobile, setnewMobile] = useState("");
  const [newMail, setnewMail] = useState("");
  const [newPass, setnewPass] = useState("");
  const [addTxt, setTxt] = useState([]);

  const nameChange = (e) => {
    setnewName(e.target.value);
  };

  const MobileChange = (e) => {
    setnewMobile(e.target.value);
  };

  const mailChange = (e) => {
    setnewMail(e.target.value);
  };

  const passChange = (e) => {
    setnewPass(e.target.value);
  };

  const submitData = (e) => {
    e.preventDefault();
    if (newName && newMobile && newMail && newPass) {
      const newDataEntry = {
        names: newName,
        mob: newMobile,
        mail: newMail,
        pass: newPass,
      };
      setTxt([...addTxt, newDataEntry]);
      setnewMail("");
      setnewPass("");
      setnewName("");
      setnewMobile("");
    } else {
      alert("All the fields must be filled");
    }
  };

  return (
    <div>
      <h1 className="text-center my-5 bg-info py-5">Practical Hook Concepts</h1>

      {/* Project 01 */}
      <div className="row d-flex justify-content-center align-items-center flex-column">
        <p className="w-50 fs-6">{ValueInit}</p>
        <button className="btn btn-warning w-50" onClick={Increment}>
          Click Me
        </button>
        <div className="w-50" style={{ backgroundColor: bgColor }}>
          <p className="w-50 fs-6">{bgText}</p>
          <button
            className="btn btn-warning w-50"
            onClick={ChangeBg}
            onDoubleClick={normaInfo}
          >
            Click Me
          </button>
        </div>
      </div>

      {/* Project 02 */}
      <div className="container my-5">
        <textarea
          rows={5}
          cols={5}
          className=" w-100"
          value={textarea}
          onChange={handleData}
        >
          hello
        </textarea>
        <button className="btn btn-dark" onClick={clearData}>
          Clear
        </button>
        <p>{Predata}</p>
        <button className="btn btn-success" onClick={PreviewData}>
          Preview
        </button>
      </div>
      <p className="text-center text-danger">{textarea.length} characters </p>
      <p className="text-center text-info">{textarea.split(" ").length} words</p>

      {/* Project 03 */}
      <div className="container bg-info d-flex flex-column justify-content-center align-items-center">
        <p className="text-center fs-20">{Newnum}</p>
        <button className="btn btn-secondary" onClick={IncrementNum}>
          Increment
        </button>
        <button className="btn btn-danger" onClick={decrementNum}>
          Decrement
        </button>
      </div>

      {/* Project 04 */}
      <div className="container my-5 d-flex flex-column align-items-center">
        <h3 className="text-center">My Time Now</h3>
        <p className="text-center">{newTime}</p>
      </div>

      {/* Project 05 */}
      <div
        className="container py-5 px-5 my-5 d-flex flex-column align-items-center"
        style={newbgColor}
      >
        <div className="card text-bg-primary mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <button className="btn btn-outline-dark" onClick={changeMode}>
          {TextMode}
        </button>
      </div>

      {/* Project 06 */}
      <div className="container py-5 px-2 my-5 d-flex flex-column align-items-center bg-info">
        <form onSubmit={submitData}>
          <h1 className="text-center text-decoration-underline">Login Form</h1>
          <div className="input-group mb-3">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputGroup1"
                placeholder="Myname"
                value={newName}
                onChange={nameChange}
              />
              <label htmlFor="floatingInputGroup1">Names</label>
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputGroup1"
                placeholder="MyMobile"
                value={newMobile}
                onChange={MobileChange}
              />
              <label htmlFor="floatingInputGroup1">Mobile</label>
            </div>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={newMail}
              onChange={mailChange}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={newPass}
              onChange={passChange}
            />
            <label htmlFor="floatingPassword">Password</label>
            <button className="btn btn-outline-dark mt-3" type="submit">
              Submit
            </button>
          </div>
        </form>

        <table className="table mt-5 w-50">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email Address</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {addTxt.map((val, index) => (
              <tr key={index}>
                <td>{val.names}</td>
                <td>{val.mob}</td>
                <td>{val.mail}</td>
                <td>{val.pass}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
