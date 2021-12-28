import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap'
import { Context } from '../..'

const CreateDevice = ({ show, onHide }) => {
    const { device } = useContext(Context)
    const [Info, setInfo] = useState([])
    const addInfo = () => {
        setInfo([...Info, { title: '', description: '', number: Date.now() }])
    }
    const deleteInfo = (number) => {
        setInfo(Info.filter(i=>i.number!==number))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add the New Device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className=''>
                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle className='mr-2'>Choose type</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device._types.map(type =>
                                <Dropdown.Item key={type.id}>
                                    {type.name}
                                </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle className='mr-2'>Choose brand</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device._brands.map(brand =>
                                <Dropdown.Item key={brand.id}>
                                    {brand.name}
                                </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className='mt-3'
                        placeholder='Insert name'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Insert price'
                        type='number'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Upload picture'
                        type='file'
                    />
                    <hr></hr>
                    <Button
                        variant={'outline-dark'}
                        onClick={addInfo}
                    >
                        Add new property
                    </Button>
                    {Info.map(i =>
                        <Row className='mt-3' key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Name of the property'
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Desc of the property'
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    variant={'outline-danger'}
                                    onClick={()=>deleteInfo(i.number)}
                                >
                                    Delete
                                </Button>
                            </Col>
                        </Row>)}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateDevice
