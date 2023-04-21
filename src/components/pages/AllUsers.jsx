import React from 'react'
import { useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';

const AllUsers = () => {

    const { allUsers } = useSelector(state => state.allUsers)

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'User Name', width: 300 },
        { field: 'email', headerName: 'Email Address', width: 400 }
    ]
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <h2 style={{ width: '100%', padding: '0.5rem', fontFamily: 'sans-serif', fontSize: '1.5rem', textAlign: 'center' }}>All Users</h2>
            <div style={{ height: 'calc(100% - 2.5rem)' }}>
                <DataGrid
                    rows={allUsers.map(hey => (hey)).sort((a, b) => a.id - b.id)}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={5}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default AllUsers;