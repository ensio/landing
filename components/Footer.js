import { Flex, Link, Text } from "rebass"

let FootLink = ({ sx, ...props }) =>
    <Link sx={{
        color: "text",
        textDecoration: "none",
        ":hover": {
            textDecoration: "underline",
            cursor: "pointer"
        }
    }} {...props} />

export default () =>
    <Flex mt="auto" height="100px">
        <Text m="auto"><FootLink href="mailto:contact@ensio.live">Contact Me</FootLink> | <FootLink href="https://github.com/ensio">GitHub</FootLink> | <FootLink href="https://twitter.com/ensio_live">Twitter</FootLink></Text>
    </Flex>
