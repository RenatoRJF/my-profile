export interface Props {
  children: React.ReactNode;
};

export type AppState = {
  locale: string;
}

export type ActionMap<M extends { [index: string]: AppState }> = {
  [Key in keyof M]: M[Key] extends undefined ? { type: Key } : { type: Key; payload: M[Key] };
};

export enum ActionTypes {
  changeAppLang = 'CHANGE_APP_LANG',
}

export type AppPayload = {
  [ActionTypes.changeAppLang]: AppState;
};

export type AppActions = ActionMap<AppPayload>[keyof ActionMap<AppPayload>];