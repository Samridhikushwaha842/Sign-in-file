import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'; // Import BrowserRouter
import Dash from './dashboard1.js';
import Help from './help.js';
import Student from './Students.js';
import BatchList from './BatchList.js';
import Broadcast from './broadcast.js';
import Setting from './Settings.js';
import Logout from './logout.js';
import About from './about.js';
import Layout from './layout.js';
import ZedGo from './Zedgo.js';
import StudentsList from './Studentlist.js';

function App() {
  return (
    <BrowserRouter> {/* Wrap Routes with BrowserRouter */}
      <Routes> {/* Define routes */}
        {/* Direct route to ZedGo component */}
        <Route path='Zedgo' element={<ZedGo />} />
        
        {/* Layout route with nested paths */}
        <Route path="/" element={<Layout />}>
          <Route path="dashboard1" element={<Dash />} />
          <Route path="Students" element={<Student />} />
          <Route path="Batchlist" element={<BatchList />} />
          <Route path="broadcast" element={<Broadcast />} />
          <Route path="Settings" element={<Setting />} />
          <Route path="logout" element={<Logout />} />
          <Route path="about" element={<About />} />
          <Route path="help" element={<Help />} />
          <Route path="Studentlist" element={<StudentsList />} />
        </Route>

        {/* Optional: Redirect from any unknown paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;