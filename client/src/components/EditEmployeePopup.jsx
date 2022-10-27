import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function EditEmployeePopup(props) {
  const { unmountPopup, id, firstName, lastName, salary } = props;
  const [firstNameVal, setFirstNameVal] = useState(firstName);
  const [lastNameVal, setLastNameVal] = useState(lastName);
  const [salaryVal, setSalaryVal] = useState(salary);

  const handleEditEmployeeClick = async (e) => {
    e.preventDefault();

    (async () => {
      const uri = `${process.env.REACT_APP_BACKEND_ORIGIN}/users/${id}`;
      const data = {
        firstName: firstNameVal,
        lastName: lastNameVal,
        salary: salaryVal,
      };

      await axios.put(uri, data);
    })();

    unmountPopup();
  };

  return (
    <>
      <button
        className="overlay"
        type="button"
        aria-label="overlay"
        onClick={unmountPopup}
      />
      <div className="popup">
        <form action="" onSubmit={handleEditEmployeeClick}>
          <div>
            <label htmlFor="firstName">
              First Name:
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstNameVal}
                onChange={(e) => {
                  setFirstNameVal(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label htmlFor="lastName">
              Last Name:
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastNameVal}
                onChange={(e) => {
                  setLastNameVal(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label htmlFor="salary">
              Salary:
              <input
                type="text"
                id="salary"
                name="salary"
                pattern="[0-9]*"
                title="Please enter a number"
                value={salaryVal}
                onChange={(e) => {
                  setSalaryVal(e.target.value);
                }}
              />
            </label>
          </div>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

EditEmployeePopup.defaultProps = {
  unmountPopup: () => {},
  id: null,
  firstName: '',
  lastName: '',
  salary: null,
};

EditEmployeePopup.propTypes = {
  unmountPopup: PropTypes.func,
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  salary: PropTypes.number,
};
