import React from 'react'

const MiniCardIndicator: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div style={{padding: '4px 12px', backgroundColor: '#F7F7F7', borderRadius: 8}}>
        <p style={{fontSize: 14}}>
            {children}
        </p>
    </div>
  )
}

export default MiniCardIndicator