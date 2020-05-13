import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { AppContext } from '../AppProvider';
import { ActionTypes } from '../AppProvider/types';

const Container = styled.div({
  display: 'flex',
});

const LangButton = styled.button({
  color: '#888',
  marginLeft: 20,
});

export default function Main(): React.ReactElement {
  const {dispatch} = React.useContext(AppContext);
  
  function handleChangeLanguage(lang: string): void {
    dispatch({
      type: ActionTypes.changeAppLang,
      payload: { locale: lang }
    });
  }

  return (
    <Container>
      <FormattedMessage id="hi-i-am" />
      <LangButton onClick={() => { handleChangeLanguage('en-US'); }}>En</LangButton>
      <LangButton onClick={() => { handleChangeLanguage('pt-BR'); }}>Pt</LangButton>
    </Container>
  );
}