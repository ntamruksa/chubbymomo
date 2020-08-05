import styles from '../styles/Home.module.css'
import Site from '../components/Site'

export default function Home({sites}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Chubby Momo</h1>
        {sites.map(site => {
          return (
            <Site name={site.name} url={site.url}/>
          )
        })}

      </main>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('http://chubbymomo.vercel.app/api/sites')
  const json = await res.json()
  return { sites: json.sites }
}
