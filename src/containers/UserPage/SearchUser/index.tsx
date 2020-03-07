import React, { useState, useCallback } from 'react';

import { fetchUserById } from 'api/user';
import SearchUserComponent from 'components/SearchUser';
import { inject } from 'mobx-react';
import { UserStore } from '../index.store';

interface Props {
  userStore?: UserStore;
}

export const SearchUser: React.FC<Props> = ({ userStore }) => {
  const [currentId, setCurrentId] = useState<string>('');
  const searchUser = useCallback(async () => {
    const user = await fetchUserById(currentId);
    userStore?.addUser(user);
  }, [currentId, userStore]);

  return (
    <SearchUserComponent updateId={setCurrentId} searchUser={searchUser} />
  );
};

export default inject('userStore')(SearchUser);
