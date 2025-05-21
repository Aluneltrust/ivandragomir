import { Box, Button, Card, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import React, { useState } from "react";

import type { NFT as NFTType } from "@thirdweb-dev/sdk";

import { NFT_COLLECTION_ADDRESS } from "../const/addresses";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import SaleInfo from "../components/SaleInfo/SaleInfo";
import tokenPageStyles from "../styles/Token.module.css";

export default function Sell() {

    // Load all of the NFTs from the NFT Collection
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    console.log("WHAT CONTRACT? ", contract)

    const address = useAddress();
    console.log("WHAT ADDRESS? ", address)

    const { data, isLoading } = useOwnedNFTs(contract, address);
    console.log("WHAT DATA? ", data)
    console.log("IS IT LOADING? ", isLoading)

    const [selectedNft, setSelectedNft] = useState<NFTType>();
    console.log("WHAT NFT? ", selectedNft)

    return (
        <Container maxWidth="lg">
            <h1>Sell Your Chopper Rider.</h1>
            {!selectedNft ? (
                <>
                    <p>Select which Chopper you&rsquo;d like to sell below.</p>
                    <NFTGrid
                        data={data}
                        isLoading={isLoading}
                        overrideOnclickBehavior={(nft) => {
                            setSelectedNft(nft);
                        }}
                        emptyText={
                            "Looks like you don't own any NFTs in this collection. Head to the buy page to buy some!"
                        }
                    />
                </>
            ) : (
                <div className={tokenPageStyles.container} style={{ marginTop: 0 }}>
                    <div className={tokenPageStyles.metadataContainer}>
                        <div className={tokenPageStyles.imageContainer}>
                            <ThirdwebNftMedia
                                metadata={selectedNft.metadata}
                                className={tokenPageStyles.image}
                            />
                            <button
                                onClick={() => {
                                    setSelectedNft(undefined);
                                }}
                                className={tokenPageStyles.crossButton}
                            >
                                X
                            </button>
                        </div>
                    </div>

                    <div className={tokenPageStyles.listingContainer}>
                        <p>You&rsquo;re about to list the following item for sale.</p>
                        <h1 className={tokenPageStyles.title}>
                            {selectedNft.metadata.name}
                        </h1>
                        <p className={tokenPageStyles.collectionName}>
                            Token ID #{selectedNft.metadata.id}
                        </p>

                        <div className={tokenPageStyles.pricingContainer}>
                            <SaleInfo nft={selectedNft} />
                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
}