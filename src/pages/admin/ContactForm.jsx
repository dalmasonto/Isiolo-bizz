import React, { useState } from 'react'
import { DataTable } from 'mantine-datatable';
import useSwr from 'swr';
import { URLS } from '../../config/constants';
import { makeRequestOne } from '../../config/config';
import { ActionIcon, Avatar, Box, Drawer, Group, ScrollArea, Stack, Text, Title } from '@mantine/core';
import { IconAlertCircle, IconAlertTriangle, IconEdit, IconEye, IconTrash } from '@tabler/icons';
import { modals } from '@mantine/modals';
import { useSelector } from 'react-redux';
import { selectToken } from '../../providers/app/appSlice';
import { showNotification } from '@mantine/notifications';
import { useDebouncedState, useDisclosure } from '@mantine/hooks';
import MerchantUpdateForm from '../../components/merchant/MerchantUpdateForm';
import CustomPagination from '../../components/shop/CustomPagination';

const ContactForm = () => {
  const [options, setOptions] = useDebouncedState({
    current_page: 1
  }, 200)
  const [opened, { open, close }] = useDisclosure(false);
  const [activeObject, setActiveObject] = useState(null)
  const token = useSelector(selectToken)

  const query = useSwr([URLS.CONTACT + "/", 'GET', {}, {}, { "page[number]": options?.current_page }], ([url, method, headers, data, params]) => makeRequestOne(url, method, headers, data, params), {
    refreshInterval: 36000
  })
  const queryData = query?.data?.data
  const data = queryData?.data
  const queryMeta = queryData?.meta

  const showInfo = (item) => {
    alert(JSON.stringify(item))
  }

  const editInfo = (item) => {
    setActiveObject(item)
    open()
  }


  const deleteItem = (id) => {

    makeRequestOne(`${URLS.CONTACT}/${id}`, 'DELETE', { 'Authorization': `Bearer ${token}` }, {}, {}).then(res => {
      showNotification({
        title: 'Feedback Deleted',
        message: 'Feedback has been deleted successfully',
        color: 'green',
        icon: <IconAlertCircle />,
      })
      query.mutate()
    }).catch(err => {
      showNotification({
        title: 'Feedback Deletion Failed',
        message: 'Feedback could not be deleted. Please try again later',
        color: 'red',
        icon: <IconAlertTriangle />,
      })
    })

  }

  const deleteRow = (item) => modals.openConfirmModal({
    title: `You are about to delete ${item?.name}'s Message!`,
    centered: true,
    radius: "lg",
    children: (
      <Text size="sm">
        Are you sure you want to delete {item?.name}'s message?
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
        title={`${activeObject?.name}'s Message`}
        scrollAreaComponent={ScrollArea.Autosize}
        zIndex={5000}
      >
        {
          activeObject && (
            <>
            <Title order={3} size={24} weight={500}>Subject: {activeObject?.subject}</Title>
              <Text>
                {activeObject?.content}
              </Text>
            </>
          )
        }
      </Drawer>
      <Stack spacing={10} align='start'>
        <Title weight={500}>Contact Messages</Title>
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
                            accessor: 'name', sortable: true, render: ({ name, logo }) => (
                              <Group>
                                <Avatar src={logo} size="lg" />
                                <Text>{name}</Text>
                              </Group>
                            )
                          },
                          { accessor: 'telephone' },
                          { accessor: 'email', sortable: true },
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
            <Title order={3} weight={400}>No merchants found</Title>
          )
        }
      </Stack>
    </div>
  )
}

export default ContactForm