import React from 'react'
import { Typography } from '@mui/material'
import { TypographyProps } from '@mui/material'
import '@styles/ui/Copyright.css'

const Copyright: React.FC<TypographyProps> = (props) => {
    const {children, ...rest} = props
    return <Typography component="p" className='hack2024-copyright' {...rest}>{children}</Typography>
}

export default Copyright