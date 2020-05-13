export interface Props {
  children: React.ReactNode;
};

export interface Context {
  locale: string;
}

type LangPayload = {
  locale: string;
}

export type ActionMap<M extends { [index: string]: LangPayload }> = {
  [Key in keyof M]: M[Key] extends undefined ? { type: Key } : { type: Key; payload: M[Key] };
};

export enum ActionTypes {
  changeAppLang = 'CHANGE_APP_LANG',
}

export type AppPayload = {
  [ActionTypes.changeAppLang]: LangPayload;
};

export type AppActions = ActionMap<AppPayload>[keyof ActionMap<AppPayload>];