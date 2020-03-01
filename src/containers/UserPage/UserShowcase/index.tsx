import React from 'react';
import { observer, inject } from 'mobx-react';

import { Grid } from '@material-ui/core';

import UserRow from 'components/UserRow';

import { UserStore } from '../index.store';

interface Props {
  userStore?: UserStore;
}

@inject('userStore')
@observer
export class UserShowcase extends React.PureComponent<Props> {
  purgeUser = (id: number | string) => {
    console.log('[err] cannot delete user, feature not yet supported', id);
  };

  render() {
    const { userStore } = this.props;

    const users = userStore?.users || [];
    console.log('render showcase', users);

    return (
      <Grid container direction='column'>
        <Grid item>User count: {userStore?.usersCount}</Grid>
        {users.map(user => (
          <Grid item>
            <UserRow {...user} deleteUser={this.purgeUser} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default UserShowcase;
