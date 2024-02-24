import { useState, useEffect } from "react";
import "./products.scss"
import DataTable from "../../components/dataTable/DataTable"
import { GridColDef } from "@mui/x-data-grid"
import axios from 'axios';
import ProductAdd from "../../components/productAdd/ProductAdd";


const columns : GridColDef[] = [
  {field:"id",headerName:'ID',width:70},
    {
        field: 'cat_id',
        headerName: 'Category',
        type: 'string',
        width: 100,
    },
  {
      field:'part_no',
      headerName:'Part No',
      type:'string',
      width:170,
  },
  {
      field:'short_part_no',
      type:'string',
      headerName:'Short Part No',
      width:100,
  },
  {
      field:'ah',
      type:'number',
      headerName:'Battery AH',
      width:120,
  },
  {
      field:'dlr_price',
      type:'number',
      headerName:'Dealer Price',
      width:120,
  },
  {
      field:'mrp',
      headerName:'MRP Price',
      width:120,
      type:'number',
  },
  {
      field: 'wnty_cat_id',
      headerName: 'Warrent Year',
      width: 120,
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
        <ProductAdd />
      </div>
      <DataTable slug = 'products' columns={columns} rows={test}/>
    </div>
  )
}

export default Products