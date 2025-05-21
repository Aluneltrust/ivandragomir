import React from "react";
import { Text } from "@chakra-ui/react";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";
import { useContract, useNFTs } from "@thirdweb-dev/react";
import { Flex, Image, Stack } from '@chakra-ui/react';
import Container from "../components/Container/Container";


export default function Buy() {

    const { contract } = useContract(NFT_COLLECTION_ADDRESS);

    const { data, isLoading } = useNFTs(contract);

    return (
        <Container maxWidth="lg">

            <Flex h={"30vh"} alignItems={"center"} justifyContent={"center"}>

                <Stack spacing={6} align={"center"}>
                    <Image
                        src="/logo1.png"
                        width={250}
                        height={250}
                        alt="Logo">
                    </Image>
                </Stack>

            </Flex>
            <Text align={"center"} fontSize='4xl' fontFamily="sans-serif" >Buy Your Favorite Chopper Rider!</Text>
            <Text align={"center"} fontStyle='italic' fontFamily="monospace" >Browse and buy your favorite NFTs from this collection.</Text>


            <NFTGrid
                data={data}
                isLoading={isLoading}
                emptyText={"No NFTs found"}
            />

        </Container>
    )
};