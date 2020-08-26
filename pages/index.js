import { useRef } from "react"
import { Flex, Heading, Text, Button } from "rebass"
import { Input } from "@rebass/forms"
import { useColorMode } from 'theme-ui'

export default () => {
    const [colorMode, setColorMode] = useColorMode()
    const email = useRef('')
    return (
        <Flex w="100vw" pt={["50px", "100px", "100px"]} flexDirection="column">
            <Heading m="auto" fontSize={[7, 7, 8]} sx={{
                "-webkit-background-clip": "text",
                "backgroundClip": "text !important",
                "-webkit-background-clip": "text !important",
                "-webkit-text-fill-color": "transparent",
                "background": colorMode == "light" ? "linear-gradient(to right,#f5ecdb,#000)" : "linear-gradient(to right,#fff, #d3ba98)"
            }}>ensio.</Heading>
            <Text mx="auto" fontWeight="bold">Two dimensional video calling</Text>
            <Text width={["90vw", "40vw", "40vw"]} mx="auto" sx={{ py: "10px" }}>Video platforms like Zoom, or Google Meet are a pain for students and offices, because of the constant speaking over each other, and the inability to move across a 2nd dimenstion and talk to your friend individually. Meet ensio, where you're able to drag and drop markers to create a board of video callers, where sound diffuses in a 2d plane just like in real life. With features like adjusable sound barriers to create soundproof rooms, and sharable whiteboard collaboration, you are able to emulate a work or school enviorment with ease! <Text as="span" color="highlight" fontWeight="bold">Sign up for the alpha today!</Text></Text>
            <Flex mx="auto" sx={{
                width: ["90vw", "35vw", "35vw"],
                flexDirection: ["column", "row", "row"]
            }}>
                <Input ref={email} type="email" mx={["auto !important", null, null]} sx={{ borderRadius: "5px" }} placeholder="neel@ensio.dev" />
                <Button m="auto" my={["10px", 0, 0]} ml={["auto", "15px", "15px"]} sx={{
                    bg: "secondary",
                    width: "150px",
                    ":hover": {
                        bg: "primary",
                        cursor: "pointer",
                        color: "secondary"
                    }
                }} onClick={() => {
                    window.location.href = `https://airtable.com/shrHgp8Ai2R7CXBjb?prefill_Email=${email.current.value}`
                }}>Sign up</Button>
            </Flex>
        </Flex >
    )
}
