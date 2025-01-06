import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  CircularProgress
} from '@mui/material';
import { ContentCopy } from '@mui/icons-material';

export const Artical = ({ content, loading }: {content: string, loading: boolean}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <Box sx={{
      width: '80%',
      borderRadius: '5px',
    }}>
      {loading && (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <CircularProgress />
        </Box>
      )}
      {loading || content=== '' ? null : (
        <InputAdornment position="end">
          <TextField
            multiline
            rows={10}
            defaultValue={content}
            variant="outlined"
            sx={{
              width: '100%',
              height: '100%'
            }}
            disabled={loading}
          />
          <IconButton onClick={handleCopy}>
            <ContentCopy />
          </IconButton>
        </InputAdornment>
      )}
    </Box>
      
  );
};

export default Artical;
