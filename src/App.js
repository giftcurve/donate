import { useEffect, useState } from "react";
//import { isWallectConnected } from "./services/blockchain";
import "./App.css";
import Campaign from "./component/Campaign";
import { Route, Routes } from "react-router-dom";
import Demo from "./component/Demo";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Buttons from "./component/Buttons";


import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
//import { localhost } from 'viem/chains';
import { arbitrum, mainnet, localhost } from 'viem/chains';
import { getAccount, watchAccount } from "@wagmi/core";
import { setGlobalState } from "./store/Index";






// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.REACT_APP_PROJECT_ID
if (!projectId) {
  throw new Error('provide PROJECT ID')
}

// 2. Create wagmiConfig
// const metadata = {
//   name: 'Web3Modal',
//   description: 'Web3Modal Example',
//   url: 'https://web3modal.com',
//   icons: ['https://avatars.githubusercontent.com/u/37784886']
// }
const metadata = {
  name: 'My Awesome dApp'
}

const chains = [mainnet, arbitrum, localhost]
//const chains = [localhost]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })


// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })




function App() {
  const [loaded, setLoaded] = useState(false);

  
  useEffect(() => {
    const fetchData = async () => {
      const account = getAccount()
      if (account.address) {
        setGlobalState('connectedAccount', account.address);
    }

    watchAccount((account) =>  {
      if (account.address) {
          setGlobalState('connectedAccount', account.address);
      } else {
          setGlobalState('connectedAccount', '')
      }
  })
      // await isWallectConnected();
      setLoaded(true);
      console.log("Blockchain loaded from app js");
    };
    fetchData();
  }, []);



  return (
    <div className="app">
      <WagmiConfig config={wagmiConfig}>
      {loaded ? (
        <Routes>
          <Route path="/" element={<Campaign />} />
          <Route path="create" element={<Demo />} />
          <Route path="/buttons" element={<Buttons />} />       
        </Routes>
        ) : null }

</WagmiConfig>
      <ToastContainer
        position="bottom-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;

