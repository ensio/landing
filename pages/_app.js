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
            </Head>
            <Flex flexDirection="column" minHeight="100vh">
                <Nav />
                <Component {...props} />
                <Footer />
            </Flex>
        </ThemeProvider>
    )
}