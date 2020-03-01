import React from 'react';
import { toJS } from 'mobx';
import { Provider } from 'mobx-react';

import SearchUser from 'components/SearchUser';
import Pizza from 'containers/Pizza';

import UserShowcase from './UserShowcase';
import CreateUser from './CreateUser';
import { UserStore } from './index.store';

export class UserPage extends React.PureComponent {
  private userStore: UserStore = new UserStore();

  render() {
    console.log('father rendered with users', toJS(this.userStore.users));

    return (
      <Provider userStore={this.userStore}>
        <UserShowcase />
        <SearchUser fetchUserById={(id: string | number) => console.log(id)} />
        <CreateUser />
        <Pizza />
      </Provider>
    );
  }
}

export default UserPage;
