import React from 'react'
import { useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';
const AllProducts = () => {

    const { allProducts } = useSelector(state => state.allProducts)

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Product Name', width: 300 },
        { field: 'price', headerName: 'Price ($)', width: 150 },
        { field: 'in_stock', headerName: 'Quantity Left', width: 150 },
        { field: 'store_id', headerName: 'Store Id', width: 150 },
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

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <h2 style={{ width: '100%', padding: '0.5rem', fontFamily: 'sans-serif', fontSize: '1.5rem', textAlign: 'center' }}>All Products</h2>
            <div style={{ height: 'calc(100% - 2.5rem)' }}>
                <DataGrid
                    rows={allProducts.map(hey => ({ ...hey, value: hey.price * hey.in_stock })).sort((a, b) => a.id - b.id)}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={5}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default AllProducts