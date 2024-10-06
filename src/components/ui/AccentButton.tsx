import React from 'react';
import { Button, ButtonProps } from "@mui/material";

import '@styles/ui/AccentButton.css'

const AccentButton: React.FC<ButtonProps> = (props) => {
    const {children, ...rest} = props;
    return <Button className="hack2024-button accent" {...rest}>{children}</Button>
};

export default AccentButton;