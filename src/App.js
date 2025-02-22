import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'; // Import BrowserRouter
import Dashboard from './Views/Dashboard.js';
import Help from './Views/Help.js';
import Student from './Views/Students.js';
import BatchList from './Views/BatchList.js';
import Broadcast from './Views/Broadcast.js';
import Setting from './Views/Setting.js';
import Logout from './Views/Logout.js';
import About from './Views/About/index.js';
import Layout from './Views/Layout.js';
import ZedGo from './Views/ZedGo.js';
import StudentsList from './Views/StudentsList.js';
import SignIn from './Views/SignIn.js'; 

function App() {
  return (
    <BrowserRouter> {/* Wrap Routes with BrowserRouter */}
      <Routes> 
        {/* Direct route to ZedGo component */}
        <Route path='/' element={<ZedGo />} />
        <Route path="signup" element={<SignIn />} />
        {/* Layout route with nested paths */}
        <Route element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="student" element={<Student />} />
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