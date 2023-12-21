import React, { useState } from 'react'
import { DataTable } from 'mantine-datatable';
import useSwr from 'swr';
import { CURRENCY, ORDER_STATUS, URLS } from '../../config/constants';
import { formatCurrency, limitChars, makeRequestOne } from '../../config/config';
import { ActionIcon, Anchor, Avatar, Box, Drawer, Group, ScrollArea, Stack, Text, Title } from '@mantine/core';
import { IconAlertCircle, IconAlertTriangle, IconEye } from '@tabler/icons';
import { modals } from '@mantine/modals';
import { useSelector } from 'react-redux';
import { selectToken } from '../../providers/app/appSlice';
import { showNotification } from '@mantine/notifications';
import { useDebouncedState, useDisclosure } from '@mantine/hooks';
import CustomPagination from '../../components/shop/CustomPagination';
import { getFullName } from '../../config/functions';
import SingleOrder from '../../components/shop/SingleOrder';

const AdminOrders = () => {
  const [options, setOptions] = useDebouncedState({
    current_page: 1
  }, 200)
  const [opened, { open, close }] = useDisclosure(false);
  const [activeObject, setActiveObject] = useState(null)
  const token = useSelector(selectToken)

  const query = useSwr([URLS.ORDERS, 'GET', { Authorization: `Bearer ${token}` }, {}, { "page[number]": options?.current_page, include: "merchant,client,purchases" }], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params), {
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

    makeRequestOne(`${URLS.CLIENTS}/${id}`, 'DELETE', { 'Authorization': `Bearer ${token}` }, {}, {}).then(res => {
      showNotification({
        title: 'Order Deleted',
        message: 'Order has been deleted successfully',
        color: 'green',
        icon: <IconAlertCircle />,
      })
      query.mutate()
    }).catch(err => {
      showNotification({
        title: 'Order Deletion Failed',
        message: 'Order could not be deleted. Please try again later',
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
            <SingleOrder order={activeObject} isAdmin={true} />
          )
        }
      </Drawer>
      <Stack spacing={10} align='start'>
        <Title weight={500}>Orders</Title>
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
                            accessor: 'name', title: '#',
                            width: '80px',
                            render: (item, i) => (
                              <>{(options?.current_page * i) + 1}</>
                            )
                          },
                          {
                            accessor: 'merchant.name', sortable: true, render: (order) => (
                              <Group>
                                <Avatar src={order?.merchant?.logo} size="sm" />
                                <Text>{limitChars(order?.merchant?.name, 16)}</Text>
                              </Group>
                            )
                          },
                          {
                            accessor: 'client.name', sortable: true, render: ({ client }) => (
                              <>
                                <Text>{limitChars(getFullName(client), 16)}</Text>
                              </>
                            )
                          },
                          {
                            accessor: 'client.contact', render: ({ client }) => (
                              <>
                                <Anchor href={`tel:${client?.telephone}`}>{client?.telephone}</Anchor>
                                <br></br>
                                <Anchor href={`mailto:${client?.email}`}>{limitChars(client?.email, 16)}</Anchor>
                              </>
                            )
                          },
                          {
                            accessor: 'payable', render: ({ payable }) => (
                              <Text>{CURRENCY} {formatCurrency(payable)}</Text>
                            )
                          },
                          {
                            accessor: '_status', render: ({ _status }) => (
                              <Text>{ORDER_STATUS[`${_status}`]}</Text>
                            )
                          },
                          {
                            accessor: 'actions',
                            title: <Text mr="xs">Actions</Text>,
                            textAlignment: 'right',
                            render: (item) => (
                              <Group spacing={4} position="right" noWrap>
                                <ActionIcon color="green" onClick={() => showInfo(item)}>
                                  <IconEye size={16} />
                                </ActionIcon>
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
            <Title order={3} weight={400}>No orders found</Title>
          )
        }
      </Stack>
    </div>
  )
}

export default AdminOrders