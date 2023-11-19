import React from "react";
import { useNavigate } from 'react-router-dom'
import authStore from "../stores/authStore";
import { Container, Form, Button } from 'react-bootstrap';


const Loginform = () => {
  const store = authStore();
  const navigate = useNavigate();
  const handleLogin = async(e) =>{
    e.preventDefault();
   await store.login();
      navigate('/')
  }
  return (
    <>
    <Container className="mt-5" style={{width :"50%"}}>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Email</Form.Label>
          <Form.Control
             type="email"
             name="email"
            placeholder="Enter email"
            value={store.loginForm.email}
            onChange={store.updateLoginForm}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
             type="password"
             name="password"
            placeholder="Enter password"
            value={store.loginForm.password}
            onChange={store.updateLoginForm}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
    </>
  );
};

export default Loginform;
