import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

const App = ({filterList}) => (
  <div className="app">
    <Sidebar filterables={filterList} />
    <Content />
  </div>
)

export default App;
