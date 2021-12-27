import React from 'react'//rafce snippet
import { Container, Row, Col } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { useContext } from 'react'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'

const Shop = observer(() => {
    const { device } = useContext(Context)
    return (
        <Container>
            <Row>
                <Col md={3} className='mt-2'>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    )
})

export default Shop
