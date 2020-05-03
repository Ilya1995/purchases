import React, { useMemo, useEffect, useState } from 'react';
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { ItemFirebaseType } from '../types';
import { RootReducerType } from '../reducers';
import { sortItemsSelector } from '../selectors';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

type PropsType = {
  titleItem: string;
};

const ItemList: React.FC<PropsType> = ({ titleItem }) => {
  const selectNumOfTodosWithIsDone = useMemo(sortItemsSelector, []);
  const items = useSelector((state: RootReducerType) =>
    selectNumOfTodosWithIsDone(state, titleItem)
  );

  const [fakeLoading, setFakeLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFakeLoading(false);
    }, 2500);
  }, [items, setFakeLoading]);

  const firebase = useFirebase();

  const updateItem = (item: ItemFirebaseType) => {
    firebase.update(`${titleItem}/${item.key}`, {
      completed: !item.value.completed,
    });
  };

  const removeItem = (key: string) => {
    firebase.remove(`${titleItem}/${key}`);
  };

  const removeAllItem = () => {
    items.forEach((item) => removeItem(item.key));
  };

  const removeCompletedItem = () => {
    items.forEach((item) => item.value.completed && removeItem(item.key));
  };

  return (
    <>
      {isLoaded(items) || !fakeLoading ? (
        !isEmpty(items) ? (
          <List>
            {items.map((item: ItemFirebaseType) => {
              const labelId = `checkbox-list-label-${item.key}`;

              return (
                <ListItem key={item.key} button divider>
                  <ListItemIcon>
                    <Checkbox
                      inputProps={{ 'aria-labelledby': labelId }}
                      checked={item.value.completed}
                      className={item.value.completed ? 'color-green' : ''}
                      onChange={() => updateItem(item)}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    className={item.value.completed ? 'line-through' : ''}
                    primary={item.value.text}
                    style={{ marginRight: 5 }}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      aria-label="comments"
                      onClick={() => removeItem(item.key)}
                    >
                      <DeleteIcon style={{ color: 'red' }} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Button
                variant="contained"
                onClick={removeCompletedItem}
                color="primary"
                className="button-remove"
              >
                Удалить <CheckBoxIcon style={{ marginLeft: 10 }} />
              </Button>

              <Button
                variant="contained"
                onClick={removeAllItem}
                color="primary"
                className="button-remove"
              >
                Удалить все
              </Button>
            </Grid>
          </List>
        ) : (
          <Box textAlign="center" component="h3">
            Список пуст
          </Box>
        )
      ) : (
        <Box textAlign="center" component="h3">
          Loading . . .
        </Box>
      )}
    </>
  );
};

export default React.memo(ItemList);
