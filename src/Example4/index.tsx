import React from 'react';
import { menu } from './menu';
import { TreeMenu } from './TreeMenu';
import { Box } from '@mui/material';

export const Example4: React.FC = () => {
  return (
    <Box width="100%" maxWidth={200} bgcolor="#f0f0f5">
      <TreeMenu menu={menu} />
    </Box>
  );
};
