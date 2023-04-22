import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from '../../redux/user/user'
import { FaStore, FaCheck, FaChartBar, FaUser, FaPlus, FaPlusCircle } from 'react-icons/fa'
import { getAllUsers } from '../../redux/allUsers/allusers'
import { getAllOrders } from '../../redux/allOrders/allOrders'
import { getAllProducts } from '../../redux/allProducts/allProducts'
import { getAllStores } from '../../redux/allStores/allStores'

const Nav = () => {
  const { currentUser } = useSelector((state) => state.user)

  const dispatch = useDispatch()
  const logout = () => {
    dispatch(loginSuccess(null))
  }

  useEffect(() => {
    dispatch(getAllUsers(currentUser.data.token))
    dispatch(getAllOrders(currentUser.data.token))
    dispatch(getAllProducts(currentUser.data.token))
    dispatch(getAllStores(currentUser.data.token))
  }, [])

  return (
    <>
      <nav className='mainNavHeader'>
        <div className='navOptions'>
          <ul>
            <NavLink to='/' className='navLink'><FaChartBar /> Statistics</NavLink>
            <NavLink className='navLink' to='/products'><FaStore /> Products</NavLink>
            <NavLink className='navLink' to='/orders'><FaCheck /> Orders</NavLink>
            <NavLink className='navLink' to='/users'><FaUser /> Users</NavLink>
            <NavLink className='navLink' to='/stores'><FaStore /> Stores</NavLink>
            <NavLink className='navLink' to='/add/store'><FaPlus /> Add Store</NavLink>
            <NavLink className='navLink' to='/add/category'><FaPlusCircle /> Add Category</NavLink>
            <NavLink className='navLink' to='/add/product'><FaPlusCircle /> Add Product</NavLink>
            <button className='logoutButton' onClick={() => logout()}>Logout</button>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav