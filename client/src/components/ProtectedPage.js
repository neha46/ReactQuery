import React from 'react'


const protectedPage = ({children}) => {
  return (
  <div>
    {children}
  </div>
  )
}

export default protectedPage;