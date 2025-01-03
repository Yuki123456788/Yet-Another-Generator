import { Grid2, Button } from "@mui/material";
import { ImageUpload } from "./imageUpload";
import { ArticalOption } from "./atricalOption";


export const Edit = () => {
  return (
    <Grid2 width={'100%'} container spacing={2}>
      <Grid2 display={'flex'} justifyContent={'center'} size={12}>
        <ImageUpload />
      </Grid2>
      <Grid2 display={'flex'} justifyContent={'center'} size={12}>
        <ArticalOption />
      </Grid2>
      <Grid2 display={'flex'} justifyContent={'center'} size={12}>
        <Button variant="contained" color="primary">
                    Go Go
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default Edit;
