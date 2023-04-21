import React from 'react'
import { useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';

const AllStores = () => {

    const { allStores } = useSelector(state => state.allStores)

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'store_name', headerName: 'Store Name', width: 250 },
        { field: 'email', headerName: 'Email Address', width: 300 },
        { field: 'total_sold', headerName: 'Total Sold', width: 300 },
        { field: 'store_value', headerName: 'Store Value', width: 300 }
    ]

    console.log(allStores)

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <h2 style={{ width: '100%', padding: '0.5rem', fontFamily: 'sans-serif', fontSize: '1.5rem', textAlign: 'center' }}>All Stores</h2>
            <div style={{ height: 'calc(100% - 2.5rem)' }}>
                <DataGrid
                    rows={allStores.map(hey => (hey)).sort((a, b) => b.total_sold - a.total_sold)}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={5}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default AllStores