import React from 'react';
import { useFirebaseConnect } from 'react-redux-firebase';
import { useSelector, useDispatch } from 'react-redux';
import passwordHash from 'password-hash';
import { RootReducerType } from '../reducers';
import ModalLogin from './ModalLogin';
import ItemAdd from './ItemAdd';
import ItemList from './ItemList';
import { UserAuthType, UserFirebaseType } from '../types';
import { putUser } from '../actions/users';
import SwipeableViews from 'react-swipeable-views';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box py={3}>{children}</Box>}
    </Typography>
  );
};

const Home: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  useFirebaseConnect([
    { path: 'purchases' },
    { path: 'others' },
    { path: 'users' },
  ]);

  const users = useSelector(
    (state: RootReducerType) => state.firebase.ordered.users
  );

  const user = useSelector((state: RootReducerType) => state.users.user);

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

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Container id="container" maxWidth="sm" className="my-4">
      {user ? (
        <Box>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Покупки" />
              <Tab label="Другое" />
            </Tabs>
          </AppBar>
          <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
            <TabPanel value={value} index={0}>
              <ItemAdd titleItem="purchases" />
              <ItemList titleItem="purchases" />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ItemAdd titleItem="others" />
              <ItemList titleItem="others" />
            </TabPanel>
          </SwipeableViews>
        </Box>
      ) : (
        <ModalLogin checkAuth={checkAuth} />
      )}
    </Container>
  );
};

export default React.memo(Home);
