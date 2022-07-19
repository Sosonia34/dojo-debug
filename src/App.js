import Beers from './Components/Beers';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
    return (
    <div className="container">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          <Beers />
        </tbody>
      </table>
    </div>
  );
}

export default App;
