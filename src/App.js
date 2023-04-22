import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Nav from './components/nav/Nav';
import NavHead from './components/nav/NavHead';
import HomePage from './components/pages/HomePage';
import AllProducts from './components/pages/AllProducts';
import AllOrders from './components/pages/AllOrders';
import AllUsers from './components/pages/AllUsers';
import AllStores from './components/pages/AllStores';
import AddCategory from './components/forms/AddCategory';
import AddStore from './components/forms/AddStore';
import AddProduct from './components/forms/AddProduct';

const App = () => {
  const { currentUser } = useSelector(state => state.user)
  return (
    <div className="app">
      <div className='appNavHead'>
        {currentUser && <NavHead />}
      </div>

      <div className={currentUser ? 'routes' : 'regRoute'}>
        {currentUser
          &&
          <div className='navRoute'>
            <Nav />
          </div>
        }

        <div className={currentUser ? `navRoutes` : 'auth'}>
          <Routes>
            <Route path='/register' element={currentUser ? <Navigate to='/' /> : <Register />} />
            <Route path='/' element={currentUser ? <HomePage /> : <Login />} />
            <Route path='/products' element={currentUser ? <AllProducts /> : <Navigate to='/' />} />
            <Route path='/orders' element={currentUser ? <AllOrders /> : <Navigate to='/' />} />
            <Route path='/users' element={currentUser ? <AllUsers /> : <Navigate to='/' />} />
            <Route path='/stores' element={currentUser ? <AllStores /> : <Navigate to='/' />} />
            <Route path='/add/category' element={currentUser ? <AddCategory /> : <Navigate to='/' />} />
            <Route path='/add/store' element={currentUser ? <AddStore /> : <Navigate to='/' />} />
            <Route path='/add/product' element={currentUser ? <AddProduct /> : <Navigate to='/' />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
