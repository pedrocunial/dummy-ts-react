import React from 'react';

import { TextField, Button } from '@material-ui/core';

interface Props {
  fetchUserById: (id: any) => void;
}

export class SearchUser extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.state = { id: '' };
  }

  searchUser = ({ target }: any) => {
    console.log('search user', target);

    this.props.fetchUserById(target?.value);
  };

  updateId = ({ target }: any) => {
    console.log('update id', target);

    this.setState({ id: target?.id });
  };

  render() {
    return (
      <React.Fragment>
        <TextField label='id' onChange={this.updateId} />
        <Button onClick={this.searchUser}>Search</Button>
      </React.Fragment>
    );
  }
}

export default SearchUser;
