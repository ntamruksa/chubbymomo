import styles from '../styles/Home.module.css'

const Site = ({ name, url }) => (
  <div className={styles.card}>
      <a href={url}>{name}</a>
  </div>
)

export default Site
