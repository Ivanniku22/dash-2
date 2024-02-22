import { useState, useEffect } from "react";
import "./orders.scss"
import DataTable from "../../components/dataTable/DataTable"
import { GridColDef } from "@mui/x-data-grid" 
import axios from 'axios';

const columns : GridColDef[] = [
  {field:"id",headerName:'ID',width:90},
  {
      field:'order_price',
      headerName:'Price',
      type:'string',
      width:140,
  },
  {
      field:'ordered_date',
      type:'string',
      headerName:'Order Date',
      width:109,
  },
  {
      field:'e_firstname',
      type:'string',
      headerName:'Sales Person',
      width:120,
  },
  {
    field:'order_status',
    type:'string',
    headerName:'Status',
    width:200,
  },
  {
    field:'priority',
    type:'string',
    headerName:'Priority',
    width:80,
  },
  {
    field:'delivery_e_id',
    type:'string',
    headerName:'Delivery ID',
    width:110,
  },
  {
    field:'billed_date',
    type:'string',
    headerName:'Billed Date',
    width:109,
  },
];

const Orders = () => {
    const [test, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5172/orders")
            .then(response => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
  return (
    
    <div className="orders">
      <div className="info">
        <h1>Orders</h1>
      </div>
      <DataTable slug = 'orders' columns={columns} rows={test}/>
    </div>
  )
}

export default Orders