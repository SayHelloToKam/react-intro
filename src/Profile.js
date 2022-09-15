import React from 'react'

function Profile(props) {
  return (
    <div className='container-profile'>
        <h2>Profile Area</h2>
        <p>{props.userName}</p>
        <p>{props.title}</p>
        <p>{props.description}</p>
    </div>
  )
}

export default Profile