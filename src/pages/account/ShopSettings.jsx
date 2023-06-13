import { useForm } from '@mantine/form'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectMerchant, selectToken, selectUser, updateMerchantAccount, updateUserAccount } from '../../providers/app/appSlice';
import { ActionIcon, Button, FileButton, FileInput, Group, Loader, Select, TextInput } from '@mantine/core';
import { makeRequestOne } from '../../config/config';
import { URLS } from '../../config/constants';
import { showNotification } from '@mantine/notifications';
import { IconAlertCircle, IconUpload } from '@tabler/icons';
import { displayErrors } from '../../config/functions';
import slugify from 'slugify';
import MerchantUpdateForm from '../../components/merchant/MerchantUpdateForm';

const ShopProfile = () => {

    const merchant = useSelector(selectMerchant)
    return (
        <>
            <h2 className="h3 py-2 text-center text-sm-start">Merchant Settings</h2>
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
                    <MerchantUpdateForm merchant={merchant} isAdmin={false} />
                </div>

            </div>
        </>
    )
}

export default ShopProfile