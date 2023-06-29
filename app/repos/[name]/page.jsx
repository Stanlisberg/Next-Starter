import React from 'react'
import styles from '../../styles/singlerepo.module.css'

const singleRepo = ({params: {name}}) => {
  return (
    <div className={styles.card}>
        {name}
    </div>
  )
}

export default singleRepo