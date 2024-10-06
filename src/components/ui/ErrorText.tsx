import React from 'react'
import { Typography, TypographyProps } from '@mui/material'

import '@styles/ui/ErrorText.css'

const HintText: React.FC<TypographyProps> = (props) => {
    const {children, ...rest} = props
    return <Typography component="h3" className='hack2024-error-text' {...rest}>{children}</Typography>
}

export default HintText