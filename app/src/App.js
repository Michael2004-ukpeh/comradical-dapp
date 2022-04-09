import idl from "./idl.json";
import kp from  './keypair.json';
import {Connection, PublicKey, clusterApiUrl} from "@solana/web3.js";
import {Program, Provider, web3} from "@project-serum/anchor";
import {useEffect, useState} from "react"
import twitterLogo from './assets/twitter-logo.svg';
import './App.css';
import image from "./assets/comrade.png"
import RenderNotConnectedContainer from "./components/RenderNotConnectedContainer";
//eslint-disable-next-line

import RenderConnectedContainer from "./components/RenderConnectedContainer";
// Constants
// SystemProgram is a reference to the Solana runtime!
const {SystemProgram, Keypair} = web3;

// Create a keypair for the account that will hold the GIF data.
const arr = Object.values(kp._keypair.secretKey)
const secret = new Uint8Array(arr)
const baseAccount = web3.Keypair.fromSecretKey(secret)

// Get our program's id from the IDL file.
const programID = new PublicKey(idl.metadata.address);
console.log(programID)
//Set our network to devnet.
const network = clusterApiUrl('devnet');

//controls how we want to acknowledge when a transaction is done
const opts = {
  prefLightCommitment: "processed"
}



const TWITTER_HANDLE = 'UkpehM';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
// const TEST_GIFS = [
//   'data:image/jpeg;base64,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',
//   'https://i1.wp.com/mandynews.com/wp-content/uploads/2021/12/feelsbadman-sadfrog.gif',
//   'https://i.giphy.com/media/eIG0HfouRQJQr1wBzz/giphy.webp',
//   'https://media3.giphy.com/media/L71a8LW2UrKwPaWNYM/giphy.gif?cid=ecf05e47rr9qizx2msjucl1xyvuu47d7kf25tqt2lvo024uo&rid=giphy.gif&ct=g',
//   'https://media4.giphy.com/media/AeFmQjHMtEySooOc8K/giphy.gif?cid=ecf05e47qdzhdma2y3ugn32lkgi972z9mpfzocjj6z1ro4ec&rid=giphy.gif&ct=g',
//   'https://i.giphy.com/media/PAqjdPkJLDsmBRSYUp/giphy.webp'
// ]
const App = () => {
  const renderconnectProp ={
    idl: idl,
    programID:programID,
    baseAccount:baseAccount
  }
  // States
  const [walletAddress, setWalletAddress] = useState(null);
  const [gifList, setGifList] = useState([]);
  
 
  // Actions
  const checkIfWalletIsConnected = async () =>{
    try {
      const{solana} = window;
      if(solana){
        if(solana.isPhantom){
          console.log("Phantom Wallet is found")
          const response = await solana.connect({onlyIfTrusted: true})  
          console.log('Connected with the Public Key:', response.publicKey.toString())
          setWalletAddress(response.publicKey.toString())
        }else{
          alert('Solana object not found! Get a phantom Wallet 👻')
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

// Initialize wallet connection
const connectWallet = async()=>{
  const {solana} = window;
  if(solana){
    const response = await solana.connect();
    console.log('Connected With The Public Key:',response.publicKey.toString())
    setWalletAddress(response.publicKey.toString())
   
    }
}

//get  provider
const getProvider = () =>{
  const connection = new Connection(network, opts.prefLightCommitment);
  const provider = new Provider(
   connection, window.solana, opts.prefLightCommitment,
  );
  console.log(provider);
  return provider;
}

//create gif account
const createGifAccount = async() =>{
  try {
    const provider = getProvider();
    const program = new Program(idl, programID, provider);
    console.log("ping")
    await program.rpc.startStuffOff({
      accounts:{
        baseAccount: baseAccount.publicKey,
        user:provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      },
      signers:[baseAccount]
    });
    console.log('Created a new BaseAccount w/ address:', baseAccount.publicKey);
    await getGifList();
  } catch (error) {
    console.log("Error creating BaseAccount account:", error)
    
  }
}



// Lifecycle hooks/useeffect
  useEffect(() =>{
    const onLoad = async() =>{
      await checkIfWalletIsConnected();
      
    };
    window.addEventListener('load',onLoad);
    // cleanup function
   
    return ()=>window.removeEventListener('load',onLoad);
  },[])

  const getGifList = async() =>{
    try {
      const provider = getProvider();
      const program = new Program(idl,programID, provider);
      const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
      console.log("Got the account", account);
      setGifList(account.gifList);
    } catch (error) {
      console.log("Error in getGifList: ", error)
      setGifList(null);
      
    }
  }
  useEffect(() =>{
   
 const update =  async() =>{
  if(walletAddress){
      console.log("Fetching Meme List")
     await getGifList()
  }
}
  update()
},[walletAddress])

  return (
    <div className="App">
      <header>
        <div className="container flex-column">
          <div className="logo">
            <img src={image} alt="All hail comrade"  />
          </div>
           <div className="header-text">
           <h2 className="header ">Comradeverse</h2>
           </div>
          
          
          </div>
          
          </header>
          {/* Rendering Connect to Walllet */}
          
          
          <section>
            <div className="container ">
            {!walletAddress && (
              <div className="flex-column">
              <h1 className="welcome gradient-text"> Welcome to Comradeverse </h1>
              <p className="gradient-text sub-text">  View your meme collection in the Comradeverse </p>
              <p className="gradient-text sub-text bold">  The weak shall perish </p>
            <RenderNotConnectedContainer connectWallet={connectWallet}/>
            </div>
            )}
            {walletAddress && 
            <RenderConnectedContainer 
            walletAddress={walletAddress} 
            gifList={gifList}
             setGifList={setGifList} 
             createGifAccount={createGifAccount}
              getProvider={getProvider}
              renderconnectProp={renderconnectProp}
              getGifList={getGifList}
              />}
            </div>
          </section>
        
        <footer>
        <div className="container flex-footer">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built by @${TWITTER_HANDLE}`}</a>
        </div>
        </footer>
      </div>
  
  );
};

export default App;
