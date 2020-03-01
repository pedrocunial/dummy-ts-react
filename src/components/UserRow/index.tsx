import React from 'react';
import { Button } from '@material-ui/core';

interface Props {
  deleteUser: (id: number | string) => void;
  name: string;
  phone?: string;
  id?: string | number;
}

export const UserRow: React.FC<Props> = ({
  deleteUser,
  name,
  phone,
  id,
}: Props) => (
  <Button onClick={() => (id ? deleteUser(id) : null)}>
    id:: {id}
    me name is {name} and me phone is {phone}
  </Button>
);

export default UserRow;
