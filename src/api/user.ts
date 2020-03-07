import { GET_USER_URL, CREATE_USER_URL } from './routes';
import { User } from 'models/user';

export const fetchUserById = async (
  id: string | number,
): Promise<User | undefined> => {
  if (!id) {
    return;
  }

  const url = `${GET_USER_URL}/${id}`;
  try {
    const response = await fetch(url);
    const user = await response.json();
    return user;
  } catch (err) {
    return undefined;
  }
};

export const createUser = async (user: User): Promise<User | undefined> => {
  const response = await fetch(CREATE_USER_URL, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(user),
  });

  console.log(response);

  if (response.status < 300) {
    return (await response.json()) as User;
  }
};
