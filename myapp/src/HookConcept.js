import React from 'react';

const HookConcept = () => {
    const [newEntry, setNewEntry] = useState({
        MyName: "",
        MyMobile: "",
        MyMail: "",
        myPass: "",
        
      });
      const inputData = (e) => {
        e.preventDefault();
    
        const names = e.target.name;
        const val = e.target.value;
    
        setNewEntry((PrevData) => {
          
        return{
           ...PrevData,[names]:val
        }
       
        
      });
      };
    
  return (
    <div>
    <div>
    <div className="container">
      <form>
        <h1 className="text-center text-decoration-underline">Login Form</h1>

        <div className="input-group mb-3">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputGroup1"
              placeholder="MyName"
              onChange={inputData}
              name="MyName"
              value={newEntry.MyName}
            />
            <label htmlFor="floatingInputGroup1">Names</label>
          </div>
        </div>

        <div className="input-group mb-3">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputGroup2"
              placeholder="MyMobile"
              onChange={inputData}
              name="MyMobile"
              value={newEntry.MyMobile}
            />
            <label htmlFor="floatingInputGroup2">Mobile</label>
          </div>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={inputData}
            name="MyMail"
            value={newEntry.MyMail}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={inputData}
            name="Password"
            value={newEntry.myPass}
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
          <tr>
            <td>{newEntry.MyName}</td>
            <td>{newEntry.MyMobile}</td>
            <td>{newEntry.MyMail}</td>
            <td>{newEntry.myPass}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="text-center bg-secondary">
      <MyComponent />
    </div>
  </div>

    </div>
  );
}

export default HookConcept;
