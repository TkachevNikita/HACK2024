import * as React from 'react';
import Box from '@mui/material/Box';
import type { BoxProps } from '@mui/material/Box';

const PageContainer: React.FC<BoxProps> = (props) => {
    const {children, ...rest} = props
    return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }} {...rest}>
        {children}
    </Box>
  );
}

export default PageContainer