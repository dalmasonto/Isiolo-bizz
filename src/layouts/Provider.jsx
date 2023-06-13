import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import React from 'react'

const Provider = ({ children }) => {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{
            primaryColor: 'pink'
        }}>
            <ModalsProvider>
                {children}
                <Notifications position='bottom-left' />
            </ModalsProvider>
        </MantineProvider>
    )
}

export default Provider