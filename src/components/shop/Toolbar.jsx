import { ActionIcon, Group } from '@mantine/core'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons'
import React from 'react'

const Toolbar = ({ current_page, total, onPageChange }) => {

    function hasPreviousPage(currentPage, total) {
        return currentPage > 1 && currentPage <= total;
    }

    function goPrev() {
        if(current_page > 1){
            const prevPage = current_page - 1
            onPageChange(prevPage)
        }
    }

    function goNext() {
        if(current_page < total){
            const nextPage = current_page + 1
            onPageChange(nextPage)
        }
    }

    return (
        <div className="d-flex justify-content-center justify-content-sm-between align-items-center pt-2 pb-4 pb-sm-5">
            <div className="d-flex flex-wrap">
                <div className="d-flex align-items-center flex-nowrap me-3 me-sm-4 pb-3">
                    <label
                        className="text-light opacity-75 text-nowrap fs-sm me-2 d-none d-sm-block"
                        htmlFor="sorting"
                    >
                        Sort by:
                    </label>
                    <select className="form-select" id="sorting">
                        <option>Popularity</option>
                        <option>Low - Hight Price</option>
                        <option>High - Low Price</option>
                        <option>Average Rating</option>
                        <option>A - Z Order</option>
                        <option>Z - A Order</option>
                    </select>
                    <span className="fs-sm text-light opacity-75 text-nowrap ms-2 d-none d-md-block">
                        of 287 products
                    </span>
                </div>
            </div>
            <Group className="d-flex pb-3" align='center'>
                <ActionIcon disabled={current_page >= total} onClick={goPrev}>
                    <IconArrowLeft />
                </ActionIcon>
                <span className="fs-md text-light">{current_page} / {total}</span>
                <ActionIcon disabled={current_page <= total} onClick={goNext}>
                    <IconArrowRight />
                </ActionIcon>
            </Group>
        </div>
    )
}

export default Toolbar