import Head from 'next/head'

import Container from '../components/Container'
import Nav from '../components/Nav'

const About = () => {
    return (
        <Container>
            <Head>
                <title>About</title>
            </Head>
            <Nav/>
            <h1>About</h1>
        </Container>
    )
}

export default About
