import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';

library.add(faCheckCircle, faTimesCircle);

function Courses() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('db.json');
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  return (
    <div className="card-deck">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.imagePath} className="card-img-top" alt={item.title} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-dates">'Dates:'{item.dates.start_date}-{item.dates.start_date}</p>
            <p className="card-boolean">{item.online ? (
           <i className="fas fa-check-circle"></i>
           ) : (
            <i className="fas fa-times-circle"></i>
          )}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>Courses</h1>
      <Courses />
    </div>
  );
}

export default App;