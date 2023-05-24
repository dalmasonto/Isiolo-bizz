import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import React from 'react'

const Provider = ({ children }) => {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{
            primaryColor: 'pink',
            // focusRing: 'always',
            // focusRingStyles: {
            //     inputStyles: (theme) => ({
            //         '&:focus': {
            //             // outline: 'none',
            //             // borderWidth: '1px',
            //             // // borderColor: '#fe696a',
            //             // borderStyle: 'solid',
            //             // boxShadow: `0 4px 10px -6px rgba(254, 105, 106, 0.35)`
            //         }
            //     }),
            // },
            
        }}>
            <ModalsProvider>
                {children}
                <Notifications position='bottom-left' />
            </ModalsProvider>
        </MantineProvider>
    )
}

export default Provider