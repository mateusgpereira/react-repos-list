import React, { useState, FormEvent } from 'react'
import { FiChevronRight } from 'react-icons/fi'

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
  const [repositories, setRepositories] = useState<Repository[]>([])

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
          <a key={repository.full_name} href='/'>
            <img src={repository.owner.avatar_url} alt='Logo' />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  )
}
export default Dashboard
