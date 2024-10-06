import React from 'react';
import { Box, BoxProps } from '@mui/material';

import "@styles/ui/PageContainer.css";

const PageContainer: React.FC<BoxProps> = (props) => {
    const {children, ...rest} = props
    return (
    <Box component="div" className='hack2024-page-container' {...rest}>
        {children}
    </Box>
  );
}

export default PageContainer