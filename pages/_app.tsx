import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar/Navbar";

import NextNProgress from "nextjs-progressbar";

import { Polygon } from "@thirdweb-dev/chains";


// const NETWORK = {

//   chainId: 1285,
//   rpc: ["https://moonriver.rpc.thirdweb.com"],
//   nativeCurrency: { decimals: 18, name: "Moonriver Network", symbol: "MOVR" },
//   shortName: "Movr",
//   slug: "Moonriver",
//   testnet: false,
//   chain: "Moonriver",
//   name: "Moonriver Network",

// };


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={Polygon}>
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider >
  );
}

export default MyApp;
