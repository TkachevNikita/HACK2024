import React from 'react'
import { Button, ButtonProps } from '@mui/material'

import '@styles/ui/Button.css'

const DefaultButton: React.FC<ButtonProps> = (props) => {
    const {children, ...rest} = props
    return <Button className="hack2024-button-default" {...rest}>{children}</Button>
}

export default DefaultButton