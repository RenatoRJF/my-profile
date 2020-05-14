import * as React from 'react';
import styled from 'styled-components';
import SocialButtons from '../SocialButtons';

const HeaderWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const HeaderTop = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  padding: 10,
});

export default function Header(): React.ReactElement {
  return (
    <HeaderWrapper>
      <HeaderTop>
        <SocialButtons />
      </HeaderTop>
    </HeaderWrapper>
  );
}