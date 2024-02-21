import { useState, useEffect } from "react";
import "./dealers.scss"
import DataTable from "../../components/dataTable/DataTable"
import Add from "../../components/add/Add"
import { GridColDef } from "@mui/x-data-grid" 
import axios from 'axios';

const columns : GridColDef[] = [
  {field:"id",headerName:'ID',width:90},
    {
        field: 'dlr_name',
        headerName: 'Dealer Name',
        type: 'string',
        width: 150,
    },
  {
      field:'shop_cat',
      headerName:'Shop Type',
      type:'string',
      width:140,
  },
  {
      field:'addressline1',
      type:'string',
      headerName:'Address',
      width:200,
  },
  {
      field:'contact_person',
      type:'string',
      headerName:'Contact Person',
      width:150,
  },
  {
    field:'contact_number',
    type:'string',
    headerName:'Contact Number',
    width:200,
  },
  {
    field:'city',
    type:'string',
    headerName:'City',
    width:100,
  },
  {
    field:'postal_code',
    type:'string',
    headerName:'Postal Code',
    width:100,
  },
  
];


const Dealers = () => {
    const [open, setOpen] = useState(false)
    const [test, setUsers] = useState([]);
    
    useEffect(() => {
        axios
            .get("http://localhost:5172/dealers")
            .then(response => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
  return (
    
    <div className="dealer">
      <div className="info">
        <h1>Dealers</h1>
        <button onClick={() => setOpen(true)}>Add New Dealers</button>
      </div>
      <DataTable slug = 'orders' columns={columns} rows={test}/>
      {open && <Add slug="order" columns={columns}  setOpen={setOpen} />}
    </div>
  )
}

export default Dealers