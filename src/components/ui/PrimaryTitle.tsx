import React from 'react'
import { Typography } from '@mui/material'
import { TypographyProps } from '@mui/material'
import '@styles/ui/PrimaryTitle.css'

const PrimaryTitle: React.FC<TypographyProps> = (props) => {
    const {children, ...rest} = props
    return <Typography component="h2" className='hack2024-primaryTitle' {...rest}>{children}</Typography>
}

export default PrimaryTitle