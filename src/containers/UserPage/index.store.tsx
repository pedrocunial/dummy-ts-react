import { observable, reaction, computed, action, toJS } from 'mobx';

import User from 'models/user';

export class UserStore {
  @observable users = observable<User>([]);
  @observable pizza: boolean = true;
  @observable error?: string;

  static idCounter: number = 1;

  constructor() {
    reaction(
      () => this.users.length,
      (len) => {
        this.error = len > 1 ? 'tem mais de uma pessoa ai ein?' : '';
      },
    );
  }

  @computed
  get usersCount(): number {
    return this.users.length;
  }

  @action
  togglePizza = () => {
    this.pizza = !this.pizza;
  };

  @action
  appendUser = (user: User) => {
    const foundIndex = this.users.findIndex((value) => value.id === user.id);
    if (foundIndex < 0) {
      this.users.push(user);
    } else {
      this.users[foundIndex] = user;
    }
  };

  @action
  addUser(user?: User) {
    console.log('adding user', user);
    if (user) {
      this.appendUser(user);
    } else {
      console.log('i refuse');
    }
  }

  @action
  createUser(name: string, phone?: string, targetId?: number) {
    console.log('create user', arguments);
    const id: number = targetId ? targetId : UserStore.idCounter;

    this.users.push({ name, phone, id });

    UserStore.idCounter = id + 1; // this is very wrong

    console.log('current store', toJS(this.users));
  }

  @action
  updatePhoneForName = (name: string, phone?: string) => {
    const user = this.users.find((user) => user.name === name);

    if (user) {
      user.phone = phone;
    }
  };

  @action
  deleteUserById = (id: number) => {
    const deletedUser = this.users.find(
      (user: User) => user.id && +user.id === id,
    );

    console.log(
      '[store] about to delete user',
      deletedUser,
      ' with expected id ',
      id,
    );

    if (deletedUser) {
      this.users.remove(deletedUser);
    }
  };
}

export const userStore = new UserStore();

export default UserStore;
