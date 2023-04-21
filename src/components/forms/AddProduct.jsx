import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct, getAllCategories } from '../../redux/allProducts/allProducts'
import { Form, FormBtn, FormDiv, H1, Input } from '../../Styles'

const AddProduct = () => {
    const { allCategories } = useSelector(state => state.allProducts)
    const { allStores } = useSelector(state => state.allStores)
    const { currentUser } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [storeId, setStoreId] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [price, setPrice] = useState('')
    const [details, setDetails] = useState('')
    const [description, setDescription] = useState('')
    const [instock, setInstock] = useState('')
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        dispatch(getAllCategories(currentUser.data.token))
    }, [])
    console.log(allCategories)
    const loginUser = (e) => {
        e.preventDefault()
        dispatch(createProduct({
            TOKEN: currentUser.data.token,
            product: {
                store_id: storeId,
                category_id: categoryId,
                image,
                name,
                color,
                size,
                price,
                in_stock: instock,
                details,
                description
            }
        }))
    }
    return (
        <FormDiv>
            <Form>
                <select onChange={(e) => setCategoryId(e.target.value)} name="" id="">
                    <option  >Select a category</option>
                    {allCategories.map((cat) => (
                        <option value={cat.id}>{cat.name}</option>
                    ))}
                </select>
                <select onChange={(e) => setStoreId(e.target.value)} name="" id="">
                    <option>Select a store</option>
                    {allStores.map((cat) => (
                        <option value={cat.id}>{cat.store_name}</option>
                    ))}
                </select>
                <H1>Login to your account</H1>
                <Input onChange={(e) => setName(e.target.value)} placeholder='Enter name' type="text" />
                <Input onChange={(e) => setImage(e.target.value)} placeholder='enter image' type='text' />
                <Input onChange={(e) => setSize(e.target.value)} placeholder='Enter size' type="text" />
                <Input onChange={(e) => setColor(e.target.value)} placeholder='Enter color' type="text" />
                <Input onChange={(e) => setDescription(e.target.value)} placeholder='Enter color' type="text" />
                <Input onChange={(e) => setDetails(e.target.value)} placeholder='Enter color' type="text" />
                <Input onChange={(e) => setPrice(e.target.value)} placeholder='Enter color' type="text" />
                <Input onChange={(e) => setInstock(e.target.value)} placeholder='Enter color' type="text" />

                <FormBtn type='submit' onClick={loginUser}>Login</FormBtn>
                {err && setTimeout(() => { setErr(null) }, 5000) && <span style={{ color: 'red', fontWeight: '600' }}>{err}</span>}
                {success && setTimeout(() => { setSuccess(null) }, 5000) && <span style={{ color: 'green', fontWeight: '600' }}>{success}</span>}

            </Form>
        </FormDiv>
    )
}

export default AddProduct