import React, { useState } from 'react'
import { DataTable } from 'mantine-datatable';
import useSwr from 'swr';
import { CURRENCY, ORDER_STATUS, URLS } from '../../config/constants';
import { formatCurrency, limitChars, makeRequestOne } from '../../config/config';
import { ActionIcon, Avatar, Box, Drawer, Group, ScrollArea, Stack, Text, Title } from '@mantine/core';
import { IconAlertCircle, IconAlertTriangle, IconEdit, IconEye, IconTrash } from '@tabler/icons';
import { modals } from '@mantine/modals';
import { useSelector } from 'react-redux';
import { selectToken } from '../../providers/app/appSlice';
import { showNotification } from '@mantine/notifications';
import { useDebouncedState, useDisclosure } from '@mantine/hooks';
import CustomPagination from '../../components/shop/CustomPagination';
import ClientForm from '../../components/clients/ClientForm';
import { getFullName } from '../../config/functions';
import { selectMerchant } from '../../providers/app/appSlice';
import SingleOrder from '../../components/shop/SingleOrder';

const Statements = () => {

    const [options, setOptions] = useDebouncedState({
        current_page: 1
    }, 200)

    const [opened, { open, close }] = useDisclosure(false);
    const [activeObject, setActiveObject] = useState(null)
    const token = useSelector(selectToken)
    const merchant = useSelector(selectMerchant)

    const query = useSwr([URLS.STATEMENT, 'GET', { Authorization: `Bearer ${token}` }, {}, { "page[number]": options?.current_page, "filter[merchant_id]": merchant?.id, include: "merchant,transaction" }], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params), {
        refreshInterval: 36000
    })
    const queryData = query?.data?.data
    const data = queryData?.data
    const queryMeta = queryData?.meta

    const showInfo = (item) => {
        setActiveObject(item)
        open()
    }

    const editInfo = (item) => {
        setActiveObject(item)
        open()
    }


    const deleteItem = (id) => {

        makeRequestOne(`${URLS.STATEMENT}/${id}`, 'DELETE', { 'Authorization': `Bearer ${token}` }, {}, { include: "merchant, client" }).then(res => {
            showNotification({
                title: 'Statement Deleted',
                message: 'Statement has been deleted successfully',
                color: 'green',
                icon: <IconAlertCircle />,
            })
            query.mutate()
        }).catch(err => {
            showNotification({
                title: 'Statement Deletion Failed',
                message: 'Statement could not be deleted. Please try again later',
                color: 'red',
                icon: <IconAlertTriangle />,
            })
        })

    }

    const deleteRow = (item) => modals.openConfirmModal({
        title: `You are about to delete ${item?.name}!`,
        centered: true,
        radius: "lg",
        children: (
            <Text size="sm">
                Are you sure you want to delete {getFullName(item?.name)}?
            </Text>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onCancel: () => { },
        onConfirm: () => deleteItem(item?.id),
    });

    const changePage = (page_number) => {
        setOptions(current => ({ ...current, current_page: page_number }))
    }

    return (
        <div>
            <Drawer
                opened={opened}
                onClose={close}
                position='right'
                size="md"
                title={`Order By - ${getFullName(activeObject?.client)}`}
                scrollAreaComponent={ScrollArea.Autosize}
                zIndex={5000}
            >
                {
                    activeObject && (
                        <SingleOrder order={activeObject} isAdmin={false} />
                    )
                }
            </Drawer>
            <Stack spacing={10} align='start'>
                <Title weight={500}>Statements</Title>
                {
                    data?.length > 0 ? (
                        <>
                            <CustomPagination {...queryMeta} onPageChange={changePage} noPadding={true} />
                            <Box className="w-100">
                                {
                                    data && (
                                        <DataTable
                                            columns={
                                                [
                                                    {
                                                        accessor: 'debit', sortable: true, render: (order) => (
                                                            <Text>{limitChars(getFullName(order?.client), 16)}</Text>
                                                        )
                                                    },
                                                    { accessor: 'credit' },
                                                    { accessor: 'balance', sortable: true },
                                                    {
                                                        accessor: 'actions',
                                                        title: <Text mr="xs">Actions</Text>,
                                                        textAlignment: 'right',
                                                        render: (item) => (
                                                            <Group spacing={4} position="right" noWrap>
                                                                {/* <ActionIcon color="green" onClick={() => showInfo(item)}>
                                                                    <IconEye size={16} />
                                                                </ActionIcon> */}
                                                                {/* <ActionIcon color="blue" onClick={() => editInfo(item)}>
                                                                    <IconEdit size={16} />
                                                                    </ActionIcon> */}
                                                                {/* <ActionIcon color="red" onClick={() => deleteRow(item)}>
                                                                    <IconTrash size={16} />
                                                                    </ActionIcon> */}
                                                            </Group>
                                                        ),
                                                    },
                                                ]}
                                            records={data}
                                            verticalSpacing={"md"}
                                            withBorder={true}
                                            withColumnBorders={true}
                                        />
                                    )
                                }
                            </Box>
                            <CustomPagination {...queryMeta} onPageChange={changePage} noPadding={true} />
                        </>
                    ) : (
                        <Title order={3} weight={400}>No statements found</Title>
                    )
                }
            </Stack>
        </div>
    )
}

export default Statements