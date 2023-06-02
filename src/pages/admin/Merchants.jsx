import React, { useState } from 'react'
import { DataTable } from 'mantine-datatable';
import useSwr from 'swr';
import { URLS } from '../../config/constants';
import { makeRequestOne } from '../../config/config';
import { ActionIcon, Avatar, Drawer, Group, ScrollArea, Text, Title } from '@mantine/core';
import { IconAlertCircle, IconAlertTriangle, IconEdit, IconEye, IconTrash } from '@tabler/icons';
import { modals } from '@mantine/modals';
import { useSelector } from 'react-redux';
import { selectToken } from '../../providers/app/appSlice';
import { showNotification } from '@mantine/notifications';
import { useDisclosure } from '@mantine/hooks';
import MerchantUpdateForm from '../../components/merchant/MerchantUpdateForm';

const Merchants = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [activeMerchant, setActiveMerchant] = useState(null)
  const token = useSelector(selectToken)

  const merchantsQuery = useSwr([URLS.MERCHANTS + "/", 'GET', {}, {}, {}], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params), {
    refreshInterval: 36000
  })
  const merchantsData = merchantsQuery?.data?.data?.data

  const showInfo = (item) => {
    alert(JSON.stringify(item))
  }

  const editInfo = (item) => {
    setActiveMerchant(item)
    open()
  }


  const deleteItem = (id) => {

    makeRequestOne(`${URLS.MERCHANTS}/${id}`, 'DELETE', { 'Authorization': `Bearer ${token}` }, {}, {}).then(res => {
      showNotification({
        title: 'Merchant Deleted',
        message: 'Merchant has been deleted successfully',
        color: 'green',
        icon: <IconAlertCircle />,
      })
      merchantsQuery.mutate()
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
        Are you sure you want to delete {item?.name}?
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => { },
    onConfirm: () => deleteItem(item?.id),
  });

  return (
    <div>
      <Drawer
        opened={opened}
        onClose={close}
        position='right'
        size="xl"
        title={`${activeMerchant?.name}`}
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {
          activeMerchant && (
            <MerchantUpdateForm isAdmin={true} merchant={activeMerchant} onUpdate={merchantsQuery.mutate} />
          )
        }
      </Drawer>
      <Title mb="md" weight={500}>Merchants</Title>
      {
        merchantsData && (
          <DataTable
            columns={
              [
                { accessor: 'name', sortable: true, render: ({name, logo}) => (
                  <Group>
                    <Avatar src={logo} size="lg" />
                    <Text>{name}</Text>
                  </Group>
                ) },
                { accessor: 'telephone' },
                { accessor: 'email', sortable: true },
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
            records={merchantsData}
            verticalSpacing={"md"}
            withBorder={true}
            withColumnBorders={true}
          />
        )
      }
    </div>
  )
}

export default Merchants