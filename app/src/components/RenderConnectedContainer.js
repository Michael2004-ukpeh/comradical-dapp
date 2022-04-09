import React ,{useState} from 'react'
import {Program, web3} from '@project-serum/anchor'
import { LAMPORTS_PER_SOL, SystemProgram, PublicKey } from '@solana/web3.js';
const{Transaction } = web3;




const RenderConnectedContainer = ({walletAddress,gifList, setGifList, createGifAccount , getProvider, renderconnectProp, getGifList}) => {
   const{idl, baseAccount, programID} = renderconnectProp
    const [inputValue, setInputValue] = useState("")
    const[duplicate, setDuplicate] = useState(false);
    const [tip, setTip] = useState(0);
    const sendGif = async() =>{
        if(inputValue.length === 0){
            console.log("No meme link given!")
            return
        }
        
            console.log("Gif Link: ", inputValue)
            // gifList.forEach(gif =>{
            //   if (gif !== inputValue){
            //     setGifList([...gifList,inputValue]);
            //   }else{
            //       setDuplicate(true)
            //       setGifList(gifList)
            //       setTimeout(() => setDuplicate(false),2000)
            //   }
            // })
        try {
            const provider = await getProvider();
            const program = new Program(idl, programID, provider);
            await program.rpc.addGif(inputValue,{
                accounts: {
                    baseAccount: baseAccount.publicKey,
                    user: provider.wallet.publicKey,
                    systemProgram: SystemProgram.programId,
    
                },
                signers: [baseAccount]
            });
            console.log("GIF succesfully sent to the program", inputValue)
            setInputValue('')
            await getGifList()
        } catch (error) {
            console.log("Error sending GIF:", error)
        }
       
    }
    const onSubmit = e => {
        e.preventDefault()
        sendGif()
        }
   

   const upVoteGif =async(id) =>{
     try {
         const provider = getProvider();
         const program = new Program(idl, programID, provider)
         await program.rpc.upvoteGif(id,{
             accounts:{
                 baseAccount:baseAccount.publicKey,
                 user:provider.wallet.publicKey
             }
         })
         console.log("Upvoting", id)
         await getGifList()
     } catch (error) {
         console.log('error in upvote', id, error)
     }

   }
   const createTransaction = async(instructions) =>{
       const transaction = new Transaction().add(instructions)
       transaction.feePayer = getProvider().wallet.publicKey;
       console.log('Getting Recent Blockhash');
       transaction.recentBlockhash = (await getProvider().connection.getRecentBlockhash()).blockhash;
       return transaction
   }
   const createTransferTransaction = async(from, to, amount) =>{
       return createTransaction(
           SystemProgram.transfer({
              fromPubkey:from,
              toPubkey:to,
              amount: LAMPORTS_PER_SOL * amount, 
           })
       )
   }
   const tipSol = async(from, to ,amount) =>{
       const provider =   getProvider();
       try {
           console.log(`Sending ${amount} from :${from} , to: ${to}`);

           const {signature} = await provider.wallet.signAndSendTransaction( await createTransferTransaction(from, to, amount));
           console.log(`Submitted Transaction ${signature}, awaiting confirmation`);
            const tx = await getProvider().connection.confirmTransaction(signature);
            console.log(`Transaction ${signature} confirmed`);
            setTip(0);
            return tx
           
       } catch (error) {
        console.warn(error);
        console.error(`Error: ${JSON.stringify(error)}`);  
       }
   }
   if(gifList === null){
       return(
           <div className="connected-container">
               <button className="cta-button submit-gif-button" onClick={createGifAccount}>
                   Do One-Time Initialization For GIF Program Account
               </button>
           </div>
       )
   }else{
    return (
        <div className="connected-container">
           <form onSubmit={onSubmit}>
           <input type="text"
            placeholder="Enter meme link!" 
            value={inputValue}
            onChange={e =>setInputValue(e.target.value)}/>
             <button type="submit" className="cta-button submit-gif-button">Submit</button>
           </form>
           {duplicate && <h4 className='duplicate'>Oops Enter A New Meme!, Don't be weak</h4>}
           <div className="gif-grid">
                {gifList.slice(0).reverse().map((item, index) =>(

                    <div className="gif-item" key={index}>
                        <img src={item.gifLink} alt={item.gifLink} height='300' width='200'/>
                        <p> {item.userAddress.toString()}</p>
                        <button onClick={() => upVoteGif(item.id)}>Upvote {item.upvotes.toString()}</button>
                        <div className='tip-box'> 
                            <button onClick={() => tipSol(walletAddress, item.userAddress.toString(), tip)}>Send tip to our comrade</button>
                            <input 
                            type="number" 
                            name="tip"
                             id="tip" 
                             className='tip'
                             value={tip}
                             onChange = { e => setTip(e.target.value)}/>
                            </div>
                       
                        
                    </div>
                ))}
            </div>
        </div>
    )
   }
}

export default RenderConnectedContainer
