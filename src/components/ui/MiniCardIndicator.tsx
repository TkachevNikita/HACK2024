import React from 'react'

import '@styles/ui/MiniCardIndicator.css'

const MiniCardIndicator: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className='hack2024-mini-card-indicator'>
        <p >
            {children}
        </p>
    </div>
  )
}

export default MiniCardIndicator