import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Icon,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AiFillHeart } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";


export function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <Box bg={useColorModeValue("white", "gray.900")} px={5} borderWidth="1px">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image
              h="35px"
              w="auto"
              src={useColorModeValue(
                "https://www.pngplay.com/wp-content/uploads/5/Walt-Disney-Logo-Free-Picture-PNG.png",
                "https://www.braintrustgroup.com/wp-content/uploads/2016/02/disney-white-01-1024x422-1.png"
              )}
            />
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7} alignItems="center">
              <Button onClick={toggleColorMode} bg="transparent" fontSize="2xl" _hover={{bg:"transparent"}}>
                {colorMode === "dark" ? <MoonIcon /> : <SunIcon/>}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://yt3.ggpht.com/ytc/AKedOLRTedpAOJ_WMHPkyaWAyyPTum3JI8yS1D0oF4TD=s900-c-k-c0x00ffffff-no-rj"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://yt3.ggpht.com/ytc/AKedOLRTedpAOJ_WMHPkyaWAyyPTum3JI8yS1D0oF4TD=s900-c-k-c0x00ffffff-no-rj"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>
                      <strong>@MickeyMouse</strong>
                    </p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>
                    <Link href="#">
                      <Flex alignItems={"center"}>
                        <Icon as={AiFillHeart} mr={3}/>
                        Favoritos
                      </Flex>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/">
                      <Flex alignItems={"center"}>
                        <Icon as={BiLogOut} mr={3} />
                        Logout
                      </Flex>
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>

            </Stack>
          </Flex>
        </Flex>
      </Box>
  );
}
