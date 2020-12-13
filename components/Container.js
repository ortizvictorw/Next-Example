import Head from 'next/head'

const Container = (props) => {
    return (
        <div>
            <Head>
            <title>Primer Proyecto NEXT</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.1.0/flatly/bootstrap.min.css"/>
            </Head>
            <div>
                {props.children}
            </div>
            
        </div>
    )
}

export default Container
