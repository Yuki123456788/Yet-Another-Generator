import {
  Grid2,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  TextField,
  Button
} from '@mui/material';
// import { Edit } from './features/edit';
// import { Artical } from './features/artical';
import { useState } from 'react';
import { ImageUpload } from './features/edit/imageUpload/ImageUpload';

const App = () => {
  const [images, setImages] = useState<File[]>([]);
  const [language, setLanguage] = useState('zh');
  const [style, setStyle] = useState('formal');
  const [length, setLength] = useState(300);
  const [role, setRole] = useState('organizer');
  const [textInfo, setTextInfo] = useState('');

  return (
    <Container>
      <Grid2 display={'flex'} justifyContent={'center'} container spacing={5}>
        <Grid2 size={12}>
          <Typography variant='h1' textAlign={'center'}>
            Yet Another Generator
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            textAlign={'center'}
          >
            上傳圖片，自動生成客製化文案
          </Typography>
        </Grid2>

        {/* 圖片上傳區 */}
        <Grid2 size={6}>
          <ImageUpload 
            images={images} 
            onImagesChange={setImages} 
          />
        </Grid2>

        {/* 文字輸入區域 */}
        <Grid2 size={6}>
          <TextField
            fullWidth
            multiline
            rows={9}
            label="活動資訊"
            placeholder="請輸入活動名稱、時間、主題等相關資訊"
            value={textInfo}
            onChange={(e) => setTextInfo(e.target.value)}
            sx={{ mb: 2 }}
            
          />
          {/* </Box> */}
        </Grid2>

        {/* 文案設定區 */}
        <Grid2 size={3}>
          <Typography><InputLabel>語言</InputLabel></Typography>
          <FormControl fullWidth>
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <MenuItem value="zh">中文</MenuItem>
              <MenuItem value="en">English</MenuItem>
            </Select>
          </FormControl>
        </Grid2>

        <Grid2 size={3}>
          <Typography><InputLabel>風格</InputLabel></Typography>
          <FormControl fullWidth>
            <Select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              <MenuItem value="formal">正式</MenuItem>
              <MenuItem value="casual">輕鬆</MenuItem>
              <MenuItem value="funny">😀 趣味</MenuItem>
            </Select>
          </FormControl>
        </Grid2>

        <Grid2 size={3}>
          <Typography><InputLabel>角色</InputLabel></Typography>
          <FormControl fullWidth>
            <Select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="organizer">舉辦方</MenuItem>
              <MenuItem value="participant">參加者</MenuItem>
            </Select>
          </FormControl>
        </Grid2>

        <Grid2 size={3}>
          <Typography gutterBottom>文章長度</Typography>
          <Slider
            value={length}
            onChange={(_, value) => setLength(value as number)}
            min={100}
            max={1000}
            step={100}
            marks
            valueLabelDisplay="auto"
          />
        </Grid2>
        <Grid2 size={12}>
          <Grid2 direction={'column'} alignItems={'center'} container spacing={2}>
            <Button variant="contained" color="primary">
                    Go Go
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default App;
