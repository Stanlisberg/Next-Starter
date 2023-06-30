import React from 'react'
import styles from '../../styles/singlerepo.module.css'
import Link from 'next/link'
import RepoDetails from '@/components/RepoDetails'
import { RepoDirectory } from '@/components/RepoDirectory'
import { Suspense } from 'react'

const singleRepo = ({params: {name}}) => {
  return (
    <div>
      <Link href='/repos'>
        <button className={styles.btn}>Back to Repository</button>
      </Link>
      <div className={styles.card}>
        <Suspense fallback={<div>Loading Repo...</div>}>
         <RepoDetails name={name} />
        </Suspense>
        <p>Repo Details</p>
      </div>
      <div>
      <Suspense fallback={<div>Loading Directories..</div>}>
        <RepoDirectory name={name} />
      </Suspense>
      </div>
    </div>
  )
}

export default singleRepo