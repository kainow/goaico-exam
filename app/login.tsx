import { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

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

  return (
    <Container maxWidth="sm" className="mt-10">
      <Typography variant="h2" align="center" className="mb-8">
        ログイン
      </Typography>
      <form>
        <TextField
          label="ユーザーID"
          variant="outlined"
          fullWidth
          value={username}
          onChange={handleUsernameChange}
          className="mb-4"
        />
        <TextField
          label="パスワード"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          className="mb-4"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          ログイン
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
