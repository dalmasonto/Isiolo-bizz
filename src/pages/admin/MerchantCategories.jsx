import React, { useState } from 'react'
import { DataTable } from 'mantine-datatable';
import useSwr from 'swr';
import { ActionIcon, Button, Drawer, Group, ScrollArea, Stack, Text, Title } from '@mantine/core';
import { IconAlertCircle, IconAlertTriangle, IconEdit, IconPlus, IconTrash } from '@tabler/icons';
import { modals } from '@mantine/modals';
import { useSelector } from 'react-redux';
import { showNotification } from '@mantine/notifications';
import { useDisclosure } from '@mantine/hooks';
import { URLS } from '../../config/constants';
import { makeRequestOne } from '../../config/config';
import { selectToken } from '../../providers/app/appSlice';
import MerchantCategoryForm from '../../components/shop/MerchantCategoryForm';

const MerchantCategories = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [activeCategory, setActiveCategory] = useState(null)
  const token = useSelector(selectToken)

  const categoriesQuery = useSwr([URLS.MERCHANT_CATEGORIES + "/", 'GET', {}, {}, {}], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params), {
    refreshInterval: 36000
  })
  const categoriesData = categoriesQuery?.data?.data?.data

  const showInfo = (item) => {
    alert(JSON.stringify(item))
  }

  const editInfo = (item) => {
    setActiveCategory(item)
    open()
  }

  const deleteItem = (id) => {

    makeRequestOne(`${URLS.MERCHANT_CATEGORIES}/${id}`, 'DELETE', { 'Authorization': `Bearer ${token}` }, {}, {}).then(res => {
      showNotification({
        title: 'Merchant Category Deleted',
        message: 'Merchant Category has been deleted successfully',
        color: 'green',
        icon: <IconAlertCircle />,
      })
      categoriesQuery.mutate()
    }).catch(err => {
      showNotification({
        title: 'Merchant Category Deletion Failed',
        message: 'Merchant Category could not be deleted. Please try again later',
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

  const addNew = () => modals.open({
    title: "Add New Category",
    size: "md",
    children: (
      <>
        <MerchantCategoryForm updating={false} onUpdate={categoriesQuery.mutate} />
      </>
    )
  })

  return (
    <div>
      <Drawer
        opened={opened}
        onClose={close}
        position='right'
        size="md"
        title={`${activeCategory?.name}`}
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {
          activeCategory && (
            <MerchantCategoryForm category={activeCategory} updating={true} onUpdate={categoriesQuery.mutate} />
          )
        }
      </Drawer>
      <Stack>
        <Group position='apart'>
          <Title weight={500}>Merchant Categories</Title>
          <Button onClick={addNew} radius="md" size='sm' leftIcon={<IconPlus />}>Add New</Button>
        </Group>

        {
          categoriesData && (
            <DataTable
              columns={
                [
                  {
                    accessor: 'name', title: '#',
                    width: '80px',
                    render: (item, i) => (
                      <>{i + 1}</>
                    )
                  },
                  { accessor: 'name', title: 'Name' },
                  {
                    accessor: 'actions',
                    title: <Text mr="xs">Actions</Text>,
                    textAlignment: 'right',
                    render: (item) => (
                      <Group spacing={4} position="right" noWrap>
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
              records={categoriesData}
              verticalSpacing={"md"}
              withBorder={true}
              withColumnBorders={true}
            />
          )
        }
      </Stack>
    </div>
  )
}

export default MerchantCategories