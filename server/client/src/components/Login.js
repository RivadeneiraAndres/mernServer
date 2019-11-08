import React from 'react';
import { Button, Container, Row, Col} from 'reactstrap';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import '../css/Login.css';
const Login = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="6">
          {/* <Button to="/Logueado"color="link" className="link">Log in</Button> */}
            <Link to="/logueado">Log in</Link>

          
        </Col>
        <Col xs="6">
          {/* <Button to="/Navegador" color="link" className="link">Create Account</Button> */}
            <Link to="/create-acount">Create acount</Link>
        </Col>
      </Row>   
    </Container>
  );
}


export default Login;
