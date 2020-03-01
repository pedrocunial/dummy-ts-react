import React from 'react';

import { Grid } from '@material-ui/core';

import UserRow from 'components/UserRow';
import User from 'models/user';

interface Props {
  users: User[];
  deleteUser: (id: any) => void;
}

export const UserTable: React.FC<Props> = ({ users, deleteUser }) => (
  <Grid container direction='column'>
    {users.map(user => (
      <Grid item>
        <UserRow {...user} deleteUser={deleteUser} />
      </Grid>
    ))}
  </Grid>
);

export default UserTable;
