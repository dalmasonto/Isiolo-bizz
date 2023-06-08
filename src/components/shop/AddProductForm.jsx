import { FileInput, Grid, Loader, NumberInput, Select, Stack, TextInput, Textarea } from '@mantine/core'
import { useForm } from '@mantine/form'
import React from 'react'
import slugify from 'slugify'
import { makeRequestOne } from '../../config/config'
import { URLS } from '../../config/constants'
import useSwr from 'swr';
import { useSelector } from 'react-redux'
import { selectUser } from '../../providers/app/appSlice';
import { displayErrors } from '../../config/functions'
import { showNotification } from '@mantine/notifications'
import { IconAlertCircle, IconAlertTriangle } from '@tabler/icons'
import { useParams } from 'react-router-dom'

const AddProductForm = ({ updating, product }) => {

    const [loading, setLoading] = React.useState(false)

    const user = useSelector(selectUser)
    const token = user?.token
    const merchant = user?.user?.merchant

    const categoriesQuery = useSwr([URLS.CATEGORIES + "/", 'GET', {}, {}, {}], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params))
    const categoriesData = categoriesQuery?.data?.data?.data

    const productForm = useForm({
        initialValues: {
            "category_id": product?.category_id + "" ?? "",
            "name": product?.name ?? "",
            "description": product?.description ?? "",
            "allocated_items": product?.allocated_items ?? "",
            "assigned_items": product?.assigned_items ?? "",
            "available_items": product?.available_items ?? "",
            "price": parseFloat(product?.price) ?? "",
            "discount": parseFloat(product?.discount) ?? "",
            "configuration": product?.configuration ?? "[]",
            "poster": product?.poster ?? "",
            "files[]": null,
        }
    })

    const handleUploadFiles = () => {
        const files = productForm.values['files[]']
        console.log(files)
        setLoading(true)
        if(!files || files?.length === 0) {
            console.log("check")
            handleCreate([])
            return
        }
        else{
        makeRequestOne(URLS.MEDIA, 'POST', { 'CONTENT-TYPE': 'multipart/form-data' }, {'files[]': files}, {})
            .then((res) => {
                const images_ = res?.data?.data
                const images = images_?.map(image => image?.path)
                handleCreate(images)
            }).catch((err) => {
                console.log(err)
                const errors = err?.response?.data?.errors
                
            })
        }
    }

    const handleCreate = (images) => {
        let values = productForm.values
        values['merchant_id'] = merchant?.id
        values['slug'] = slugify(values['name'])
        values['category_id'] = parseInt(values['category_id'])
        values['configuration'] = "[]"
        
        if(updating){
            values['images'] = images.length > 0 ? images : JSON.parse(product?.images)
        }
        else{
            values['images'] = images?.length > 0 ? images : []
        }

        setLoading(true)
        let URL = URLS.PRODUCTS + "/"
        let METHOD = 'POST'
        if (updating) {
            URL = URLS.PRODUCTS + "/" + product?.id + "/"
            METHOD = 'PUT'
        }
        console.log(values)
        makeRequestOne(URL, METHOD, { 'Authorization': `Bearer ${token}` }, values, {})
            .then((res) => {
                showNotification({
                    title: `Product ${updating ? 'updated' : 'created'} successfully`,
                    message: `Product ${updating ? 'updated' : 'created'} successfully`,
                    color: 'teal',
                    autoClose: 5000,
                    icon: <IconAlertCircle />,
                })
                if (!updating) {
                    productForm.reset()
                }
            }).catch((err) => {
                const errors = err?.response?.data?.errors
                displayErrors(productForm, errors)
                showNotification({
                    title: `Product ${updating ? 'update' : 'creation'} failed`,
                    message: `Product ${updating ? 'update' : 'creation'} failed`,
                    color: 'red',
                    autoClose: 5000,
                    icon: <IconAlertTriangle />,
                })
            }).finally(() => {
                setLoading(false)
            })
    }
 

    return (
        <div>

            <form onSubmit={productForm.onSubmit((values) => handleUploadFiles())}>
                <Stack>
                    <TextInput
                        label={`Product name`}
                        placeholder="Enter product name max 50 characters"
                        required
                        {...productForm.getInputProps('name')}
                    />
                    <Textarea
                        label="Product description"
                        minRows={7}
                        required
                        {...productForm.getInputProps('description')}
                        placeholder='Enter product description max 500 characters'
                    />
                    <Grid>
                        <Grid.Col xs={6} md={6}>
                            <Select
                                label="Category"
                                searchable
                                data={categoriesData ? categoriesData?.map((category) => ({
                                    value: category.id + "",
                                    label: category?.name
                                })) : []}
                                required
                                nothingFound="Category not found"
                                {...productForm.getInputProps('category_id')}
                            />
                        </Grid.Col>
                        <Grid.Col xs={6} md={6}>
                            <FileInput
                                label="Product Image(s)"
                                placeholder="URL"
                                required
                                multiple
                                {...productForm.getInputProps('files[]')}
                            />
                        </Grid.Col>
                        <Grid.Col xs={6} md={4}>
                            <NumberInput
                                label="Allocated Items"
                                placeholder="4000"
                                required
                                {...productForm.getInputProps('allocated_items')}
                            />
                        </Grid.Col>
                        <Grid.Col xs={6} md={4}>
                            <NumberInput
                                label="Assigned Items"
                                placeholder="2000"
                                required
                                {...productForm.getInputProps('assigned_items')}
                            />
                        </Grid.Col>
                        <Grid.Col xs={6} md={4}>
                            <NumberInput
                                label="Available Items"
                                placeholder="2000"
                                required
                                {...productForm.getInputProps('available_items')}
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid>
                        <Grid.Col xs={6} md={6}>
                            <NumberInput
                                label="Price"
                                placeholder="4000"
                                required
                                {...productForm.getInputProps('price')}
                            />
                        </Grid.Col>
                        <Grid.Col xs={6} md={6}>
                            <NumberInput
                                label="Discount (%)"
                                placeholder="10"
                                {...productForm.getInputProps('discount')}
                            />
                        </Grid.Col>
                    </Grid>
                    <button className="btn btn-primary d-block w-100" type="submit">
                        <i className="ci-cloud-upload fs-lg me-2" />
                        {updating ? "Update" : "Upload"} Product
                        {
                            loading ?
                                <Loader color='white' ml="sm" size="sm" />
                                : null
                        }
                    </button>
                </Stack>
            </form>
        </div>
    )
}

export default AddProductForm
