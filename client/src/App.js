
import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';


import Home from './Components/Home/Home';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        {/* <Route path='*' element={<Page404/>}/> */}
      </Routes>

    </React.Fragment>
  );
}

export default App;
