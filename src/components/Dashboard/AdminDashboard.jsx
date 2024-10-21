import React from 'react';
import CreateTask from '../others/CreateTask';
import  Header from '../others/Header'
import AllTask from '../others/AllTask';
import Login from '../Auth/Login';

const AdminDashboard = () => {
  return (
   <div>
     <Login/>
    {/* <Header/>
    <CreateTask/>
    <AllTask/> */}
   </div>
  );
};

export default AdminDashboard;