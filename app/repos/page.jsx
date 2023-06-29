import React from "react";
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import styles from '../styles/repo.module.css'
import Link from "next/link";

const fetchRepos = async () => {
  const res = await fetch("http://api.github.com/users/bradtraversy/repos")
  
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  const data = await res.json()
  return data;

};

const reposPage = async () => {
    const repos= await fetchRepos();

    return (
        <div className={styles.container}>
          <h2>Repositories</h2>
          <ul className={styles.list}>
            {repos.map((repo) => (
              <li key={repo.id} className={styles.li}>
                <Link href={`/code/repos/${repo.name}`}>
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                  <div className={styles.details}>
                    <span>
                      <FaStar /> {repo.stargazers_count}
                    </span>
                    <span>
                      <FaCodeBranch /> {repo.forks_count}
                    </span>
                    <span>
                      <FaEye /> {repo.watchers_count}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
    );
};

export default reposPage;
