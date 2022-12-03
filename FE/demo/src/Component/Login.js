import React, { Component } from "react";
import { Container, Card, Col } from 'react-bootstrap';

export default class Login extends Component {
  render() {
    return (
      <>
        <Container>
          <Col md="4">
            <Card style={{ width: "50%" }}>
              <Card.Body>
                <Card.Title><h3>New Customer</h3></Card.Title>
                <Card.Text><h4 style={{ color: "Grey", }}>Register</h4></Card.Text>
                <Card.Text>
                  By creating an account you will be able to shop faster, be up to date on an
                  order's status, and keep track of the orders you have previously made.
                </Card.Text>
                <button className="btn button1">Continue</button>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </>
    );
  }
}
