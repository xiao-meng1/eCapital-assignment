import React from 'react';

import './app.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <header>
          <h1 className="h1">Employees</h1>
        </header>
        <main>
          <table>
            <tr className="table-headers">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Salary</th>
            </tr>
            <tr>
              <td>Tobias</td>
              <td>Linus</td>
              <td>Linus</td>
              <td className="buttons">
                <button type="button" className="edit">
                  Edit
                </button>
                <button type="button" className="delete">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>Tobias</td>
              <td>Linus</td>
              <td>Linus</td>
              <td className="buttons">
                <button type="button" className="edit">
                  Edit
                </button>
                <button type="button" className="delete">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>Tobias</td>
              <td>Linus</td>
              <td>Linus</td>
              <td className="buttons">
                <button type="button" className="edit">
                  Edit
                </button>
                <button type="button" className="delete">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="last">
              <td />
              <td />
              <td />
              <td>
                <button type="button" className="add-employee">
                  Add Employee
                </button>
              </td>
            </tr>
          </table>
        </main>
      </div>
    </div>
  );
}

export default App;
