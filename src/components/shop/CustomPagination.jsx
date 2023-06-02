import { Box, Pagination } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

const CustomPagination = ({current_page, total, onPageChange}) => {
    return (
        <Box py={60}>
            <Pagination align='center' onChange={onPageChange} value={current_page ? current_page : 1} position='center' size={'md'} color='red' total={total ? total : 1} />
        </Box>
    )
}

export default CustomPagination