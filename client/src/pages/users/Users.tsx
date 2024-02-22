import { GridColDef} from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import "./users.scss"
import { userRows } from "../../data";
import UserAdd from "../../components/userAdd/UserAdd";

const columns: GridColDef[] = [
{ field: 'id', headerName: 'ID', width: 90 },
{
  field:'img' , 
  headerName:'Avatar',
  width:100,
  renderCell:(params) => {
      return <img src={params.row.img || "noavatar.png"} alt="" />
  }
},
{
  field: 'firstName',
  type:'string',
  headerName: 'First name',
  width: 150,
},
{
  field: 'lastName',
  type:'string',
  headerName: 'Last name',
  width: 150,
},
{
  field: 'email',
  type: 'string',
  headerName: 'Email',
  width: 200,
},
{
  field: 'phone',
  type: 'string',
  headerName: 'Phone',
  width: 200,
},
{
  field: 'createdAt',
  headerName: 'Created At',
  width: 200,
  type:'string'
},
{
  field: 'verified',
  type: 'boolean',
  headerName: 'Verified',
  width: 150,
},
];


const Users = () => {

  return (
    
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <UserAdd />
      </div>
      <DataTable slug = 'users' columns={columns} rows={userRows}/>
    </div>
  )
}

export default Users