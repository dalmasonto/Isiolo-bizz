import React, { useState } from 'react'
import { DataTable } from 'mantine-datatable';
import useSwr from 'swr';
import { URLS } from '../../config/constants';
import { limitChars, makeRequestOne } from '../../config/config';
import { ActionIcon, Avatar, Box, Button, Drawer, Group, ScrollArea, Stack, Text, Title } from '@mantine/core';
import { IconAlertCircle, IconAlertTriangle, IconEdit, IconEye, IconPlus, IconTrash } from '@tabler/icons';
import { modals } from '@mantine/modals';
import { useSelector } from 'react-redux';
import { selectToken } from '../../providers/app/appSlice';
import { showNotification } from '@mantine/notifications';
import { useDebouncedState, useDisclosure } from '@mantine/hooks';
import MerchantUpdateForm from '../../components/merchant/MerchantUpdateForm';
import SignUpForm from '../../components/auth/SignUpForm';
import CustomPagination from '../../components/shop/CustomPagination';
import AccountProfile from '../account/AccountProfile';
import { getFullName } from '../../config/functions';

const Users = () => {
  const [options, setOptions] = useDebouncedState({
    current_page: 1
  }, 200)
  const [opened, { open, close }] = useDisclosure(false);
  const [addOpened, handlers] = useDisclosure(false);
  const [activeUser, setActiveUser] = useState(null)
  const token = useSelector(selectToken)

  const usersQuery = useSwr([URLS.ACCOUNT + "/", 'GET', { 'Authorization': `Bearer ${token}` }, {}, { 'include': 'user', "page[number]": options?.current_page }], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params), {
    refreshInterval: 36000,
    revalidateIfStale: true
  })
  const usersData = usersQuery?.data?.data?.data
  const queryMeta = usersQuery?.data?.data?.meta

  const editInfo = (item) => {
    setActiveUser(item)
    open()
  }


  const deleteItem = (id) => {

    makeRequestOne(`${URLS.ACCOUNT}/${id}`, 'DELETE', { 'Authorization': `Bearer ${token}` }, {}, {}).then(res => {
      showNotification({
        title: 'User Deleted',
        message: 'User has been deleted successfully',
        color: 'green',
        icon: <IconAlertCircle />,
      })
      usersQuery.mutate()
    }).catch(err => {
      showNotification({
        title: 'User Deletion Failed',
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
        Are you sure you want to delete {item?.name}?
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
        size="xl"
        title={`${activeUser?.name}`}
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {
          activeUser && (
            <AccountProfile isAdmin={true} accountFromAdmin={activeUser} onUpdate={usersQuery.mutate} />
          )
        }
      </Drawer>
      <Drawer
        opened={addOpened}
        onClose={handlers.close}
        position='right'
        size="lg"
        title={`Add new User`}
        scrollAreaComponent={ScrollArea.Autosize}
      >
        <SignUpForm isAdmin={true} onUpdate={usersQuery.mutate} />
      </Drawer>
      <Stack align='start'>
        <Group className='w-100' align='center' position='apart'>
          <Title mb="md" weight={500}>Users</Title>
          <Button size='sm' radius="md" onClick={handlers.open} leftIcon={<IconPlus size={18} />}>User</Button>
        </Group>
        <CustomPagination {...queryMeta} onPageChange={changePage} noPadding={true} />
        <Box className='w-100'>
          {
            usersData && (
              <DataTable
                columns={
                  [
                    {
                      accessor: 'name', sortable: true, render: (item) => (
                        <Group>
                          <Avatar src={item?.avatar} size="lg" />
                          <Text>{limitChars(getFullName(item), 16)}</Text>
                        </Group>
                      )
                    },
                    { accessor: 'telephone' },
                    { accessor: 'user.email', sortable: true, render: ({user}) => (
                      <Text>{limitChars(user?.email, 16)}</Text>
                    ) },
                    { accessor: 'state' },
                    {
                      accessor: 'actions',
                      title: <Text mr="xs">Actions</Text>,
                      textAlignment: 'right',
                      render: (item) => (
                        <Group spacing={4} position="right" noWrap>
                          {/* <ActionIcon color="green" onClick={() => showInfo(item)}>
                        <IconEye size={16} />
                      </ActionIcon> */}
                          <ActionIcon color="blue" onClick={() => editInfo(item)}>
                            <IconEdit size={16} />
                          </ActionIcon>
                          <ActionIcon color="red" onClick={() => deleteRow(item)}>
                            <IconTrash size={16} />
                          </ActionIcon>
                        </Group>
                      ),
                    },
                  ]}
                records={usersData}
                verticalSpacing={"xs"}
                withBorder={true}
                withColumnBorders={true}
              />
            )
          }
        </Box>
        <CustomPagination {...queryMeta} onPageChange={changePage} noPadding={true} />
      </Stack>
    </div>
  )
}

export default Users