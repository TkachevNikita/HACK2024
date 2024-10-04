import React from 'react'
import { TextField } from '@mui/material'
import '@styles/ui/TextField.css'
import type { TextFieldProps } from '@mui/material/TextField';

const DefaultTextField: React.FC<TextFieldProps> = (props) => {
    const {children, ...rest} = props
    return <TextField className="hack2024-textField" {...rest}>{children}</TextField>
}

export default DefaultTextField