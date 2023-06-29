
import React from 'react'

const reposPage = () => {

  const fetchRepos = async() => {
    const response = await fetch('http://api.github.com/users/bradtraversy/repos')
    const data = await response.json()

    return data;
  }

    fetchRepos()
  
  return (
    <div>
        {data?.map((item) => (
            <p style={{backgroundColor: 'red'}}>{item.name}</p>
        ))}
    </div>
  )
}

export default reposPage