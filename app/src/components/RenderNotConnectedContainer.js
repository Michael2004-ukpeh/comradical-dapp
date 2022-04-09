import React from 'react'

const RenderNotConnectedContainer = ({connectWallet}) => {
    return (
        <button className="cta-button connect-wallet-button" onClick={connectWallet}>
           Connect to Wallet
        </button>

    )
}

export default RenderNotConnectedContainer
