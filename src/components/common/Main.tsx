import React from 'react'

const Main: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <main style={{flex: '1 0 auto'}}>{children}</main>
  )
}

export default Main