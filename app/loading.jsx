import React from 'react'
import styles from './styles/loading.module.css'

const loading = () => {
  return (
    <div className={styles.loader}>
        <div className={styles.spinner}>
            <div className={styles.spinner2}></div>
        </div>
    </div>
  )
}

export default loading