import React from "react"
import { ThemeProvider } from "theme-ui"
import theme from "../components/theme"
import Head from "next/head"
import { Flex } from "rebass"
import Footer from "../components/Footer"
import Nav from "../components/Nav"

export default ({ Component, props }) => {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>ensio</title>
                <link rel="icon" href="/static/logo.png" />
                <meta name="title" content="ensio" />
                <meta name="description" content="Two dimensional video calling" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ensio.now.sh" />
                <meta property="og:title" content="ensio" />
                <meta property="og:description" content="Two dimensional video calling" />
                <meta property="og:image" content="https://ensio.now.sh/static/front.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://ensio.now.sh" />
                <meta property="twitter:title" content="ensio" />
                <meta property="twitter:description" content="Two dimensional video calling" />
                <meta property="twitter:image" content="https://ensio.now.sh/static/front.png" />
            </Head>
            <Flex flexDirection="column" minHeight="100vh">
                <Nav />
                <Component {...props} />
                <Footer />
            </Flex>
            <style jsx global>{`
    * {
        transition: all 0.2s;
    }
    `}</style>
        </ThemeProvider>
    )
}