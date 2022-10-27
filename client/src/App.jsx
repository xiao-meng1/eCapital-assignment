import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AddEmployeePopup from './components/AddEmployeePopup';
import EditEmployeePopup from './components/EditEmployeePopup';
import TableRow from './components/TableRow';

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
                <TableRow
                  key={String(employee.id)}
                  id={String(employee.id)}
                  firstName={employee.firstName}
                  lastName={employee.lastName}
                  salary={employee.salary}
                  setActiveEmployeeId={setActiveEmployeeId}
                  setEditEmployeePopupIsActive={setEditEmployeePopupIsActive}
                />
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
            employees.find(
              (employee) => String(employee.id) === activeEmployeeId
            ).firstName
          }
          lastName={
            employees.find(
              (employee) => String(employee.id) === activeEmployeeId
            ).lastName
          }
          salary={
            employees.find(
              (employee) => String(employee.id) === activeEmployeeId
            ).salary
          }
        />
      ) : null}
    </div>
  );
}

export default App;
