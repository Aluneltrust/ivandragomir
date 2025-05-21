import NextLink from 'next/link'
import type { NextPage } from "next";
import { Button, Container, Flex, Heading, Image, Stack, Box } from '@chakra-ui/react';
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Container maxW={"1200px"}>

      {/* Adjust the Box component to push content down if the navbar overlaps */}
      <Box pt={{ base: "100px", md: "150px" }}> {/* Adjust padding-top as needed */}

        <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>

          <Stack spacing={6} align={"center"}>

            {/* Make Image responsive */}
            <Image src="/hero.png" width={{ base: "80vw", md: "500px" }} height={{ base: "80vw", md: "500px" }} alt="Hero" />

            <Heading className={styles.heroTitle}> Welcome to IVAN DRAGOMIR™ Chopper Club!</Heading>
            <Button className={styles.heroCta} as={NextLink} href='/buy'>Buy Here</Button>

          </Stack>

        </Flex>

      </Box>

    </Container>
  );
};

export default Home;
