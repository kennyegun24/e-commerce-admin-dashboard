import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createStore, getAllCategories } from '../../redux/allProducts/allProducts'
import { Form, FormBtn, FormDiv, H1, Input, P } from '../../Styles'
import { Link } from 'react-router-dom'
import { getAllStores } from '../../redux/allStores/allStores'

const AddStore = () => {
    const [storeName, setStoreName] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState('')
    const [email, setEmail] = useState('')
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    const dispatch = useDispatch()
    const { currentUser } = useSelector(state => state.user)

    const loginUser = (e) => {
        e.preventDefault()
        dispatch(getAllStores(currentUser.data.token))
        dispatch(createStore({
            TOKEN: currentUser.data.token,
            store: {
                store_name: storeName,
                password,
                image,
                email
            }
        }
        ))
    }
    return (
        <FormDiv>
            <Form>
                <H1>Login to your account</H1>
                <Input onChange={(e) => setStoreName(e.target.value)} placeholder='Enter name' type="text" />
                <Input onChange={(e) => setImage(e.target.value)} placeholder='enter image' type='text' />
                <Input onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' type="password" />
                <Input onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' type="email" />

                <FormBtn type='submit' onClick={loginUser}>Login</FormBtn>
                {err && setTimeout(() => { setErr(null) }, 5000) && <span style={{ color: 'red', fontWeight: '600' }}>{err}</span>}
                {success && setTimeout(() => { setSuccess(null) }, 5000) && <span style={{ color: 'green', fontWeight: '600' }}>{success}</span>}
            </Form>
        </FormDiv>
    )
}

export default AddStore