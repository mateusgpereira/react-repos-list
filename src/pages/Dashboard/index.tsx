import React, { useState, FormEvent, useEffect } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import imgLogo from '../../assets/logo.svg'

import { Title, Form, Repositories, Error } from './styles'
import api from '../../services/api'

interface Repository {
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')
  const [inputError, setInputError] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const repos = localStorage.getItem('repositories')
    return repos ? JSON.parse(repos) : []
  })

  useEffect(() => {
    localStorage.setItem('repositories', JSON.stringify(repositories))
  }, [repositories])

  const handleAddRepository = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório')
      return
    }
    try {
      const res = await api.get<Repository>(`repos/${newRepo}`)
      const repository = res.data
      setRepositories([...repositories, repository])
      setNewRepo('')
      setInputError('')
    } catch (err) {
      setInputError('Erro na busca por esse repositório')
    }
  }
  return (
    <>
      <img src={imgLogo} alt='Github Explorer' />
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder='Digite o nome do repo'
        />
        <button type='submit'>Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img src={repository.owner.avatar_url} alt='Logo' />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  )
}
export default Dashboard
