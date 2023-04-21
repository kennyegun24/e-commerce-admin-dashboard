import React from 'react'
import { useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';

const AllOrders = () => {

    const { allOrders } = useSelector(state => state.allOrders)

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'product_name', headerName: 'Product Name', width: 200 },
        { field: 'user_name', headerName: 'User', width: 150 },
        { field: 'amount', headerName: 'Amount ($)', width: 150 },
        { field: 'quantity', headerName: 'Quantity #', width: 150 },
        { field: 'address', headerName: 'Address', width: 300 },
        { field: 'tel_number', headerName: 'Telephone', width: 150 },
        { field: 'store_id', headerName: 'Store Id', width: 150 },
        { field: 'user_id', headerName: 'User Id', width: 150 },
        { field: 'value', headerName: 'Value', width: 150 },

        {
            field: 'image', headerName: 'Image',
            renderCell: (params) => (
                <img src={params.value} alt='' style={{ width: 50, borderRadius: 50 }} />
            ),
            sortable: false,
            width: 120
        }
    ];
    // console.log(allOrders)
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <h2 style={{ width: '100%', padding: '0.5rem', fontFamily: 'sans-serif', fontSize: '1.5rem', textAlign: 'center' }}>All Orders</h2>
            <div style={{ height: 'calc(100% - 2.5rem)' }}>
                <DataGrid
                    rows={allOrders.map(hey => ({ ...hey, value: hey.amount * hey.quantity })).sort((a, b) => a.id - b.id)}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={5}
                    checkboxSelection
                />
            </div>
        </div>
    )
}
export default AllOrders;