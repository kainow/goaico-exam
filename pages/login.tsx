import { useState } from 'react';
import { Container, TextField, Button, Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#a1a1b7',  // Blue
        contrastText: '#ffffff',  // White
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="sm" sx={{ mt: 30, px: isMobile ? 5 : 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }} className ="mt-10">
      <Box sx={{ my: 2 }}>
      <img src="/logo.svg" alt="Logo" style={{ margin: 'auto', display: 'block', marginBottom: '20px', width: isMobile ? '80%' : '60%', height: 'auto'}} /> {/* SVGファイルを表示 */}
      </Box>
      <form style={{ width: '80%' }}>
        <Box sx={{ my: 2 }}>
          <TextField
            label="ユーザーID"
            variant="outlined"
            fullWidth
            value={username}
            onChange={handleUsernameChange}
            className="mb-4"
            sx={{
              '&& .MuiFormLabel-root': {
                color: '#a1a1b7',  // Change this to the color you want for the label
              },
              '&& .MuiFormLabel-root.Mui-focused': {
                color: '#a1a1b7',  // Change this to the color you want for the focused label
              },
              '&& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#a1a1b7',
              },
              '&& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#a1a1b7',
              },
            }}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <TextField
            label="パスワード"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            className="mb-4"
            sx={{
              '&& .MuiFormLabel-root': {
                color: '#a1a1b7',  // Change this to the color you want for the label
              },
              '&& .MuiFormLabel-root.Mui-focused': {
                color: '#a1a1b7',  // Change this to the color you want for the focused label
              },
              '&& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#a1a1b7',
              },
              '&& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#a1a1b7',
              },
            }}
          />
        </Box>
        <Box sx={{ my: 2, mt:10 ,display: 'flex', justifyContent: 'center'}}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            sx={{
              width: 300,
              height: 50,
              borderRadius: 30,
              backgroundColor: '#a1a1b7',
              '&:hover': {
                backgroundColor: '#40406c', 
              },
            }}
          >
            ログイン
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default LoginPage;
