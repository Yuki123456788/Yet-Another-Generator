import { Box, Button, ImageList, ImageListItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useUploadImages } from '../../../hooks';
import { useState, useEffect } from 'react';

interface ImageUploadProps {
  handleImageUploading: (isUploading: boolean) => void;
  handleImageKeysChange: (keys: string[]) => void;
}

export const ImageUpload = ({ handleImageUploading, handleImageKeysChange }: ImageUploadProps) => {
  const [images, setImages] = useState<File[]>([]);
  const { imageKeys, uploadImages, isLoading } = useUploadImages(); // custom hook

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newImages = Array.from(event.target.files);
      setImages(prevImages => [...prevImages, ...newImages]);
      uploadImages(newImages);
    }
  };

  useEffect(() => {
    handleImageUploading(isLoading);
  }, [isLoading, handleImageUploading]);

  useEffect(() => {
    if (imageKeys.length > 0) {
      handleImageKeysChange(imageKeys);
    };
    console.log(imageKeys);
  }, [imageKeys, handleImageKeysChange]);

  const handleDeleteImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
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
                  disabled={isLoading}
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