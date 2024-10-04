import * as React from 'react';
import Box from '@mui/material/Box';
import type { BoxProps } from '@mui/material/Box';

const PageContainer: React.FC<BoxProps> = (props) => {
    const {children, ...rest} = props
    return (
    <Box component="section" sx={{ 
      // border: '1px dashed grey',
      display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: 1320, marginLeft: 'auto', marginRight: 'auto', paddingLeft: '10px', paddingRight: '10px' }} {...rest}>
        {children}
    </Box>
  );
}

export default PageContainer