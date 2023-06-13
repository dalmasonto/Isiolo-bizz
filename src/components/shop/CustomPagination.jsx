import { Box, Pagination } from '@mantine/core'
import React from 'react'
import { ITEMS_PER_PAGE } from '../../config/constants'

const CustomPagination = ({current_page, total, onPageChange, noPadding}) => {
    return (
        <Box py={noPadding ? 0 : 60}>
            <Pagination align='center' onChange={onPageChange} value={current_page ? current_page : 1} position='center' size={'md'} color='red' total={total ? Math.ceil(total / ITEMS_PER_PAGE) : 1} />
        </Box>
    )
}

export default CustomPagination