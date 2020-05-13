import * as React from 'react';
import AppProvider from './components/AppProvider';
import Main from './components/Main';

export default function App(): React.ReactElement {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}