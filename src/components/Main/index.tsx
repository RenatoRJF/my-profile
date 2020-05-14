import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { AppContext } from '../AppProvider';
import { ActionTypes } from '../AppProvider/types';
import Header from '../Header';

const Container = styled.div({
  width: '100%',
  maxWidth: 1000,
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: '#2A4058',
});

const Content = styled.section({
  padding: 40,
  backgroundColor: '#ffffff',
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
      <Header />

      <Content />
    </Container>
  );
}