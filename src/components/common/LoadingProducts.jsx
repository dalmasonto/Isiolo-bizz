import { Box, Text, Title } from '@mantine/core'
import React from 'react'

const LoadingProducts = ({ loading, productsLen }) => {
    return (
        <Box p="lg">
            {
                loading && <Text>Loading...</Text>
            }
            {
                !loading && productsLen === 0 && (
                    <>
                        <Title order={3} weight={400}>No products found</Title>
                    </>
                )
            }
        </Box>
    )
}

export default LoadingProducts