import React from 'react'
import Link from 'next/link'
import styles from '../app/styles/repo.module.css'

const fetchRepoContent = async(name) => {

    const res = await fetch(`https://api.github.com/repos/bradtraversy/${name}/contents`)
    await new Promise((resolve) => {setTimeout(resolve, 3000)})

    const data = await res.json()
    return data;
}
export const RepoDirectory = async ({ name }) => {

    const content = await fetchRepoContent(name)
    console.log(content);
    const dirs = content.filter(content => content.type === 'dir')

  return (
    <>
        <h3 className={styles.ulh3}>Directories</h3>
        <ul className={styles.ul}>
            {dirs.map((item) => (
            <li key={item.path} className={styles.listItem}>
                <Link className={styles.dirLink} href={`/repos/${name}/${item.path}`}>
                    {item.name}
                </Link>
            </li>
            ))}
        </ul>
    </>
  )
}
