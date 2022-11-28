import React, { useState } from "react";

import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Datastrore = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  return (
    <>
      <Container>
        <Form>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={user.name}
                  placeholder="Enter name"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={user.email}
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={user.phone}
                  placeholder="enter phone"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Work</Form.Label>
                <Form.Control
                  type="text"
                  name="work"
                  value={user.work}
                  placeholder="enter work"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={user.password}
                  placeholder="Enter password"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>{" "}
          </Row>
        </Form>
      </Container>
    </>
  );
};
export default Datastrore;
