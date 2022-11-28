import react, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const User = () => {
  const initialData = { name: "", email: "", password: "" };

  const [formData, setFormData] = useState(initialData);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = setFormData({ ...formData, [name]: value });
    console.log(e.target.value);

    setFormErrors(validation(formData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // alert("submited successfuly");
  };

  const validation = (value) => {
    const errors = {};
    if (!value.name) {
      errors.name = "name is required";
    } else if (value.name.length < 4) {
      errors.name = "name is must be more then 4 char";
    } else if (value.name.length > 4) {
      errors.name = null;
    }

    if (!value.email) {
      errors.email = "email is required";
    } else if (value.email.length === 1) {
      errors.email = "";
    }
    if (!value.password) {
      errors.password = "password is required";
    } else if (value.password.length < 4) {
      errors.password = "password is must be more then 4 char";
    } else if (value.password.length > 4) {
      errors.password = null;
    }
    return errors;
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <span style={{ color: "red", fontsize: "20px" }}>
            {formErrors.name}
          </span>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <span style={{ color: "red", fontsize: "20px" }}>
            {formErrors.email}
          </span>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="enter Password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <span style={{ color: "red", fontsize: "20px" }}>
            {formErrors.password}
          </span>
          <br />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default User;
