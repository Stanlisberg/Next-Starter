import React from "react";
// import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import styles from '../app/styles/repo.module.css'

const fetchRepoDetails = async (name) => {
  const response = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}`
  );
  const data = await response.json();

  return data;
};

const RepoDetails = async ({ name }) => {
  const repo = await fetchRepoDetails(name);
  console.log(repo);
  return (
    <>
      <h2>{repo.name}</h2>
      <div className={styles.cont}>
        <div className={styles.item}>
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className={styles.item}>
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className={styles.item}>
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default RepoDetails;
