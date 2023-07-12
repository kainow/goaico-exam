import { Box } from '@mui/material';

const MainPage = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', margin: 0, padding: 0 }}>
      <Box sx={{ width: '15%', bgcolor: '#40406c' }} />
      <Box sx={{ width: '85%' }} />
    </div>
  );
};

export default MainPage;
