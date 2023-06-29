import React from 'react'
import styles from '../../styles/singlerepo.module.css'
import Link from 'next/link'
import RepoDetails from '@/components/RepoDetails'

const singleRepo = ({params: {name}}) => {
  return (
    <div>
      <Link href='/repos'>
        <button className={styles.btn}>Go to Repos</button>
      </Link>
      <div className={styles.card}>
        <RepoDetails name={name} />
        <p>Repo Details</p>
      </div>
    </div>
  )
}

export default singleRepo