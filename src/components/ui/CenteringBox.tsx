import React from 'react';
import { Box, BoxProps} from '@mui/material';

import '@styles/ui/CenteringBox.css'

const CenteringBox: React.FC<BoxProps> = (props) => {
    const {children, className, ...rest} = props
    return (
    <Box component="div" className={`hack2024-centering-box ${className}`} {...rest}>
        {children}
    </Box>
  );
}

export default CenteringBox