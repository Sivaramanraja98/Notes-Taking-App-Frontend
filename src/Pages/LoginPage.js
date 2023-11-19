import React from 'react'
import Loginform from '../components/Loginform'
import { Container } from 'react-bootstrap'

const LoginPage = () => {
  return (
    <Container className='center'>
    <h1 className='center'>Login</h1>
    <Loginform/>
    </Container>
  )
}

export default LoginPage