import React, { FC, useState } from 'react';
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { UIStore } from '@stores';

export const Login: FC = () => {
  const uiStore = UIStore.useStore();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const canLogin = username.length > 0 && password.length > 0;

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleLoginClick = () => {
    uiStore.login(username, password);
  };

  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Typography variant="h3">Login</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={4}>
          <Grid item>
            <FormControl>
              <InputLabel htmlFor="standard-adornment-username">Username</InputLabel>
              <Input id="standard-adornment-username" value={username} onChange={handleUsernameChange} />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button disabled={!canLogin} variant="contained" color="primary" onClick={handleLoginClick}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
};
