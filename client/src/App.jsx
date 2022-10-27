import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AddEmployeePopup from './components/AddEmployeePopup';
import EditEmployeePopup from './components/EditEmployeePopup';

import './app.css';

function App() {
  const [addEmployeePopupIsActive, setAddEmployeePopupIsActive] =
    useState(false);
  const [editEmployeePopupIsActive, setEditEmployeePopupIsActive] =
    useState(false);
  const [activeEmployeeId, setActiveEmployeeId] = useState('');
  const [employees, setEmployees] = useState([]);

  const toggleAddEmployeePopupIsActive = () => {
    setAddEmployeePopupIsActive(!addEmployeePopupIsActive);
  };
  const toggleEditEmployeePopupIsActive = () => {
    setEditEmployeePopupIsActive(!editEmployeePopupIsActive);
  };

  useEffect(() => {
    (async () => {
      const uri = `${process.env.REACT_APP_BACKEND_ORIGIN}/users`;
      const response = await axios.get(uri);

      setEmployees(response.data);
    })();
  });

  return (
    <div className="app">
      <div className="container">
        <header>
          <h1 className="h1">Employees</h1>
        </header>
        <main>
          <table>
            <tbody>
              <tr className="table-headers">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Salary</th>
              </tr>
              {employees.map((employee) => (
                <tr key={String(employee.id)}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{`$${employee.salary.toLocaleString()}`}</td>
                  <td className="buttons">
                    <button
                      type="button"
                      className="edit"
                      onClick={() => {
                        setActiveEmployeeId(employee.id);
                        setEditEmployeePopupIsActive(true);
                      }}
                    >
                      Edit
                    </button>
                    <button type="button" className="delete">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="last">
                <td />
                <td />
                <td />
                <td>
                  <button
                    type="button"
                    className="add-employee"
                    onClick={toggleAddEmployeePopupIsActive}
                  >
                    Add Employee
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
      {addEmployeePopupIsActive ? (
        <AddEmployeePopup unmountPopup={toggleAddEmployeePopupIsActive} />
      ) : null}
      {editEmployeePopupIsActive ? (
        <EditEmployeePopup
          unmountPopup={toggleEditEmployeePopupIsActive}
          id={activeEmployeeId}
          firstName={
            employees.find((employee) => employee.id === activeEmployeeId)
              .firstName
          }
          lastName={
            employees.find((employee) => employee.id === activeEmployeeId)
              .lastName
          }
          salary={
            employees.find((employee) => employee.id === activeEmployeeId)
              .salary
          }
        />
      ) : null}
    </div>
  );
}

export default App;
