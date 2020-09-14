import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface FormProps {
  hasError: boolean
}

const Title = styled.h1`
  color: #3a3a3a;
  font-size: 48px;
  line-height: 56px;
  margin-top: 80px;
  max-width: 450px;
`

const Form = styled.form<FormProps>`
  display: flex;
  margin-top: 40px;
  width: 700px;

  input {
    border-radius: 5px 0px 0px 5px;
    color: #3a3a3a;
    flex: 1;
    height: 60px;
    padding: 0 24px;
    border: 1px solid #ffffff;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    background-color: #04d361;
    border: none;
    border-radius: 0px 5px 5px 0px;
    color: #ffffff;
    font-weight: bold;
    height: 60px;
    transition: background-color 0.2s;
    width: 210px;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`
const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

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

    img {
      border-radius: 50%;
      height: 64px;
      width: 64px;
    }

    div {
      flex: 1%;
      margin: 0 16px;

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
const Error = styled.span`
  color: #c53030;
  display: block;
  margin-top: 30px;
`
export { Title, Form, Repositories, Error }
