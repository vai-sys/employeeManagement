import { useEffect } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { setLocalStorage, getLocalStorage } from "./utils/LocalStorage";

export default function App() {
  useEffect(() => {
   
    if (!getLocalStorage('employees') || !getLocalStorage('admin')) {
      setLocalStorage(); 
    }
  }, []);
  return (
    <div>
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      <AdminDashboard/>
    </div>
  )
}