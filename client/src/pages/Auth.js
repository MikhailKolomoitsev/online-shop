import React from 'react'
import { Container, Form, Card } from 'react-bootstrap'

const Auth = () => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>Authorization form</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className='mt-2'
                        placeholder='Insert e-mail'
                    />
                    <Form.Control
                        className='mt-2'
                        placeholder='Insert e-mail'
                    />
                </Form>
            </Card>

        </Container>
    )
}

export default Auth
