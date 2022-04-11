import React from 'react'

const RenderNotConnectedContainer = ({connectWallet}) => {
    return (
        <button className="cta-button connect-wallet-button" onClick={connectWallet}>
           Connect to Phantom Solana Wallet
        </button>

    )
}

export default RenderNotConnectedContainer
