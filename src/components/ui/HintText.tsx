import React from 'react'
import { Typography } from '@mui/material'
import { TypographyProps } from '@mui/material'
import '@styles/ui/HintText.css'

const HintText: React.FC<TypographyProps> = (props) => {
    const {children, ...rest} = props
    return <Typography component="h3" className='hack2024-hint-text' {...rest}>{children}</Typography>
}

export default HintText