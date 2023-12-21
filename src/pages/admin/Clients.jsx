import React, { useState } from 'react'
import { DataTable } from 'mantine-datatable';
import useSwr from 'swr';
import { URLS } from '../../config/constants';
import { limitChars, makeRequestOne } from '../../config/config';
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

const Clients = () => {
  const [options, setOptions] = useDebouncedState({
    current_page: 1
  }, 200)
  const [opened, { open, close }] = useDisclosure(false);
  const [activeObject, setActiveObject] = useState(null)
  const token = useSelector(selectToken)

  const query = useSwr([URLS.CLIENTS + "/", 'GET', {}, {}, { "page[number]": options?.current_page }], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params), {
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
        title: 'Merchant Deleted',
        message: 'Merchant has been deleted successfully',
        color: 'green',
        icon: <IconAlertCircle />,
      })
      query.mutate()
    }).catch(err => {
      showNotification({
        title: 'Merchant Deletion Failed',
        message: 'Merchant could not be deleted. Please try again later',
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
        size="lg"
        title={`Client - ${getFullName(activeObject)}`}
        scrollAreaComponent={ScrollArea.Autosize}
        zIndex={5000}
      >
        {
          activeObject && (
            <ClientForm isAdmin={true} client={activeObject} />
          )
        }
      </Drawer>
      <Stack spacing={10} align='start'>
        <Title weight={500}>Clients</Title>
        <Box className="w-100">
          {
            data?.length > 0 ? (
              <Stack>
              <CustomPagination {...queryMeta} onPageChange={changePage} noPadding={true} />
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
                        accessor: 'first_name', sortable: true, render: (item) => (
                          <Group>
                            <Avatar src={item?.avatar} size="sm" />
                            <Text>{limitChars(getFullName(item), 16)}</Text>
                          </Group>
                        )
                      },
                      { accessor: 'telephone' },
                      { accessor: 'email', sortable: true },
                      { accessor: 'state' },
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
                <CustomPagination {...queryMeta} onPageChange={changePage} noPadding={true} />
              </Stack>
            ) :
              <Title order={3} fw={400}>No Clients found!</Title>
          }
        </Box>
      </Stack>
    </div>
  )
}

export default Clients