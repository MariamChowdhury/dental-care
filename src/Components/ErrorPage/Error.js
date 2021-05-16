import React from 'react';
import './Error.css'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-5 pt-5">
          <div className="col text-center mt-5 pt-5">
            <h1>404 ERROR!</h1>
            <button className="btn green-color text-white"><Link to='/home'>Go Back</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;