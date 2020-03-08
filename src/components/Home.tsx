import React from 'react';
import {
  useFirebase,
  useFirebaseConnect,
  isLoaded,
  isEmpty
} from 'react-redux-firebase';
import { useSelector, useDispatch } from 'react-redux';
import passwordHash from 'password-hash';
import { RootReducerType } from '../reducers';
import ModalLogin from './ModalLogin';
import { UserAuthType, UserFirebaseType, PurchaseFirebaseType } from '../types';
import { putUser } from '../actions/users';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import Checkbox from '@material-ui/core/Checkbox';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [newPurchaseText, setNewPurchaseText] = React.useState('');

  useFirebaseConnect([{ path: 'purchases' }, { path: 'users' }]);

  const purchases = useSelector(
    (state: RootReducerType) => state.firebase.ordered.purchases
  );
  const users = useSelector(
    (state: RootReducerType): any => state.firebase.ordered.users
  );
  const user = useSelector((state: RootReducerType) => state.users.user);

  const firebase = useFirebase();

  const updatePurchase = (purchase: PurchaseFirebaseType) => {
    firebase.update(`purchases/${purchase.key}`, {
      completed: !purchase.value.completed
    });
  };

  const removePurchase = (key: string) => {
    firebase.remove(`purchases/${key}`);
  };

  const addPurchase = () => {
    const text = newPurchaseText.trim();
    const newPurchase = {
      text: text,
      completed: false
    };
    if (text) {
      firebase.push('purchases', newPurchase);
      setNewPurchaseText('');
    }
  };

  const checkAuth = ({ login, password }: UserAuthType) => {
    if (users) {
      const authUser = users.find(
        (user: UserFirebaseType) =>
          user.value.login === login &&
          passwordHash.verify(password, user.value.password)
      );
      if (authUser) {
        localStorage.setItem('user', JSON.stringify(authUser.value));
        dispatch(putUser(authUser.value));
      }
    }
  };

  return (
    <Container id="container" maxWidth="sm" className="my-4">
      {user ? (
        <Box>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <TextField
              id="standard-basic"
              style={{ width: '70%' }}
              value={newPurchaseText}
              onChange={event => setNewPurchaseText(event.target.value)}
            />
            <IconButton
              aria-label="comments"
              onClick={addPurchase}
              className="icon-button"
            >
              <AddCircleOutline color="primary" fontSize="large" />
            </IconButton>
            <Button
              variant="contained"
              onClick={addPurchase}
              color="primary"
              className="button"
            >
              Добавить
            </Button>
          </Grid>

          {isLoaded(purchases) ? (
            !isEmpty(purchases) ? (
              <List>
                {purchases.map((purchase: any) => {
                  const labelId = `checkbox-list-label-${purchase.key}`;

                  return (
                    <ListItem key={purchase.key} button divider>
                      <ListItemIcon>
                        <Checkbox
                          inputProps={{ 'aria-labelledby': labelId }}
                          checked={purchase.value.completed}
                          className={
                            purchase.value.completed ? 'color-green' : ''
                          }
                          onChange={() => updatePurchase(purchase)}
                        />
                      </ListItemIcon>
                      <ListItemText
                        id={labelId}
                        className={
                          purchase.value.completed ? 'line-through' : ''
                        }
                        primary={purchase.value.text}
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          aria-label="comments"
                          onClick={() => removePurchase(purchase.key)}
                        >
                          <DeleteIcon style={{ color: 'red' }} />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <Box textAlign="center" component="h3">
                Покупок нет
              </Box>
            )
          ) : (
            <Box textAlign="center" component="h3">
              Loading . . .
            </Box>
          )}
        </Box>
      ) : (
        <ModalLogin checkAuth={checkAuth} />
      )}
    </Container>
  );
};

export default React.memo(Home);
