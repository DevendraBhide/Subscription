 import React, { useState } from 'react'
 
import Register from './Register';
import Subscription from './Subscription';
import Service from './Service'

 
 const App = () => {
  const [userData,setUserData]=useState(null)
   return (
      <div>
         {!userData ? (
        <Register registration={setUserData} />
      ) : (
        <>
          <Subscription status={userData.status} endDate={userData.endDate} start={userData.start} />
          <br /><hr /><br />
          <Service status={userData.status} />
          <hr />
        </>
      )}
      </div>
   )
 }
 
 export default App