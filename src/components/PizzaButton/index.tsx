import React, { FormEvent } from 'react';

import { LocalPizza } from '@material-ui/icons';
import { ToggleButton } from '@material-ui/lab';

interface Props {
  selected?: boolean;
  onChange: (event: FormEvent) => void;
}

export const PizzaButton: React.FC<Props> = ({ selected, onChange }) => (
  <ToggleButton value='pizza?' selected={selected} onChange={onChange}>
    <LocalPizza />
  </ToggleButton>
);

export default PizzaButton;
