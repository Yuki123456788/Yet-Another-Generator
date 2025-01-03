import { Box, Button, ImageList, ImageListItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import { useState } from 'react';

interface ImageUploadProps {
  images: File[];
  onImagesChange: (images: File[]) => void;
}

export const ImageUpload = ({ images, onImagesChange }: ImageUploadProps) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newImages = Array.from(event.target.files);
      onImagesChange([...images, ...newImages]);
    }
  };

  const handleDeleteImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    onImagesChange(newImages);
  };

  return (
    <Box>
      <Box
        sx={{
          border: '2px dashed #ccc',
          borderRadius: 2,
          padding: 3,
          textAlign: 'center',
          marginBottom: 2
        }}
        minHeight={200}
      >
        <input
          accept="image/*"
          type="file"
          onChange={handleImageChange}
          style={{ display: 'none' }}
          id="image-upload"
          multiple
        />
        <label htmlFor="image-upload">
          <Button variant="contained" component="span">
            上傳圖片
          </Button>
        </label>
        {images.length > 0 && (
          <ImageList sx={{ width: '100%' }} cols={3} rowHeight={164}>
            {images.map((image, index) => (
              <ImageListItem key={index}>
                <img
                  src={URL.createObjectURL(image)}
                  alt={`預覽 ${index + 1}`}
                  loading="lazy"
                  style={{ height: '164px', objectFit: 'cover' }}
                />
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' }
                  }}
                  onClick={() => handleDeleteImage(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Box>
      
    </Box>
  );
};