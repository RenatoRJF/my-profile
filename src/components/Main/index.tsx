import * as React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Glasses from '../../images/icons/glasses.svg';
import Computer from '../../images/icons/computer.svg';
import Experiences from '../Experiences';

import * as experiencesData from '../../experiences.json';
import { FormattedMessage } from 'react-intl';

const Container = styled.div({
  width: '100%',
  maxWidth: 1366,
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: '#2A4058',
});

const Content = styled.section({
  padding: 40,
  backgroundColor: '#F2F2F2',
});

const SectionTitle = styled.h3({
  padding: 12,
  paddingLeft: 20,
  color: '#A5A5A5',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  fontWeight: 500,
  fontSize: 22,
  maxWidth: 200,
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.15)'
});

const SectionTitleIcon = styled.img({
  width: 30,
  height: 30,
  marginRight: 20
});

const SectionBody = styled.div({
  paddingLeft: 20,
  paddingRight: 20,
  marginTop: 30,
});

const AboutMeDescription = styled.p({
  color: '#6F6F6F',
  lineHeight: 1.5,
  textAlign: 'justify',
  marginBottom: 30,
});

export default function Main(): React.ReactElement {
  return (
    <Container>
      <Header />

      <Content>
        <SectionTitle>
          <SectionTitleIcon src={Glasses} alt="glasses" />
          About me
        </SectionTitle>

        <SectionBody>
          <AboutMeDescription>
            <FormattedMessage id="about-me-first-paragraph" />
          </AboutMeDescription>

          <AboutMeDescription>
            <FormattedMessage id="about-me-second-paragraph" />
          </AboutMeDescription>
        </SectionBody>

        <SectionTitle>
          <SectionTitleIcon src={Computer} alt="glasses" />
          Experiences
        </SectionTitle>

        <SectionBody>
          <Experiences 
            data={experiencesData.data} 
          />
        </SectionBody>
      </Content>
    </Container>
  );
}