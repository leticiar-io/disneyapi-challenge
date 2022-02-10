import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  Grid,
  GridItem,
  useColorModeValue,
  SimpleGrid,
  Center,
  chakra,
  Tooltip,
} from "@chakra-ui/react";

export function Cards({ data, openModal }) {
  return (
    <Box px={[2,10]} py={[2,15]}>
      <Center>
      <SimpleGrid columns={[2,2,3,3,5]} spacing={[5,10]}>
        {data.map((character) => (
        <Box  key={character._id}>
          <Box
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            width={["150px","210px"]}
            shadow="lg"
            position="relative"
            bg={useColorModeValue("white", "gray.800")}
            onClick={() => openModal(character._id)}
            _hover={{
              shadow: "2xl",
              cursor: "pointer",
            }}
          >
            <Image
              src={character.imageUrl}
              alt={`Picture of Disney`}
              objectFit="cover"
              roundedTop="lg"
              width="210px"
              height="250px"
              backgroundColor="black"
              borderWidth="1px"
              borderColor="gray.700"
            />

            <Box p="6">
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="md"
                  fontWeight="semibold"
                  as="h5"
                  lineHeight="tight"
                  isTruncated
                >
                  {character.name}
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
        ))}
      </SimpleGrid>
      </Center>
    </Box>
  );
}
