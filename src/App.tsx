import {
  Grid2,
  Container,
  CircularProgress,
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
import { Artical } from './features/artical';
import { useState, useEffect, useCallback } from 'react';
import { ImageUpload } from './features/edit/imageUpload/ImageUpload';
import { useGetArticle } from './hooks';

const App = () => {
  const [imageKeys, setImageKeys] = useState<string[]>([]);
  const [language, setLanguage] = useState('zh');
  const [style, setStyle] = useState('formal');
  const [length, setLength] = useState(300);
  const [role, setRole] = useState('organizer');
  const [textInfo, setTextInfo] = useState('');

  const [content, setContent] = useState('');
  const [uploadImagesKey, setUploadImagesKey] = useState(0);

  const [imagesUploading, setImagesUploading] = useState(false);

  const handleImageKeysChange = useCallback((newKeys: string[]) => {
    setImageKeys(prevKeys => [...prevKeys, ...newKeys]);
  }, []);

  const handleImageUploading = (isUploading: boolean) => {
    setImagesUploading(isUploading);
  };

  const handleClear = () => {
    setImageKeys([]);
    setLanguage('zh');
    setStyle('formal');
    setLength(300);
    setRole('organizer');
    setTextInfo('');
    setContent('');
    setUploadImagesKey(prevKey => prevKey + 1);
  };

  const params = {
    imageKeys: imageKeys,
    language: language,
    style: style,
    role: role,
    length: length,
    textinfo: textInfo,
  };
  
  const { mutate: getArticle, data, isLoading: getArticleLoading } = useGetArticle();
  const handleGenerate = () => {
    console.log(params);
    getArticle(params);
  };

  useEffect(() => {
    if (data) {
      setContent(data.content);
    }
  }, [data]);

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
            key={uploadImagesKey}
            handleImageUploading={handleImageUploading}
            handleImageKeysChange={handleImageKeysChange}
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
              <MenuItem value="inspirational">勵志</MenuItem>
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
        <Grid2 display={'flex'} justifyContent={'center'} size={12}>
          <Grid2 direction={'row'} alignItems={'center'} container spacing={2}>
            <Button variant="contained" color="primary" onClick={handleGenerate} disabled={imagesUploading || getArticleLoading}>
              {imagesUploading || getArticleLoading ? <CircularProgress size={24} /> : 'Go Go'}
            </Button>
            <Button variant='outlined' onClick={handleClear}>
              Clear
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2
        container
        justifyContent="center"
        alignItems="flex-end"
        style={{ minHeight: '20vh', marginTop: '10px', marginBottom: '20px' }}
      >
        <Artical content={content} loading={getArticleLoading} />
      </Grid2>
    </Container>
  );
};

export default App;
