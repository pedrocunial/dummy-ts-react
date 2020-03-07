import React from 'react';
import { inject } from 'mobx-react';
import UserStore from '../index.store';
import { TextField, Button, Grid } from '@material-ui/core';

import BaseEvent from 'models/baseEvent';
import { createUser } from 'api/user';
import User from 'models/user';

interface Props {
  userStore?: UserStore;
}

@inject('userStore')
export class CreateUser extends React.PureComponent<Props, any> {
  baseState = {
    name: '',
    phone: '',
    id: '',
  };

  constructor(props: Props) {
    super(props);
    this.state = { ...this.baseState };
  }

  resetState = () => {
    this.setState({ ...this.baseState });
  };

  updateField = ({ target }: BaseEvent) => {
    console.log('update field', target);

    if (target) {
      const { name, value } = target;
      console.log(name, value);

      this.setState({ [name]: value });
    }
  };

  createUser = async () => {
    const { userStore } = this.props;

    console.log('creating user with state', this.state);
    const createdUser = await createUser(this.state as User);

    console.log('created user', createdUser);

    userStore?.addUser(createdUser);

    this.resetState();
  };

  render() {
    return (
      <React.Fragment>
        <Grid direction='column' container>
          <Grid item>
            <TextField
              label='name'
              name='name'
              value={this.state.name}
              onChange={this.updateField}
            />
          </Grid>
          <Grid item>
            <TextField
              label='phone'
              name='phone'
              value={this.state.phone}
              onChange={this.updateField}
            />
          </Grid>
          <Grid item>
            <TextField
              label='id'
              name='id'
              value={this.state.id}
              onChange={this.updateField}
            />
          </Grid>
          <Button onClick={this.createUser}>Submit</Button>
        </Grid>
      </React.Fragment>
    );
  }
}

export default CreateUser;
