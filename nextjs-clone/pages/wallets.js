import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Wallets(){
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Wallets</h1>
      </header>
      <main className={styles.main}>
        <p>This is a placeholder page for wallet-related flows.</p>
        <p><Link href="/">Back to home</Link></p>
      </main>
    </div>
  )
}
