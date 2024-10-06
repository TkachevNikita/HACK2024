import React from 'react';
import { Box, BoxProps} from '@mui/material';

const ComponentContainer: React.FC<BoxProps> = (props) => {
    const {children, ...rest} = props
    return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }} {...rest}>
        {children}
    </Box>
  );
}

export default ComponentContainer