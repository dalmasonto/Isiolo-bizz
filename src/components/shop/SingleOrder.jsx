import { Anchor, Box, Button, Grid, Text, Title } from '@mantine/core'
import React from 'react'
import { getFullName } from '../../config/functions'
import { ItemSummary } from '../../pages/shop/Checkout'
import { CURRENCY } from '../../config/constants'
import { formatCurrency } from '../../config/config'

const ClientSummaryItem = ({ item }) => {
    return (
        <Grid>
            <Grid.Col md={4}>
                <Title order={5} weight={400} size={14}> {item.label}</Title>
            </Grid.Col>
            <Grid.Col md={8}>
                <Box>
                    {item.value}
                </Box>
            </Grid.Col>
        </Grid>
    )
}

const SingleOrder = ({ order, isAdmin }) => {
    return (
        <div>

            <div className="widget px-lg-2 py-2 mb-3">
                <ClientSummaryItem item={{label: 'Client', value: <Text>{getFullName(order?.client)}</Text>}} />
                <ClientSummaryItem item={{label: 'Phone Number', value: <Anchor size="sm" href={`tel:${order?.client?.telephone}`}>{order?.client?.telephone}</Anchor>}} />
                <ClientSummaryItem item={{label: 'Email', value: <Anchor size="sm" href={`mailto:${order?.client?.email}`}>{order?.client?.email}</Anchor>}} />
                {
                    !isAdmin ? (
                        <ClientSummaryItem item={{label: "Send STK Push", value: <Button radius="xl" size='xs'>Initiate Transaction</Button>}} />
                    ) : null
                }
                <Title mt={20} order={3} className="widget-title">Order summary</Title>
                {
                    order?.purchases?.map((item, i) => (
                        <ItemSummary key={`order_item_${i}`} item={item} />
                    ))
                }

                <ul className="list-unstyled fs-sm pt-3 pb-2 border-bottom">
                    <li className="d-flex justify-content-between align-items-center">
                        <span className="me-2">Subtotal:</span>
                        <span className="text-end">
                            {CURRENCY} {formatCurrency(parseFloat(order?.payable))}
                        </span>
                    </li>
                </ul>
                <h3 className="fw-normal text-center my-4">
                    Total: {CURRENCY} {formatCurrency(parseFloat(order?.payable))}
                </h3>

            </div>
        </div>
    )
}

export default SingleOrder