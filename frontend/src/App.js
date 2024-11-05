import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/create" element={<EventForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

