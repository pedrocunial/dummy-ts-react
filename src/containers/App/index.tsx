import React from 'react';

import UserPage from 'containers/UserPage';

type AppProps = {
  name?: string;
};

export const App: React.FC<AppProps> = ({ name }: AppProps) => (
  <React.Fragment>
    {name}
    <UserPage />
  </React.Fragment>
);

App.defaultProps = {
  name: 'jorge',
};

export default App;
