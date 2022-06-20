import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
/* import repoData from '../data/repos' */
import Repo from './Repo'

const Repos = () => {
  const [reposData, setReposData] = useState([])
  
  useEffect(() => {
    const data = sessionStorage.getItem("repos")
    let myRepos
    //Si hay datos en el session storage, hacemos set del estado y cargamos localmente del navegador
    if (data) {
      myRepos = JSON.parse(data)
      //Muestra entre la posición 1 y la 13
      myRepos = myRepos.slice(1,13)
      return setReposData(myRepos)
    }

    //Si no hay datos en session storage, realizamos la patición ajax
    const fetchData = async () => {
      const response = await fetch("https://api.github.com/users/gustavoromerocl/repos")
      myRepos = await response.json()
      
      //creamos el session storage para almacenar la sesión en el caché con el fin de evitar multiples peticiones a la api
      sessionStorage.setItem('repos', JSON.stringify(myRepos))
      setReposData(myRepos)
    }

    fetchData();

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