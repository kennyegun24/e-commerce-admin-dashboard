import React from 'react'
import { FaHashtag } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import './metrics.css'

const StoreDetails = () => {
    const { currentUser } = useSelector(state => state.user)
    return (
        <div className='storeMetMainDiv'>
            <aside className='storeMetCards'>
                <div className='storeMetCardTitle'>
                    <FaHashtag className='storeMetCardIcon' />
                    <h2>Total Users</h2>
                </div>
                <p>{currentUser && currentUser.admin.user_count} </p>
                <p>Your users have bought <strong>{currentUser.admin.order_count}</strong> products so far</p>
            </aside>

            <aside className='storeMetCards'>
                <div className='storeMetCardTitle'>
                    <FaHashtag className='storeMetCardIcon' />
                    <h2>Total Products</h2>
                </div>

                <p>{currentUser && currentUser.admin.product_count} Products</p>
                <p><strong>{currentUser.admin.product_count} prods.</strong> by <strong>{currentUser.admin.store_count} store owners</strong> so far</p>
            </aside>

            <aside className='storeMetCards'>
                <div className='storeMetCardTitle'>
                    <FaHashtag className='storeMetCardIcon' />
                    <h2>Total Store NO. </h2>
                </div>
                <p>{currentUser && currentUser.admin.store_count} stores</p>
                <p>You have <strong>{currentUser.admin.store_count}</strong> products</p>
            </aside>
        </div>
    )
}

export default StoreDetails