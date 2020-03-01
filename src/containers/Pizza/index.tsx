import React from 'react';

import PizzaButton from 'components/PizzaButton';
import { inject } from 'mobx-react';

interface Props {
  pizza?: boolean;
  togglePizza?: () => void;
}

export const Pizza: React.FC<Props> = ({ pizza, togglePizza }) => {
  console.log('rendered pizza (yay)', pizza);
  const onPizzaChange = (_: React.FormEvent) => togglePizza && togglePizza();

  return <PizzaButton selected={pizza} onChange={onPizzaChange} />;
};

export default inject((stores: any) => {
  const userStore = stores?.userStore;

  return {
    pizza: userStore?.pizza,
    togglePizza: userStore?.togglePizza,
  };
})(Pizza);
