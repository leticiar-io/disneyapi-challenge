import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter()

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={5} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"300px"} maxW={"md"}>
          <Heading fontSize={"5xl"}>Welcome to DisneyLand!</Heading>

          <Heading fontSize={"lg"}>
            Vem só conhecer seus personagens favoritos da Disney :)
          </Heading>
          <Button
            colorScheme={"blue"}
            width={"300px"}
            variant={"solid"}
            type="button"
            onClick={() => router.push("/home")}
          >
            Entrar
          </Button>
        </Stack>
      </Flex>
      <Flex flex={1.5}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://www.teahub.io/photos/full/2-20072_walt-disney-world-wallpapers-data-src-full-806327.jpg"
          }
        />
      </Flex>
    </Stack>
  );
}
