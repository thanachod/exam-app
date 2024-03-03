import { Button, Form } from "react-bootstrap";
import NavigatorBar from "../components/NavigatorBar";
import { useState } from "react";

export default function AddExam() {
  

  return (
    <>
      <NavigatorBar />
      <div>add-exam</div>
      <div>
        <Form>
            <Form.Group>
                <Form.Label>หัวเรื่องข้อสอบ</Form.Label>
                <Form.Control
                type="text"
                placeholder="กรอกหัวข้อสอบ"
                ></Form.Control>
            </Form.Group>
        </Form>
        
      </div>
    </>
  );
}
