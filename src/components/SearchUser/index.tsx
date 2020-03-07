import React, { useCallback } from 'react';

import { TextField, Button } from '@material-ui/core';

interface Props {
  searchUser: () => void;
  updateId: (id: string) => void;
}

export const SearchUser: React.FC<Props> = ({ searchUser, updateId }) => {
  const onIdChange = useCallback((event) => updateId(event?.target?.value), [
    updateId,
  ]);

  return (
    <React.Fragment>
      <TextField label='id' onChange={onIdChange} />
      <Button onClick={searchUser}>Search</Button>
    </React.Fragment>
  );
};

export default SearchUser;
