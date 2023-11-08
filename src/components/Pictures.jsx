import React from 'react'
import { Card } from 'react-bootstrap'


const Pictures = (data) => {
  return (
   
     <Card style={{ width: '18rem' }}>
     <div className='w-100 a'>
      <Card.Img className='image'  style={{width:"100%", height:"50vh"}} variant="top" src={data?.src?.large} />
      </div>
      <Card.Body>
        <Card.Title> {data.photographer}</Card.Title>
        
      </Card.Body>
    </Card>
      
    
  )
}

export default Pictures