import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from '../assets/bigStar.png'

const Device = () => {
    const device = {
        id: 1,
        name: 'iPhone 12 pro',
        price: 25000, raiting: 5,
        img: 'https://visanta.com/56561-pos_thickbox/iphone-12-pro-256gb-grafito.jpg'
    }
    return (
        <Container className="mt-3">
            <Row>

                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 250, height: 240,
                                backgroundSize: "cover",
                                fintSize: 64
                            }}
                        >
                            {device.raiting}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-columnt align-items-center justify-content-center"
                        style={{width:300, height: 300, fontSize:32, border: '3px solid lightgrey'}}
                    >
                        <h3>Price from: {device.price} ₴</h3>
                        <Button variant={"outline-success"}>Add to chart</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Device