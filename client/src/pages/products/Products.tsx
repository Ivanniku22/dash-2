import { useState, useEffect } from "react";
import "./products.scss"
import DataTable from "../../components/dataTable/DataTable"
import Add from "../../components/add/Add"
import { GridColDef } from "@mui/x-data-grid"
//import { products } from "../../data"
import axios from 'axios';


const columns : GridColDef[] = [
  {field:"id",headerName:'ID',width:90},
    {
        field: 'cat_id',
        headerName: 'Category',
        type: 'string',
        width: 250,
    },
  {
      field:'part_no',
      headerName:'Part No',
      type:'string',
      width:250,
  },
  {
      field:'short_part_no',
      type:'string',
      headerName:'Short Part No',
      width:150,
  },
  {
      field:'ah',
      type:'number',
      headerName:'battery AH',
      width:200,
  },
  {
      field:'dlr_price',
      type:'number',
      headerName:'Dealer Price',
      width:200,
  },
  {
      field:'mrp',
      headerName:'MRP Price',
      width:200,
      type:'number',
    },
    {
        field: 'wnty_cat_id',
        headerName: 'Warrent Year',
        width: 200,
        type: 'number',
    },
  {
      field:'p_status',
    headerName:'Status',
    width:150,
    type:'boolean',
  },
];

const Products = () => {
    const [open, setOpen] = useState(false)
    const [test, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5172/products")
            .then(response => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
  return (
    
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug = 'products' columns={columns} rows={test}/>
      {open && <Add slug="product" columns={columns}  setOpen={setOpen} />}
    </div>
  )
}

export default Products