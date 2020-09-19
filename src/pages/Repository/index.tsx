import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { Header, RepositoryInfo, Issue } from './styles'

import imgLogo from '../../assets/logo.svg'

interface RepositoryParams {
  repository: string
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()

  return (
    <>
      <Header>
        <img src={imgLogo} alt='Github Explorer' />
        <Link to='/'>
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src='https://avatars0.githubusercontent.com/u/28929274?v=4'
            alt='Rockeseat'
          />
          <div>
            <strong>Title</strong>
            <p>Descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1048</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>56</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>60</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issue>
        <Link to='shaushausa'>
          <div>
            <strong>ahsuahsuahs</strong>
            <p>ahsuahsuahsu</p>
          </div>
          <FiChevronRight />
        </Link>
      </Issue>
    </>
  )
}

export default Repository
