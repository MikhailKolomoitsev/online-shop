import React from 'react'//rafce snippet
import { Container, Row, Col } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { useContext } from 'react'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import { useEffect } from 'react'
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI'
import Pages from '../components/Pages'

const Shop = observer(() => {
    const { device } = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
        
    }, [])
    return (
        <Container>
            <Row>
                <Col md={3} className='mt-2'>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                    <Pages/>
                </Col>
            </Row>
        </Container>
    )
})

export default Shop
