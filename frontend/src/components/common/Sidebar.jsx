import React,  {useContext} from "react";
import { AuthContext } from "../context/Auth";


const Sidebar = () => {

    const {logout} = useContext(AuthContext);

  return (
    <div className="card shadow border-0">
      <div className="card-body">
        <h3>Sidebar</h3>
        <ul className="ul">
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="/admin/services">Services</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">projects</a>
          </li>
          <li>
            <button onClick = {logout} className="btn btn-primary1 mt-4">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
