import { Flex, Box } from "rebass"
import { Switch } from '@rebass/forms'
import { useColorMode } from "theme-ui"
import { useState } from "react"

export default () => {
    const [colorMode, setColorMode] = useColorMode()
    return (
        <Flex width="100vw">
            <Flex sx={{
                position: "absolute",
                right: "10px",
                top: "10px"
            }}>
                <Switch checked={colorMode == "default"} onClick={() => {
                    setColorMode(colorMode == "default" ? "light" : "default")
                }} />
            </Flex>
        </Flex>
    )
}