import React from 'react'
import {useNavigate} from 'react-router-dom'
import authStore from '../stores/authStore'
import { Container, Form, Button } from 'react-bootstrap';

const SignUpForm = () => {
    const store = authStore();
     
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        await store.signup();
        navigate('/login')
    }
  return (
    <>
  <Container className="mt-5" style={{width :"50%"}}>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Email</Form.Label>
          <Form.Control
             type="email"
             name="email"
            placeholder="Enter email"
            value={store.signupForm.email}
            onChange={store.updateSignupForm}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
             type="password"
             name="password"
            placeholder="Enter password"
            value={store.signupForm.password}
            onChange={store.updateSignupForm}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  </>
  )
}

export default SignUpForm