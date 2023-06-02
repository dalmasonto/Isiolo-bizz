import { Button, FileInput, Group } from '@mantine/core'
import React from 'react'
import { makeRequestOne } from '../../config/config'
import { URLS } from '../../config/constants'
import { useSelector } from 'react-redux'
import { selectUser } from '../../providers/app/appSlice';
import AddProductForm from '../../components/shop/AddProductForm'

const AddProduct = () => {
    const [loading, setLoading] = React.useState(false)
    const [image, setImage] = React.useState(null)
    const user = useSelector(selectUser)
    const token = user?.token

    const handleUploadImages = () => {
        const data = new FormData()
        data.append('image', image)
        makeRequestOne(URLS.PRODUCT_GALLERY + "/", 'POST', { 'Authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }, data, {})
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
                const errors = err?.response?.data?.errors

            }).finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <div className="d-sm-flex flex-wrap justify-content-between align-items-center pb-2">
                <h2 className="h3 py-2 me-2 text-center text-sm-start">
                    Add New Product
                </h2>
            </div>
            <Group className='d-none'>
                <FileInput value={image} onChange={setImage} />
                <Button onClick={handleUploadImages}>Upload image</Button>
            </Group>
            <AddProductForm />
        </>
    )
}

export default AddProduct