import React from 'react'
import { useSelector } from 'react-redux'
import StoreDetails from '../chart/StoreDetails'
import './home.css'
import ChartsComp from './ChartsComp'

const HomePage = () => {
    const { allUsers } = useSelector(state => state.allUsers)
    const { allOrders } = useSelector(state => state.allOrders)
    const { allProducts } = useSelector(state => state.allProducts)
    const { allStores } = useSelector(state => state.allStores)

    return (
        <div className='homeDiv'>
            <div className='homeMainDiv'>
                <StoreDetails />
                <div className='chartCompDiv' >
                    <ChartsComp allUsers={allUsers} />
                    <ChartsComp allUsers={allOrders} />
                    <ChartsComp allUsers={allProducts} />
                    <ChartsComp allUsers={allStores} />
                </div>
            </div>
        </div>
    )
}

export default HomePage;