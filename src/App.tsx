import {
  Grid2,
  Container,
  Typography,
} from '@mui/material';
import { Edit } from './features/edit';
import { Artical } from './features/artical';

const App = () => {
  return (
    <Container>
      <Grid2 display={'flex'} justifyContent={'center'} container spacing={5}>
        <Grid2 size={12}>
          <Typography
            variant='h1'
            textAlign={'center'}
          >
              Yet Another Generator
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            textAlign={'center'}
          >
              Help you generate your own artical by simply upload your images.
          </Typography>
        </Grid2>
        <Grid2 size={12}>
          <Grid2 direction={'column'} alignItems={'center'} container spacing={2}>
            <Grid2 display={'flex'} justifyContent={'center'} size={12}>
              <Edit />
            </Grid2>
            <Grid2 display={'flex'} justifyContent={'center'} size={12}>
              <Artical />
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default App;
