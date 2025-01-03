import { useState } from 'react';
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';


export const ArticalOption = () => {
  const [language, setLanguage] = useState('english');
  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setLanguage(newAlignment);
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '80%',
      height: '20vh',
      backgroundColor: 'lightgrey',
      borderRadius: '10px',
      padding: '10px'
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6">
          Language
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={language}
          onChange={handleChange}
          exclusive
        >
          <ToggleButton value="english">English</ToggleButton>
          <ToggleButton value="chinese">Chinese</ToggleButton>
          <ToggleButton value="both">Both</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};

export default ArticalOption;
