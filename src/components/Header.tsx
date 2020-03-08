import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { RootReducerType } from '../reducers';
import { useSelector } from 'react-redux';

export const Header: React.FC = () => {
  const user = useSelector((state: RootReducerType) => state.users.user);

  return (
    <AppBar position="static">
      <Toolbar>
        <div style={{ flexGrow: 1 }} />
        <div style={{ display: 'flex' }}>
          <Grid container direction="row" alignItems="center">
            {user && <Box>Привет, {user.name}</Box>}

            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Grid>
        </div>
      </Toolbar>
    </AppBar>
  );
};
