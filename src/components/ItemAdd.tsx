import React, { useRef } from 'react';
import { useFirebase } from 'react-redux-firebase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

type PropsType = {
  titleItem: string;
};

const ItemAdd: React.FC<PropsType> = ({ titleItem }) => {
  const [newItemText, setNewItemText] = React.useState('');
  const inputEl = useRef(document.createElement('input'));
  const firebase = useFirebase();

  const addItem = (event: React.FormEvent) => {
    event.preventDefault();
    const text = newItemText.trim();
    const newItem = {
      text: text,
      completed: false,
      timestamp: Date.now(),
    };
    if (text) {
      firebase.push(titleItem, newItem);
      setNewItemText('');
      inputEl.current.focus();
    }
  };

  return (
    <form onSubmit={addItem}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <TextField
          id="standard-basic"
          style={{ width: '70%' }}
          value={newItemText}
          multiline
          inputRef={inputEl}
          onChange={(event) => setNewItemText(event.target.value)}
        />
        <IconButton
          aria-label="comments"
          onClick={addItem}
          className="icon-button"
        >
          <AddCircleOutline color="primary" fontSize="large" />
        </IconButton>
        <Button
          variant="contained"
          onClick={addItem}
          color="primary"
          className="button"
        >
          Добавить
        </Button>
      </Grid>
    </form>
  );
};

export default React.memo(ItemAdd);
