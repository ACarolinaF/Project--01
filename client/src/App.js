
import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';


import Home from './Components/Home/Home';
import CreateUser from './Components/CreateUser/CreateUser';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/home' element={<Home name="Carol"/>}/>
        <Route path='/create' element={<CreateUser/>}/>
        {/* <Route path='*' element={<Page404/>}/> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
