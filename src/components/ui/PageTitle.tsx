import React from 'react'
import { Typography } from '@mui/material'
import { TypographyProps } from '@mui/material'
import '@styles/ui/PageTitle.css'

const PageTitle: React.FC<TypographyProps> = (props) => {
    const {children, ...rest} = props
    return <Typography component="h1" className='hack2024-page-title' {...rest}>{children}</Typography>
}

export default PageTitle