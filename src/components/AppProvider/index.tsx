import * as React from 'react'; 
import { AppState, AppActions, Props } from './types';

const initialContext = {
  locale: 'en',
};

export const AppContext = React.createContext<{ state: AppState; dispatch: React.Dispatch<AppActions> }>({
  state: initialContext,
  dispatch: () => null
});

function reducer(state: AppState = initialContext, action: AppActions): AppState {
  switch (action.type) {
    case 'CHANGE_APP_LANG': 
      return action.payload.locale ? { ...state, locale: action.payload.locale } : state;
  }
}

export default function AppProvider({ children }: Props): React.ReactElement {
  const [state, dispatch] = React.useReducer(reducer, initialContext);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}