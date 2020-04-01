import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { UserAuthType } from '../types';

type PropsType = {
  checkAuth: ({ login, password }: UserAuthType) => void;
};

const ModalLogin: React.FC<PropsType> = props => {
  const handleClickAuth = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const login = event.currentTarget.login.value;
    const password = event.currentTarget.password.value;
    props.checkAuth({ login, password });
  };

  return (
    <Dialog
      open={true}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogContent>
        <Container component="main" maxWidth="xs">
          <Box
            mt={6}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Авторизация
            </Typography>
            <form
              style={{ width: '100%', marginTop: '8px' }}
              onSubmit={handleClickAuth}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="login"
                label="Login"
                name="login"
                autoComplete="login"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ margin: '24px 0 16px' }}
              >
                Войти
              </Button>
            </form>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(ModalLogin);
