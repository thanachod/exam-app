import { useState } from "react";
import NavigatorBar from "../components/NavigatorBar";
import { Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

    function handleLogin() {

    }

  return (
    <>
      <NavigatorBar />
      <div className="form-style">
      <Form>
          <h1 className="form-header">Log in</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button onClick={handleLogin}>Log in</Button>
        </Form>
        
      </div>
    </>
  );
}