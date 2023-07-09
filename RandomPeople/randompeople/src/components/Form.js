import { useState } from "react";
function Form({ props }) {
  const [peopleNumber, setPeopleNumber] = useState(0);

  const handleChange = (e) => {
    setPeopleNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props(peopleNumber);
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <div className="container">
            <a className="navbar-brand" href="#">
              Random People
            </a>
          </div>
        </nav>
      </div>
      <div className="formDiv">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col labelCol">
              <label>
                <h3>How much people do you want to display?</h3>
              </label>
            </div>
            <div className="col inputCol">
              <input
                type="number"
                value={peopleNumber}
                onChange={handleChange}
                min={1}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
