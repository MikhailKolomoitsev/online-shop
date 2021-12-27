import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import star from '../assets/star.png'
import { DEVICE_ROUTE } from '../utils/constants'

const DeviceItem = ({ device }) => {
    const history = useHistory()
    console.log(history)
    return (
        <Col
            md={3}
            className='mt-3'
            onClick={()=>history.push(DEVICE_ROUTE+'/'+device.id)}
        >
            <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
                <Image src={device.img} width={150} height={150} />
                <div className='d-flex justify-content-between align-items-center mt-1 text-black-50'>
                    <div>BrandName</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.raiting}</div>
                        <Image src={star} width={18} height={18} />
                    </div>
                </div>
                <div>
                    <h3 style={{ fontSize: 20 }}>{device.name}</h3>
                </div>
            </Card>
        </Col>
    )
}

export default DeviceItem
