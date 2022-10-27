import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function TableRow(props) {
  const {
    id,
    firstName,
    lastName,
    salary,
    setActiveEmployeeId,
    setEditEmployeePopupIsActive,
  } = props;

  const handleDeleteEmployeeClick = async (e) => {
    e.preventDefault();

    (async () => {
      const uri = `${process.env.REACT_APP_BACKEND_ORIGIN}/users/${id}`;

      await axios.delete(uri);
    })();
  };

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{`$${salary.toLocaleString()}`}</td>
      <td className="buttons">
        <button
          type="button"
          className="edit"
          onClick={() => {
            setActiveEmployeeId(id);
            setEditEmployeePopupIsActive(true);
          }}
        >
          Edit
        </button>
        <button
          type="button"
          className="delete"
          onClick={handleDeleteEmployeeClick}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

TableRow.defaultProps = {
  id: '',
  firstName: '',
  lastName: '',
  salary: null,
  setActiveEmployeeId: () => {},
  setEditEmployeePopupIsActive: () => {},
};

TableRow.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  salary: PropTypes.number,
  setActiveEmployeeId: PropTypes.func,
  setEditEmployeePopupIsActive: PropTypes.func,
};

export default TableRow;
