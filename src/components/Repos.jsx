import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import fetchRepos from '../libs/fetchRepos'
/* import repoData from '../data/repos' */
import Repo from './Repo'

const Repos = () => {
  const [reposData, setReposData] = useState([])
  
  useEffect(() => {
    fetchRepos()
  },[])

  return (
    <div className='max-w-4xl mx-auto'>
      <section className='text-center'>
        <h2 className=''>Mi trabajo en Open Source</h2>
        <p>Colaboración y contribuición de código</p>
      </section>

      <ul className='repos-list'>
        {
          reposData.map((repo) => {
            return <Repo data={repo} key={repo.id}/>
          })
        }
      </ul>
    </div>
  )
}

export default Repos