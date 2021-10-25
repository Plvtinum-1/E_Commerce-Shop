import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './Contact.css'

const Contact = () => {
    return (
        <div className='container'>
           <Form className='cont'>
              <h1 className='c-t'>Contact Us</h1>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" placeholder="full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Text</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default Contact
