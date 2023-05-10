import { Box, Pagination } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

const CustomPagination = () => {
    return (
        <Box py={60}>
            <Pagination align='center' position='center' size={'md'} color='red' total={10} />
        </Box>
    )
}

export default CustomPagination