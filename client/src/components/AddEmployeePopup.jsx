import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddEmployeePopup(props) {
  const { unmountPopup } = props;
  const [firstNameVal, setFirstNameVal] = useState();
  const [lastNameVal, setLastNameVal] = useState();
  const [salaryVal, setSalaryVal] = useState();

  const handleAddEmployeeClick = async (e) => {
    e.preventDefault();
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
        <form action="" onSubmit={handleAddEmployeeClick}>
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

AddEmployeePopup.defaultProps = {
  unmountPopup: () => {},
};

AddEmployeePopup.propTypes = {
  unmountPopup: PropTypes.func,
};
