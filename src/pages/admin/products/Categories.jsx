import React, { useState } from 'react'
import { DataTable } from 'mantine-datatable';
import useSwr from 'swr';
import { ActionIcon, Avatar, Button, Drawer, Group, ScrollArea, Stack, Text, Title } from '@mantine/core';
import { IconAlertCircle, IconAlertTriangle, IconEdit, IconEye, IconPlus, IconTrash } from '@tabler/icons';
import { modals } from '@mantine/modals';
import { useSelector } from 'react-redux';
import { showNotification } from '@mantine/notifications';
import { useDisclosure } from '@mantine/hooks';
import { URLS } from '../../../config/constants';
import { makeRequestOne } from '../../../config/config';
import { selectToken } from '../../../providers/app/appSlice';
import ProductCategoryForm from '../../../components/shop/ProductCategoryForm';

const Categories = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [activeCategory, setActiveCategory] = useState(null)
  const token = useSelector(selectToken)

  const categoriesQuery = useSwr([URLS.CATEGORIES + "/", 'GET', {}, {}, {}], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params), {
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

    makeRequestOne(`${URLS.CATEGORIES}/${id}`, 'DELETE', { 'Authorization': `Bearer ${token}` }, {}, {}).then(res => {
      showNotification({
        title: 'Product Category Deleted',
        message: 'Product Category has been deleted successfully',
        color: 'green',
        icon: <IconAlertCircle />,
      })
      categoriesQuery.mutate()
    }).catch(err => {
      showNotification({
        title: 'Product Category Deletion Failed',
        message: 'Product Category could not be deleted. Please try again later',
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
        <ProductCategoryForm updating={false} onUpdate={categoriesQuery.mutate} />
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
            <ProductCategoryForm category={activeCategory} updating={true} onUpdate={categoriesQuery.mutate} />
          )
        }
      </Drawer>
      <Stack>
        <Group position='apart'>
          <Title weight={500}>ProductCategories</Title>
          <Button onClick={addNew} radius="md" size='sm' leftIcon={<IconPlus />}>Add New</Button>
        </Group>

        {
          categoriesData && (
            <DataTable
              columns={
                [
                  { accessor: 'name' },
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

export default Categories