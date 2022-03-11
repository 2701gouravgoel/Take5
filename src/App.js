import './App.css';
import {BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import Chat from './Chat';
import News from './News';
import { useEffect } from 'react';

function App() {
  return (
    
    <Provider store={store}>
    <div className="App">   
    <Routes>
      <Route exact path="/" element={<Chat/>} /> 
      <Route exact path="/news" element={<News/>} />             
    </Routes> 
    </div>
    
    </Provider>
  );
}

export default App;
