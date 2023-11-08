import React from 'react'
import { Card } from 'react-bootstrap'


const Pictures = (data) => {
  return (
    <div>
     <Card style={{ width: '18rem' }}>
     <div className='w-100 a'>
      <Card.Img className='image'  style={{width:"100%", height:"50vh"}} variant="top" src={data?.src?.large} />
      </div>
      <Card.Body>
        <Card.Title> {data.photographer}</Card.Title>
        
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default Pictures