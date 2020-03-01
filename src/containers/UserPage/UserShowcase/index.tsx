import React from 'react';
import { observer, inject } from 'mobx-react';

import { Grid, Typography } from '@material-ui/core';

import UserRow from 'components/UserRow';

import { UserStore } from '../index.store';

interface Props {
  userStore?: UserStore;
}

@inject('userStore')
@observer
export class UserShowcase extends React.PureComponent<Props> {
  purgeUser = (id: number | string) => {
    console.log('trying to delete user for id ', id);
    const { userStore } = this.props;

    if (id && userStore) {
      userStore.deleteUserById(+id);
    }
  };

  render() {
    const { userStore } = this.props;

    const users = userStore?.users;
    const error = userStore?.error;
    const errorMessage = error && `Error: ${error}`;
    console.log('render showcase', users);

    return (
      <Grid container direction='column'>
        <Grid item>
          <Typography variant='h1'>
            User count: {userStore?.usersCount}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h2'>{errorMessage}</Typography>
        </Grid>
        {users &&
          users.map(user => (
            <Grid key={`user-${user.id}`} item>
              <UserRow {...user} deleteUser={this.purgeUser} />
            </Grid>
          ))}
      </Grid>
    );
  }
}

export default UserShowcase;
