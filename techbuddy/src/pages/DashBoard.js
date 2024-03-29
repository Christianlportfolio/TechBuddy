import { Link, Outlet } from "react-router-dom"
import { useUser } from "../lib/customHooks";

const DashBoard = () => {

  useUser();

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/dashboard/trafik">Trafik</Link></li>
          <li><Link to="/dashboard/uptime">Uptime</Link></li>
          <li><Link to="/dashboard/kontakformular">Kontakt</Link></li>
          <li><Link to="/dashboard/testmiljø">Testmiljø</Link></li>
        </ul>
      </nav>
      <Outlet />
  </div>
  )
 
  };


  
  export default DashBoard;