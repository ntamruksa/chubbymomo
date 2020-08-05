import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Site from '../components/Site'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Chubby Momo</h1>
        <Site name='test' url='https://baiyok.chubbymomo.com/'/>
      </main>
    </div>
  )
}
