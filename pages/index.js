import Head from 'next/head'


import Container from '../components/Container'
import Nav from '../components/Nav'
import CarrucelAccesible from '../components/CarrucelAccesible'


const Index = () => {
    return (
        <Container>
            <Head>
                <title>Home</title>
            </Head>
            <Nav/>
            <CarrucelAccesible />

        </Container>
    )
}

export default Index
