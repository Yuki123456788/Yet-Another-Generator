import { Box } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';


export const ImageUpload = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '35vh',
      backgroundColor: 'lightgrey',
      borderRadius: '10px'
    }}>
      <ImageIcon />
    </Box>
  );
};

export default ImageUpload;
