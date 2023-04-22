import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from '../../redux/user/user'
import { FaStore, FaCheck, FaChartBar, FaUser, FaPlus, FaPlusCircle, FaBars, FaToggleOff, FaWindowClose } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { getAllUsers } from '../../redux/allUsers/allusers'
import { getAllOrders } from '../../redux/allOrders/allOrders'
import { getAllProducts } from '../../redux/allProducts/allProducts'
import { getAllStores } from '../../redux/allStores/allStores'

const Nav = () => {
  const { currentUser } = useSelector((state) => state.user)
  const [toggle, setToggle] = useState(false)

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

  const toggleOn = () => {
    if (!toggle) {
      setToggle(true)
    } else setToggle(false)
  }

  const hideMenu = () => {
    setToggle(false)
  }

  return (
    <>
      <div>
        <div className='bar'>
          {!toggle && <FaBars onClick={toggleOn} />}
          {toggle && <AiOutlineClose onClick={toggleOn} />}
        </div>
        <nav className={`mainNavHeader ${toggle ? '' : 'hide'}`}>
          <div className='navOptions'>
            <ul className='navUls'>
              <NavLink onClick={hideMenu} to='/' className='navLink'><FaChartBar /> Statistics</NavLink>
              <NavLink onClick={hideMenu} className='navLink' to='/products'><FaStore /> Products</NavLink>
              <NavLink onClick={hideMenu} className='navLink' to='/orders'><FaCheck /> Orders</NavLink>
              <NavLink onClick={hideMenu} className='navLink' to='/users'><FaUser /> Users</NavLink>
              <NavLink onClick={hideMenu} className='navLink' to='/stores'><FaStore /> Stores</NavLink>
              <NavLink onClick={hideMenu} className='navLink' to='/add/store'><FaPlus /> Add Store</NavLink>
              <NavLink onClick={hideMenu} className='navLink' to='/add/category'><FaPlusCircle /> Add Category</NavLink>
              <NavLink onClick={hideMenu} className='navLink' to='/add/product'><FaPlusCircle /> Add Product</NavLink>
              <button className='logoutButton' onClick={() => logout()}>Logout</button>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Nav