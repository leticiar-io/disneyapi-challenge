import { Flex, Input, Icon, useColorModeValue, Tooltip } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";


export function SearchBox({filterCharacterbyName}) {
  return (
    <>
    <Tooltip size="sm" label="ha ha pluto! Você pode pesquisar séries, filmes, personas e muito mais aqui">
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      align="start"
      ml="5"
      maxWidth={["800px"]}
      color="gray.900"
      position="relative"
      bg={useColorModeValue("white", "gray.900")}
      borderRadius="10px"
    >
      
      <Input
      maxWidth={"700px"}
      color="gray.900"
      variant="unstyled"
        px="-11"
        mr="10"
        placeholder={"Buscar por filmes, séries ..."}
        type='text' id="demo"
        _placeholder={{ color: "gray.400" }}
        onChange= {e => filterCharacterbyName(e.target.value)}
      />

      <Icon as={RiSearchLine} color={useColorModeValue("black","white")} fontSize="20" />
    </Flex>
    </Tooltip>
    </>
);
}
