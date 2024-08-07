import { Box, Flex, Button, useColorModeValue, Text, Container, Input } from "@chakra-ui/react";

export default function MessageField() {
    return (
        <Container maxHeight={"100px"}>
            <Box bg={useColorModeValue("darkgray.400", "darkgray.700")} px={4} my={4} borderRadius={"5"}>
                <Input 
                type='text'
                value="hello"
                ref={(input) => input && input.focus()}/>
            </Box>
        </Container>
    );
}