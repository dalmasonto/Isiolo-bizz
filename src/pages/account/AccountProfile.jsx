import { useForm } from '@mantine/form'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectToken, selectUser, updateUserAccount } from '../../providers/app/appSlice';
import { Loader, Select, TextInput } from '@mantine/core';
import { makeRequestOne } from '../../config/config';
import { URLS } from '../../config/constants';
import { showNotification } from '@mantine/notifications';
import { IconAlertCircle } from '@tabler/icons';
import { displayErrors } from '../../config/functions';

const AccountProfile = () => {
    const [loading, setLoading] = useState(false)
    const user = useSelector(selectUser)
    console.log(user)
    const token = useSelector(selectToken)
    const account = user?.user?.account
    const dispatch = useDispatch()
    const userForm = useForm({
        initialValues: {
            "telephone": account?.telephone,
            "national_id": account?.national_id,
            // "avatar": account?.avatar,
            "salutation": account?.salutation,
            "first_name": account?.first_name,
            "middle_name": account?.middle_name,
            "last_name": account?.last_name,
            "gender": account?.gender,
            "address_line_1": account?.address_line_1,
            "address_line_2": account?.address_line_2,
            "city": account?.city,
            "state": account?.state,
            "country": account?.country,
        },
    })

    const handleUpdate = (values) => {
        values['user_id'] = account.user_id
        setLoading(true)
        makeRequestOne(URLS.ACCOUNT + `/${account?.id}`, 'PUT', {
            Authorization: `Bearer ${token}`
        }, values, {}).then(res => {
            console.log(res)
            const accountData = res?.data?.data
            dispatch(updateUserAccount(accountData))
            showNotification({
                title: 'Update Success',
                message: 'You have successfully updated your profile.',
                color: 'green',
                icon: <IconAlertCircle />,
            })
        }).catch(err => {
            displayErrors(userForm, err?.response?.data?.errors)
            showNotification({
                title: 'Update Failed!',
                message: 'There has been an error, please try again later!',
                color: 'red',
                icon: <IconAlertCircle />,
            })
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <>
            <h2 className="h3 py-2 text-center text-sm-start">Settings</h2>
            {/* Tabs*/}
            <ul className="nav nav-tabs nav-justified" role="tablist">
                <li className="nav-item">
                    <a
                        className="nav-link px-0 active"
                        href="dashboard-settings.html#profile"
                        data-bs-toggle="tab"
                        role="tab"
                    >
                        <div className="d-none d-lg-block">
                            <i className="ci-user opacity-60 me-2" />
                            Profile
                        </div>
                        <div className="d-lg-none text-center">
                            <i className="ci-user opacity-60 d-block fs-xl mb-2" />
                            <span className="fs-ms">Profile</span>
                        </div>
                    </a>
                </li>
                {/* <li className="nav-item">
                    <a
                        className="nav-link px-0"
                        href="dashboard-settings.html#notifications"
                        data-bs-toggle="tab"
                        role="tab"
                    >
                        <div className="d-none d-lg-block">
                            <i className="ci-bell opacity-60 me-2" />
                            Notifications
                        </div>
                        <div className="d-lg-none text-center">
                            <i className="ci-bell opacity-60 d-block fs-xl mb-2" />
                            <span className="fs-ms">Notifications</span>
                        </div>
                    </a>
                </li> */}
            </ul>
            {/* Tab content*/}
            <div className="tab-content">
                {/* Profile*/}
                <div className="tab-pane fade show active" id="profile" role="tabpanel">
                    <div className="bg-secondary rounded-3 p-4 mb-4">
                        <div className="d-flex align-items-center">
                            <img
                                className="rounded"
                                src={account?.avatar}
                                width={90}
                                alt={account?.first_name}
                            />
                            <div className="ps-3">
                                <button
                                    className="btn btn-light btn-shadow btn-sm mb-2"
                                    type="button"
                                >
                                    <i className="ci-loading me-2" />
                                    Change <span className="d-none d-sm-inline">avatar</span>
                                </button>
                                <div className="p mb-0 fs-ms text-muted">
                                    Upload JPG, GIF or PNG image. 300 x 300 required.
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={userForm.onSubmit((values) => handleUpdate(values))}>
                        <div className="row gx-4 gy-3">
                            <div className="col-sm-4">
                                <TextInput
                                    label='First Name'
                                    placeholder='John'
                                    type="text"
                                    {...userForm.getInputProps('first_name')}
                                />
                            </div>
                            <div className="col-sm-4">
                                <TextInput
                                    label='Middle Name'
                                    placeholder='Doe'
                                    type="text"
                                    {...userForm.getInputProps('middle_name')}
                                />
                            </div>
                            <div className="col-sm-4">
                                <TextInput
                                    label='Last Name'
                                    placeholder='Doe'
                                    type="text"
                                    {...userForm.getInputProps('last_name')}
                                />
                            </div>
                            <div className="col-sm-6">
                                <TextInput
                                    label='Email'
                                    placeholder="example@gmail.com"
                                    type="text"
                                    value={user?.user?.email}
                                    disabled
                                />
                            </div>
                            <div className="col-sm-6">
                                <TextInput
                                    label='Telephone'
                                    placeholder='08012345678'
                                    type="text"
                                    {...userForm.getInputProps('telephone')}
                                />
                            </div>
                            <div className="col-sm-3">
                                <Select
                                    label='Gender'
                                    placeholder='Gender'
                                    type="text"
                                    {...userForm.getInputProps('gender')}
                                    data={[
                                        { value: 'male', label: 'Male' },
                                        { value: 'female', label: 'Female' },
                                        { value: 'prefer-not-to-say', label: 'Prefer not to say' }
                                    ]}
                                />
                            </div>
                            <div className="col-sm-3">
                                <TextInput
                                    label='Salutation'
                                    type="text"
                                    placeholder='Mr.'
                                    {...userForm.getInputProps('salutation')}
                                />
                            </div>
                            <div className="col-sm-6">
                                <TextInput
                                    label='Country'
                                    placeholder='Kenya'
                                    type="text"
                                    {...userForm.getInputProps('country')}
                                />
                            </div>
                            <div className="col-sm-6">
                                <TextInput
                                    label='State'
                                    placeholder='Nairobi'
                                    type="text"
                                    {...userForm.getInputProps('state')}
                                />
                            </div>
                            <div className="col-sm-6">
                                <TextInput
                                    label='City'
                                    placeholder='Nairobi'
                                    type="text"
                                    {...userForm.getInputProps('city')}
                                />
                            </div>
                            <div className="col-sm-6">
                                <TextInput
                                    label='Address Line 1'
                                    placeholder='1234 Main St'
                                    type="text"
                                    {...userForm.getInputProps('address_line_1')}
                                />
                            </div>
                            <div className="col-sm-6">
                                <TextInput
                                    label='Address Line 2'
                                    placeholder='Apartment, studio, or floor'
                                    type="text"
                                    {...userForm.getInputProps('address_line_2')}
                                />
                            </div>
                            <div className="col-12">
                                <hr className="mt-2 mb-4" />
                                <div className="d-sm-flex justify-content-end align-items-center">
                                    <button className="btn btn-primary mt-3 mt-sm-0" type="submit">
                                        Save changes
                                        {
                                            loading ?
                                                <Loader color='white' ml="sm" size="sm" />
                                                : null
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Notifications*/}
                {/* <div className="tab-pane fade" id="notifications" role="tabpanel">
                    <div className="bg-secondary rounded-3 p-4">
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="nf-disable-all"
                                data-master-checkbox-for="#notifocation-settings"
                            />
                            <label
                                className="form-check-label fw-medium"
                                htmlFor="nf-disable-all"
                            >
                                Enable/disable all notifications
                            </label>
                        </div>
                    </div>
                    <div id="notifocation-settings">
                        <div className="border-bottom p-4">
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="nf-product-sold"
                                    defaultChecked=""
                                />
                                <label className="form-check-label" htmlFor="nf-product-sold">
                                    Product sold notifications
                                </label>
                            </div>
                            <div className="form-text">
                                Send an email when someone purchased one of my products
                            </div>
                        </div>
                        <div className="border-bottom p-4">
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="nf-product-updated"
                                    defaultChecked=""
                                />
                                <label className="form-check-label" htmlFor="nf-product-updated">
                                    Product update notifications
                                </label>
                            </div>
                            <div className="form-text">
                                Send an email when a product I've purchased is updated
                            </div>
                        </div>
                        <div className="border-bottom p-4">
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="nf-product-comment"
                                    defaultChecked=""
                                />
                                <label className="form-check-label" htmlFor="nf-product-comment">
                                    Product comment notifications
                                </label>
                            </div>
                            <div className="form-text">
                                Send an email when someone comments on one of my products
                            </div>
                        </div>
                        <div className="border-bottom p-4">
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="nf-product-review"
                                    defaultChecked=""
                                />
                                <label className="form-check-label" htmlFor="nf-product-review">
                                    Product review notification
                                </label>
                            </div>
                            <div className="form-text">
                                Send an email when someone leaves a review with their rating
                            </div>
                        </div>
                        <div className="border-bottom p-4">
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="nf-daily-summary"
                                />
                                <label className="form-check-label" htmlFor="nf-daily-summary">
                                    Daily summary emails
                                </label>
                            </div>
                            <div className="form-text">
                                Send me a daily summary of all products sold, commented or reviewed
                            </div>
                        </div>
                    </div>
                    <div className="text-sm-end mt-4">
                        <button className="btn btn-primary" type="button">
                            Save changes
                        </button>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default AccountProfile