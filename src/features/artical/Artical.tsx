import {
  Box,
  TextField,
} from '@mui/material';


export const Artical = () => {
  return (
    <Box sx={{
      width: '80%',
      borderRadius: '5px'
    }}>
      <TextField
        id="outlined-multiline-static"
        label="Artical"
        multiline
        rows={4}
        maxRows={10}
        defaultValue=""
        variant="outlined"
        sx={{
          width: '100%',
          height: '100%'
        }}
      />
    </Box>
  );
};

export default Artical;
