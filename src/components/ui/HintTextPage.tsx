import React from 'react'
import { Typography, TypographyProps } from '@mui/material'

import '@styles/ui/HintTextPage.css'

const HintTextPage: React.FC<TypographyProps> = (props) => {
    const {children, ...rest} = props
    return <Typography component="h3" className='hack2024-hint-text-page' {...rest}>{children}</Typography>
}

export default HintTextPage