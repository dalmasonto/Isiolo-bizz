import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import React from 'react'

const Provider = ({ children }) => {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <ModalsProvider>
                {children}
                <Notifications position='top-right' />
            </ModalsProvider>
        </MantineProvider>
    )
}

export default Provider