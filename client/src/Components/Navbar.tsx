import { Box, Flex, Button, useColorModeValue, Text, Container } from "@chakra-ui/react";


export default function Navbar() {


	return (
		<Container maxW={"900px"}>
			<Box bg={useColorModeValue("gray.400", "gray.700")} px={4} my={4} borderRadius={"5"}>
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
					{/* LEFT SIDE */}
					<Flex
						justifyContent={"center"}
						alignItems={"center"}
						gap={3}
						display={{ base: "none", sm: "flex" }}
					>
						<Button>hello</Button>
					</Flex>

                    <Flex align={"center"}>
                        <h1>Mingsenger</h1>
                    </Flex>

					{/* RIGHT SIDE */}
					<Flex alignItems={"center"} gap={3}>
						<Text fontSize={"lg"} fontWeight={500}>
							Daily Tasks
						</Text>
						
					</Flex>
				</Flex>
			</Box>
		</Container>
	);
}