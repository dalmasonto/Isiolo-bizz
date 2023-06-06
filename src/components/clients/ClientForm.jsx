import { BackgroundImage, Box, Grid, Loader, LoadingOverlay, Select, Stack, Text, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import React, { useState } from 'react'
import { clearCart, selectCartItems, selectCartTotal } from '../../providers/app/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { makeRequestOne } from '../../config/config'
import { URLS } from '../../config/constants'
import { IconAlertCircle, IconAlertOctagon, IconAlertTriangle } from '@tabler/icons'
import { modals } from '@mantine/modals'
import { showNotification } from '@mantine/notifications'
import { displayErrors, getFullName } from '../../config/functions'


const createOrderObjectsPerMerchant = (purchases) => {
    const transformedData = purchases.reduce((result, element) => {
        const existingElement = result.find(
            item => item.client_id === element.client_id && item.merchant_id === element.merchant_id
        );

        if (existingElement) {
            existingElement.payable += parseFloat(element.payable);
            existingElement._purchases.push(element._pid);
        } else {
            result.push({
                client_id: element.client_id,
                merchant_id: element.merchant_id,
                payable: parseFloat(element.payable),
                _purchases: [element._pid]
            });
        }

        return result;
    }, []);
    return transformedData
}

const ClientForm = ({ client, isAdmin }) => {

    const [loading, setLoading] = useState(false)
    const items = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)
    const dispatch = useDispatch()


    const clientForm = useForm({
        initialValues: {
            // "merchant_id": 1,
            "telephone": isAdmin ? client?.telephone : "",
            "email": isAdmin ? client?.email : "",
            "national_id": isAdmin ? client?.national_id : "",
            "avatar": isAdmin ? client?.avatar : "",
            "salutation": isAdmin ? client?.salutation : "",
            "first_name": isAdmin ? client?.first_name : "",
            "middle_name": isAdmin ? client?.middle_name : "",
            "last_name": isAdmin ? client?.last_name : "",
            "gender": isAdmin ? client?.gender : "",
            "address_line_1": isAdmin ? client?.address_line_1 : "",
            "address_line_2": isAdmin ? client?.address_line_2 : "",
            "city": isAdmin ? client?.city : "",
            "state": isAdmin ? client?.state : "",
            "country": isAdmin ? client?.country : ""
        },
        validate: {
            first_name: value => value === "" ? "First name is required" : null,
            middle_name: value => value === "" ? "MIddle name is required" : null,
            last_name: value => value === "" ? "Last name is required" : null,
            telephone: value => value === "" ? "Phone number is required" : null,
            email: value => value === "" ? "Your email is required" : null,
            // national_id: value => value === "" ? "Enter your national ID" : null,
            // salutation: value => value === "" ? "Enter your identification" : null,
            // gender: value => value === "" ? "Select your gender" : null,
            // city: value => value === "" ? "Enter city" : null,
            // state: value => value === "" ? "Enter your state" : null,
            // country: value => value === "" ? "Select your country" : null,
        }
    })

    const openSuccessModal = () => modals.open({
        // title: "Order placed successfully!",
        radius: "lg",
        size: "md",
        centered: true,
        padding: 0,
        styles: {
            header: {
                display: "None"
            }
        },
        children: (
            <>
                <BackgroundImage opacity={0.9} src='https://www.kindpng.com/picc/m/226-2263940_transparent-clipart-cornici-ice-skating-congrats-hd-png.png' >
                    <Stack p={50}>
                        <Title align='center'>Congratulations</Title>
                        <Text align='center' size={"xl"}>
                            🎉🎉🎉
                        </Text>
                        {/* <Title order={2} align='center'>Order Placed</Title> */}
                        <Title order={3} weight={500} align="center" px={40}>
                            Your order has been successfully placed
                        </Title>
                    </Stack>
                </BackgroundImage>
            </>
        )
    })

    const handleCreateOrder = (order) => {
        makeRequestOne(URLS.ORDERS, 'POST', {}, order, {}).then(res => {
            showNotification({
                title: `Order Successful`,
                message: 'Your order has been succesffully placed!',
                color: 'green',
                icon: <IconAlertCircle />,
            })
        }).catch(err => {
            showNotification({
                title: `Placing order Failed!`,
                message: 'There has been an error, please try again later!',
                color: 'red',
                icon: <IconAlertTriangle />,
            })
        })
    }

    const placeAllOrders = (ordersToBePlaced) => {
        Promise.all(ordersToBePlaced)
            .then(responses => {
                showNotification({
                    title: `Order Successful`,
                    message: 'Your order has been succesffully placed!',
                    color: 'green',
                    icon: <IconAlertCircle />,
                })
            })
            .catch(error => {
                console.error('Error:', error);
            }).finally(() => {
                // clientForm.reset()
                // dispatch(clearCart())
                setLoading(false)
                // openSuccessModal()
            });
    }

    const handlePostCartItem = async (item, client_id) => {
        const purchase = {
            "merchant_id": item?.product?.merchant_id,
            "product_id": item?.product?.id,
            "client_id": client_id,
            "payable": item?.qty * item?.product?.price,
            "discount": "",
            "balance": "",
            "quantity": item?.qty,
            "description": ""
        }
        return await makeRequestOne(URLS.PURCHASE + "/", 'POST', {}, purchase, {})
    }


    const postAllCartItems = (client_id, clientDetails) => {

        const allPurchasedItemsPostRequests = items?.map(item => handlePostCartItem(item, client_id))

        Promise.all(allPurchasedItemsPostRequests)
            .then(responses => {
                const PURCHASES = responses.map(response => {
                    const respData = response.data.data
                    return respData
                });

                const ORDERS = createOrderObjectsPerMerchant(PURCHASES)

                const allOrdersToBePlaced = ORDERS?.map(order => handleCreateOrder(order))
                placeAllOrders(allOrdersToBePlaced)
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }

    const handleCheckout = () => {
        if (!isAdmin) {
            setLoading(true)
            const clientDetails = clientForm.values
            if (items?.length > 0) {
                makeRequestOne(URLS.CLIENTS, 'POST', {}, clientDetails, {}).then(res => {
                    if (res?.status === 201) {
                        const clientDetails = res?.data?.data
                        const client_id = res?.data?.data?.id
                        postAllCartItems(client_id, clientDetails)
                    }
                }).catch(err => {
                    displayErrors(clientForm, err?.response?.data?.errors)
                })
            }
            else {
                setLoading(false)
                showNotification({
                    title: "Cart Empty!",
                    message: "Your cart is empty! Add some items to checkout",
                    color: 'indigo',
                    icon: <IconAlertOctagon />
                })
            }
            return
        }
        showNotification({
            title: "Client View only",
            message: "You can't update the client"
        })
    }

    return (
        <div>
            <Box className='position-relative'>
                <LoadingOverlay visible={loading} />
                <form onSubmit={clientForm.onSubmit((values) => handleCheckout())}>
                    <Grid>
                        <Grid.Col md={6}>
                            <TextInput
                                label="First Name"
                                withAsterisk
                                placeholder='First Name'
                                {...clientForm.getInputProps('first_name')}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <TextInput
                                label="Middle Name"
                                withAsterisk
                                placeholder='Middle Name'
                                {...clientForm.getInputProps('middle_name')}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <TextInput
                                label="Last Name"
                                withAsterisk
                                placeholder='Last Name'
                                {...clientForm.getInputProps('last_name')}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <TextInput
                                label="National ID"
                                placeholder='your National ID No.'
                                {...clientForm.getInputProps('national_id')}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <TextInput
                                label="Email"
                                withAsterisk
                                placeholder='Email'
                                {...clientForm.getInputProps('email')}
                            />
                        </Grid.Col>
                        <Grid.Col md={4}>
                            <TextInput
                                label='Telephone'
                                placeholder='08012345678'
                                type="text"
                                {...clientForm.getInputProps('telephone')}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Select
                                label='Gender'
                                placeholder='Gender'
                                type="text"
                                {...clientForm.getInputProps('gender')}
                                data={[
                                    { value: 'male', label: 'Male' },
                                    { value: 'female', label: 'Female' },
                                    { value: 'prefer-not-to-say', label: 'Prefer not to say' }
                                ]}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <TextInput
                                label='Salutation'
                                type="text"
                                placeholder='Mr.'
                                {...clientForm.getInputProps('salutation')}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Select
                                label='Country'
                                placeholder='Kenya'
                                type="text"
                                {...clientForm.getInputProps('country')}
                                data={[
                                    { value: "Kenya", label: "Kenya" }
                                ]}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <TextInput
                                label='State'
                                placeholder='Nairobi'
                                type="text"
                                {...clientForm.getInputProps('state')}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <TextInput
                                label='City'
                                placeholder='Nairobi'
                                type="text"
                                {...clientForm.getInputProps('city')}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <TextInput
                                label='Address Line 1'
                                placeholder='1234 Main St'
                                type="text"
                                {...clientForm.getInputProps('address_line_1')}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <TextInput
                                label='Address Line 2'
                                placeholder='Apartment, studio, or floor'
                                type="text"
                                {...clientForm.getInputProps('address_line_2')}
                            />
                        </Grid.Col>
                    </Grid>
                    {
                        !isAdmin && (
                            <button className='btn btn-primary btn-shadow d-block w-100 mt-4' type='submit'>
                                Place Order
                                {
                                    loading ?
                                        <Loader color='white' ml="sm" size="sm" />
                                        : null
                                }
                            </button>
                        )
                    }
                </form>
            </Box>
        </div>
    )
}

export default ClientForm