import { GridColDef} from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import "./users.scss"
import { userRows } from "../../data";
import UserAdd from "../../components/userAdd/UserAdd";
import { useEffect, useState } from "react";
import axios from "axios";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 60 },
  {
    field: 'e_firstname',
    type:'string',
    headerName: 'First name',
    width: 130,
  },
  {
    field: 'e_lastname',
    type:'string',
    headerName: 'Last name',
    width: 120,
  },
  {
    field:'e_design',
    type:'string',
    headerName:'Role',
    width:150,
  },
  {
    field:'e_dob',
    type:'string',
    headerName:'Date of Birth',
    width:205,
  },
  {
    field:'e_doj',
    type:'string',
    headerName:'Date of Joining',
    width:205,
  },
  {
    field:'e_blood_group',
    type:'string',
    headerName:'Blood Group',
    width:200,
  },

];


const Users = () => {

  const [test, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5172/users")
            .then(response => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

  return (
    
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <UserAdd />
      </div>
      <DataTable slug = 'users' columns={columns} rows={test}/>
    </div>
  )
}

export default Users