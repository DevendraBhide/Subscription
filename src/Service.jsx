import React from 'react'

const Service = ({status}) => {
    const handleRefresh = () => {
        window.location.reload(); 
      };

  return (
    
    status==="Active"?(
   
 <>
 <h5 className='text-center'>Your subscription is <span className='text-info '>{status}</span> </h5>
<h3 className='text-center'> Enjoy Our services</h3>  

<div className="text-center"><button className='btn btn-outline-dark' onClick={handleRefresh}>
      Register
    </button></div>
</>
    ) : (
    <>
  <h4 className='text-center'> Your Subscription is {status} now, Renew to get Services</h4>
   
   <div className="text-center"><button className='btn btn-outline-dark mt-3' onClick={handleRefresh}>
      Register
    </button></div>
   </>
    )
   
   )
   
}

export default Service

 