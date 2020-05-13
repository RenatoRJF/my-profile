import * as React from 'react'; 
import { IntlProvider } from 'react-intl';
import { Context, AppActions, Props, ActionTypes } from './types';
import translations from '../../i18n';

const initialContext: Context = {
  locale: 'en-US',
};

export const AppContext = React.createContext<{ state: Context; dispatch: React.Dispatch<AppActions> }>({
  state: initialContext,
  dispatch: () => null
});

function reducer(state: Context = initialContext, action: AppActions): Context {
  switch (action.type) {
    case ActionTypes.changeAppLang: 
      return action.payload.locale ? { ...state, locale: action.payload.locale } : state;
    default:
      return state;
  }
}

export default function AppProvider({ children }: Props): React.ReactElement {
  const [state, dispatch] = React.useReducer(reducer, initialContext);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <IntlProvider locale={state.locale} defaultLocale={state.locale}  messages={translations[state.locale]}>
        {children}
      </IntlProvider>
    </AppContext.Provider>
  );
}