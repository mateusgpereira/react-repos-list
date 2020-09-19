import styled from 'styled-components'

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;

  a {
    align-items: center;
    color: #a8a8b3;
    display: flex;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }
  }

  svg {
    margin-right: 4px;
  }
`

const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    align-items: center;
    display: flex;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        color: #3d3d4d;
        font-size: 36px;
      }

      p {
        color: #737380;
        font-size: 18px;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        color: #3d3d4d;
        display: block;
        font-size: 36px;
      }

      span {
        color: #6c6c80;
        display: block;
        margin-top: 4px;
      }
    }
  }
`

const Issues = styled.div`
  margin-top: 80px;

  a {
    align-items: center;
    background-color: #ffffff;
    border-radius: 5px;
    display: flex;
    padding: 24px;
    text-decoration: none;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      strong {
        color: #3d3d4d;
        font-size: 20px;
      }

      p {
        color: #a8a8b3;
        font-size: 18px;
        margin-top: 4px;
      }
    }

    svg {
      color: #cbcbd6;
      margin-left: auto;
    }
  }
`

export { Header, RepositoryInfo, Issues }
