import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function AddQuestion(){
    
    const [question, setQuestion] = useState("");
    const [choice1, setChoice1] = useState("");
    const [choice2, setChoice2] = useState("");
    const [choice3, setChoice3] = useState("");
    const [choice4, setChoice4] = useState("");
    const [answer, setAnswer] = useState("");

    return(
        <>
            <div>
                add question
            </div>
            <div>
                
            <Form>
          <Form.Group>
            <Form.Label>คำถาม</Form.Label>
            <Form.Control
              type="email"
              placeholder="กรอกคำถาม"
              onChange={(e) => setQuestion(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>ตัวเลือกที่ 1</Form.Label>
            <Form.Control
              type="password"
              placeholder="ตัวเลือกที่ 1"
              onChange={(e) => setChoice1(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>ตัวเลือกที่ 2</Form.Label>
            <Form.Control
              type="password"
              placeholder="ตัวเลือกที่ 2"
              onChange={(e) => setChoice2(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>ตัวเลือกที่ 3</Form.Label>
            <Form.Control
              type="password"
              placeholder="ตัวเลือกที่ 3"
              onChange={(e) => setChoice3(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>ตัวเลือกที่ 4</Form.Label>
            <Form.Control
              type="password"
              placeholder="ตัวเลือกที่ 4"
              onChange={(e) => setChoice4(e.target.value)}
            />
          </Form.Group>
          
          <Button>Log in</Button>
        </Form>
            </div>
        </>
    )
}