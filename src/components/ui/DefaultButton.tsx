import React from 'react'
import { Button } from '@mui/material'
import '@styles/ui/Button.css'
import type { ButtonProps } from '@mui/material/Button';

const DefaultButton: React.FC<ButtonProps> = (props) => {
    const {children, ...rest} = props
    return <Button className="hack2024-button" {...rest}>{children}</Button>
}

export default DefaultButton