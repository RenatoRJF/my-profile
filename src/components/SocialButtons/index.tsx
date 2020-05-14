import * as React from 'react';
import styled from 'styled-components';

import GitHub from '../../images/icons/github.svg';
import Linkedin from '../../images/icons/linkedin.svg';

const ButtonsWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const Icon = styled.img({
  width: 50,
  height:50,
});

const Link = styled.a({
  marginRight: 10,
});

export default function SocialButtons(): React.ReactElement {
  return (
    <ButtonsWrapper>
      <Link href="https://github.com/RenatoRJF" target="_blank">
        <Icon src={GitHub} alt='github' />
      </Link>

      <Link href="https://www.linkedin.com/in/renatoferreiradev" target="_blank">
        <Icon src={Linkedin} alt='linkedin' />
      </Link>
    </ButtonsWrapper>
  )
}