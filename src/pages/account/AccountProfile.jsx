import { useForm } from '@mantine/form'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectToken, selectUser, updateUserAccount } from '../../providers/app/appSlice';
import { ActionIcon, FileInput, Group, Loader, Select, TextInput } from '@mantine/core';
import { makeRequestOne } from '../../config/config';
import { URLS } from '../../config/constants';
import { showNotification } from '@mantine/notifications';
import { IconAlertCircle, IconUpload } from '@tabler/icons';
import { displayErrors } from '../../config/functions';

const AccountProfile = ({isAdmin, accountFromAdmin, onUpdate}) => {
    const [loading, setLoading] = useState(false)
    const user = useSelector(selectUser)
    console.log(user)
    const token = useSelector(selectToken)
    const account = isAdmin ? accountFromAdmin : user?.user?.account
    const dispatch = useDispatch()

    const avatarForm = useForm({
        initialValues: {
            avatar: null
        },
        validate: {
            avatar: value => value === null ? "Profile photo is required" : null
        }
    })

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
            "user_id": account?.user_id,
        },
    })

    const handleUploadAvatar = () => {
        const files = avatarForm.values['avatar']
        setLoading(true)
        makeRequestOne(URLS.MEDIA, 'POST', { 'CONTENT-TYPE': 'multipart/form-data' }, { 'files[]': files }, {})
            .then((res) => {
                const images_ = res?.data?.data
                const avatar = images_[0].path
                userForm.setFieldValue('avatar', avatar)
                const obj = { avatar: avatar}
                if (!isAdmin){
                    obj['first_name'] = "No name"
                }
                handleUpdate(obj)
            }).catch((err) => {
                console.log(err)
                const errors = err?.response?.data?.errors

            })
    }

    const handleUpdate = (values) => {

        setLoading(true)
        let URL = URLS.ACCOUNT + `/${account?.id}`
        let METHOD = 'PUT'
        if (!account) {
            METHOD = 'POST'
            URL = URLS.ACCOUNT
            values['user_id'] = user?.user?.id
        }
        makeRequestOne(URL, METHOD, {
            Authorization: `Bearer ${token}`
        }, values, {}).then(res => {
            const accountData = res?.data?.data
            if(isAdmin){
                onUpdate && onUpdate()
            }
            else{
                dispatch(updateUserAccount(accountData))
            }
            showNotification({
                title: 'Update Success',
                message: 'You have successfully updated the profile.',
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
            <h2 className="h3 py-2 text-center text-sm-start">Account Settings</h2>
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
                                <form onSubmit={avatarForm.onSubmit((values) => handleUploadAvatar())}>
                                    <Group>
                                        <FileInput
                                            radius="xl"
                                            color='red'
                                            label=''
                                            placeholder='Select Avatar'
                                            accept='image/*'
                                            type="text"
                                            {...avatarForm.getInputProps('avatar')}
                                            style={{
                                                width: "150px"
                                            }}
                                        />
                                        <ActionIcon type='submit' size={32} color='red' radius={"xl"} variant='filled'>
                                            <IconUpload size={18} />
                                        </ActionIcon>
                                    </Group>
                                </form>
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
                                    value={isAdmin ? accountFromAdmin?.user?.email : user?.user?.email}
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
            </div>
        </>
    )
}

export default AccountProfile