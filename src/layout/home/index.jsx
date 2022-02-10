import { useState, useEffect } from "react";
import Head from "next/head";
import { api } from "../../services/api";
import { Cards } from "../../components";
import { SearchBox } from "../../components";
import { Header } from "../../components";
import Modal from "react-modal";
import {
  Heading,
  Box,
  Center,
  Flex,
  Stack,
  Text,
  Image,
  Button,
  SimpleGrid,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

export default function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [page, setPage] = useState(1);

  function filterCharacterbyName(name) {
    const filteredCharacter = characters.filter((character) =>
      character.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log(filteredCharacter);
    setCharacters(filteredCharacter);
  }

  async function getOneCharacter(id) {
    const character = await api.get(`/characters/${id}`);
    return character.data;
  }

  async function openModal(id) {
    setIsOpenModal(true);
    const character = await getOneCharacter(id);
    console.log(character);
    setCharacter(character);
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  useEffect(() => {
    async function getData(page) {
      const response = await api.get("/characters", {
        params: {
          page,
        },
      });

      setCharacters(response.data.data);
    }
    getData(page);
  }, [page]);

  return (
    <>
      <Head>
        <title>DisneyLand</title>
        <meta name="description" content="Truckpag" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Box h="17rem" bgGradient="linear(to-r, blue.700, blue.900)">
          <Header />
          <Center mt="4%">
            <VStack>
              <Heading color="white" pb="10px">
                Welcome to Disneyland!
              </Heading>
              <SearchBox filterCharacterbyName={filterCharacterbyName} />
            </VStack>
          </Center>
        </Box>

        <Flex>
          <Cards openModal={openModal} data={characters} />

          <Modal
            isOpen={isOpenModal}
            onRequestClose={closeModal}
            contentLabel="Loading"
            cursor="pointer"
          >
            <SimpleGrid>
              <Center>
                <Stack
                  flex={1}
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  p={1}
                  cursor="pointer"
                >
                  <Heading
                    fontSize={"20px"}
                    fontWeight={600}
                    color={"gray.500"}
                    size="sm"
                    mb={4}
                  >
                    Personagem: {character.name}
                  </Heading>

                  <Flex flex={1} roundedTop="2xl">
                    <Image src={character.imageUrl} rounded="lg" />
                  </Flex>

                  <Heading
                    textAlign={"start"}
                    color= "gray.400"
                    px={3}
                    pl={10}
                    fontSize="md"
                  >
                    <Text pb={3}>Filmes: {character.shortFilms}</Text>
                    <Text pb={3}>TVShows: {character.tvShows}</Text>
                    <Text>VideoGame: {character.videoGames}</Text>
                    <Text>{character.parkAttractions}</Text>
                  </Heading>

                  <Stack
                    width={"100%"}
                    mt={"2rem"}
                    direction={"row"}
                    padding={2}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    maxWidth="200px"
                  >
                    <Button
                      onClick={closeModal}
                      flex={1}
                      width="200px"
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.500",
                      }}
                    >
                      Close
                    </Button>
                  </Stack>
                </Stack>
              </Center>
            </SimpleGrid>
          </Modal>
        </Flex>

        <Flex px={10} py={10} alignItems="center" justifyContent="center">
          <Button
            onClick={() => setPage(page - 1)}
            disabled={page == 1}
            bg="blue.500"
            width="100px"
            color="white"
            mr="50px"
            _hover={{
              bg:"blue.900"
            }}          
          >
            Voltar
          </Button>
          <Button
            onClick={() => setPage(page + 1)}
            disabled={page == 149}
            bg="blue.500"
            width="100px"
            color="white"
            mr="50px"
            _hover={{
              bg:"blue.900"
            }}
          >
            Próximo
          </Button>
        </Flex>
      </Box>
    </>
  );
}
