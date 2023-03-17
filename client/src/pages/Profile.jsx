import React from 'react'
import { useStateContext } from '../context/stateContext'
const Profile = () => {

    const {address} = useStateContext()
  return (
    <>
        {address != null ? <p>welcome {address}</p> : <p>connect to a wallet</p> }
    </>
  )
}

export default Profile;