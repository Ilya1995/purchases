import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { RootReducerType } from '../reducers';
import { logoutUser } from '../actions/users';
import { useSelector, useDispatch } from 'react-redux';

export const Header: React.FC = () => {
  const user = useSelector((state: RootReducerType) => state.users.user);

  const dispatch = useDispatch();
  const handleClick = () => {
    localStorage.removeItem('user');
    dispatch(logoutUser());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box flexGrow={1} />
        <Box display={'flex'}>
          <Grid container direction="row" alignItems="center">
            {user ? (
              <>
                <Box>Привет, {user.name}</Box>
                <IconButton color="inherit" onClick={handleClick}>
                  <ExitToAppOutlinedIcon />
                </IconButton>
              </>
            ) : (
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
            )}
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
