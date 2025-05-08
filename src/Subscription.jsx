import React from 'react'

const Subscription = ({endDate,status,start}) => {
    
  return (
     <>
     <h3 className='text-center bg-dark text-white p-3'>Subscription Status : <span className='text-info'>{status}</span></h3>
     <h4 className='text-center mt-5'>
      Your Subscription Valid between : <span className='text-primary'>{start.toDateString()}</span> to <span className='text-danger'>{endDate.toDateString()} </span>
      
     </h4>
    
     </>
  )
}

export default Subscription;