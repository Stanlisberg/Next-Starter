import React from 'react'
import styles from '../../styles/singlerepo.module.css'
import Link from 'next/link'
import RepoDetails from '@/components/RepoDetails'
import { RepoDirectory } from '@/components/RepoDirectory'

const singleRepo = ({params: {name}}) => {
  return (
    <div>
      <Link href='/repos'>
        <button className={styles.btn}>Back to Repository</button>
      </Link>
      <div className={styles.card}>
        <RepoDetails name={name} />
        <p>Repo Details</p>
      </div>
      <div>
        <RepoDirectory name={name} />
      </div>
    </div>
  )
}

export default singleRepo