import React, { useState } from 'react'
import { Form, FormBtn, FormDiv, H1, Input, P } from '../../Styles'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createCategory, getAllCategories } from '../../redux/allProducts/allProducts'

const AddCategory = () => {
    const { currentUser } = useSelector(state => state.user)
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')
    const [categoryName, setCategoryName] = useState('')
    const [image, setImage] = useState('')
    const dispatch = useDispatch()

    const loginUser = (e) => {
        e.preventDefault()
        dispatch(getAllCategories(currentUser.data.token))
        dispatch(createCategory({
            TOKEN: currentUser.data.token,
            category: {
                name: categoryName,
                image
            }
            ,
        }))
    }

    return (
        <FormDiv>
            <Form>
                <H1>Add a new category</H1>
                <Input onChange={(e) => setCategoryName(e.target.value)} placeholder='Enter name' />
                <Input onChange={(e) => setImage(e.target.value)} placeholder='Enter image' />
                <FormBtn type='submit' onClick={loginUser}>Login</FormBtn>
                {err && setTimeout(() => { setErr(null) }, 5000) && <span style={{ color: 'red', fontWeight: '600' }}>{err}</span>}
                {success && setTimeout(() => { setSuccess(null) }, 5000) && <span style={{ color: 'green', fontWeight: '600' }}>{success}</span>}
                <P>Don&apos;t have an account? <Link to='register'>Register...</Link></P>
            </Form>
        </FormDiv>
    )
}

export default AddCategory