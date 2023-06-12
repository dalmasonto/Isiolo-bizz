import { Box, Card, Center, Container, Grid, Image, Stack, Text, Title, useMantineTheme } from '@mantine/core'
import React from 'react'

const partners = [
    "/assets/images/partners/e4i.jpg",
    "/assets/images/partners/DRIC.png",
    "/assets/images/partners/eu.jpg",
    "/assets/images/partners/kenya.jpeg",
    "/assets/images/partners/zebra.jpeg",
]

const Partners = () => {
    const theme = useMantineTheme()
    return (
        <Box my={100}>
            <Stack align='center' spacing={0} mb="md">
                <Text align='center' size="sm">Sponsored By</Text>
                <Title align='center' weight={500} size={42}>Partners</Title>
            </Stack>
            <Container size="lg">
                <Grid justify='center'>
                    {
                        partners.map((partner, i) => (
                            <Grid.Col key={`partner_${i}`} md={3} sm={6} span={6}>
                                <Card radius="md">
                                    <Center>
                                        <Image src={partner} width={"150px"} />
                                    </Center>
                                </Card>
                            </Grid.Col>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default Partners