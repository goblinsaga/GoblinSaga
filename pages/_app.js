import { ThirdwebProvider, metamaskWallet, trustWallet, walletConnect, okxWallet } from "@thirdweb-dev/react";
import { Polygon } from "@thirdweb-dev/chains";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThirdwebProvider
        autoConnect={false}
        activeChain={Polygon}
        supportedChains={[Polygon]}
        supportedWallets={[
          metamaskWallet(),
          okxWallet(),
          trustWallet(),
          walletConnect(),
        ]}
        clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      >
        <Head>
          <title>Goblin Saga</title>
          <link rel="icon" href="img/favicon.ico" />
          <link
            href="https://fonts.cdnfonts.com/css/fiery-turk"
            rel="stylesheet"
          />
          {/* Styles */}
          <link
            type="text/css"
            rel="stylesheet"
            href="/css/plugins.css?ver=4.1"
          />
          <link type="text/css" rel="stylesheet" href="/css/style.css?ver=4.1" />
          <meta
          name="description"
          content="Embark on an exciting adventure in the NFT DeFi world with Goblin Saga mining, where every click counts and every decision matters. Become a digital mining tycoon as you build and expand your empire and get ready to dive into a world full of challenges, strategies and thrills as you master the art of digital mining."
          />
          <meta
            name="keywords"
            content="NFT, Pixel Art, Mining, Token Mining, Idle Game, Web3 Game"
          />

          {/* Open Graph (Facebook, LinkedIn, etc.) */}
          <meta property="og:title" content="Goblin Saga" />
          <meta
            property="og:description"
            content="Embark on an exciting adventure in the NFT DeFi world with Goblin Saga mining, where every click counts and every decision matters. Become a digital mining tycoon as you build and expand your empire and get ready to dive into a world full of challenges, strategies and thrills as you master the art of digital mining."
          />
          <meta property="og:image" content="/img/MLGSA.png" />
          <meta property="og:url" content="https://goblinsaga.xyz" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Goblin Saga" />
          <meta
            name="twitter:description"
            content="Embark on an exciting adventure in the NFT DeFi world with Goblin Saga mining, where every click counts and every decision matters. Become a digital mining tycoon as you build and expand your empire and get ready to dive into a world full of challenges, strategies and thrills as you master the art of digital mining."
          />
          <meta name="twitter:image" content="/img/MLGSA.png" />
        </Head>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </Provider>
  );
}

export default MyApp;