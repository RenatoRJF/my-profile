import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div({
  display: 'flex',
});

export default function Main(): React.ReactElement {
  return (
    <Container>
      It is working
    </Container>
  );
}