import React, { useEffect, useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'

import { Header, RepositoryInfo, Issues } from './styles'

import imgLogo from '../../assets/logo.svg'

interface RepositoryParams {
  repository: string
}

interface Repository {
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
  stargazers_count: number
  forks: number
  open_issues_count: number
}

interface Issue {
  id: number
  title: string
  html_url: string
  user: {
    login: string
  }
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()
  const [repo, setRepo] = useState<Repository | null>(null)
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    api.get(`/repos/${params.repository}`).then((res) => {
      setRepo(res.data)
    })

    api.get(`/repos/${params.repository}/issues`).then((res) => {
      setIssues(res.data)
    })
  }, [params.repository])

  console.log(issues)
  return (
    <>
      <Header>
        <img src={imgLogo} alt='Github Explorer' />
        <Link to='/'>
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      {repo && (
        <RepositoryInfo>
          <header>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repo.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repo.forks}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repo.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}
      <Issues>
        {issues &&
          issues.map((issue) => (
            <a key={issue.id} href={issue.html_url}>
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>
              <FiChevronRight />
            </a>
          ))}
      </Issues>
    </>
  )
}

export default Repository
