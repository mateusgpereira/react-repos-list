import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import imgLogo from '../../assets/logo.svg'
import placeHolder from '../../assets/placeholder.png'

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => (
  <>
    <img src={imgLogo} alt='Github Explorer' />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder='Digite o nome do repo' />
      <button type='submit'>Pesquisar</button>
    </Form>
    <Repositories>
      <a href='/'>
        <img src={placeHolder} alt='Logo' />
        <div>
          <strong>mateusgpereira/react-repos-list</strong>
          <p>
            an app to list github repos developed during rocketseat bootcamp to
            practice react concepts
          </p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href='/'>
        <img src={placeHolder} alt='Logo' />
        <div>
          <strong>mateusgpereira/react-repos-list</strong>
          <p>
            an app to list github repos developed during rocketseat bootcamp to
            practice react concepts
          </p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href='/'>
        <img src={placeHolder} alt='Logo' />
        <div>
          <strong>mateusgpereira/react-repos-list</strong>
          <p>
            an app to list github repos developed during rocketseat bootcamp to
            practice react concepts
          </p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
)
export default Dashboard
