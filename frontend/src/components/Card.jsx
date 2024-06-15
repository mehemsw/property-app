import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Card = ({ children }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, margin: 2, borderRadius: '10px', backgroundColor: '#f5f5f5' }}>
      <Box>
        {children}
      </Box>
    </Paper>
  );
};

export default Card;
