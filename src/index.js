import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchField from './SearchField';

ReactDOM.render(
  <React.StrictMode>
    <div className="wrapper">
      <SearchField />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
