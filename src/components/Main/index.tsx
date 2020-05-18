import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { AppContext } from '../AppProvider';
import { ActionTypes } from '../AppProvider/types';
import Header from '../Header';
import Glasses from '../../images/icons/glasses.svg';
import Computer from '../../images/icons/computer.svg';
import VueIcon from '../../images/icons/vue-icon.svg';
import Vonq from '../../images/vonq.svg';
import Brazil from '../../images/brazil.svg';

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
  marginBottom: 60,
});

const SingleExperience = styled.div({
  display: 'flex',
  padding: 10,
  paddingTop: 20,
  backgroundColor: '#EAEAEA',
  boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.15)',
  marginBottom: 30,
});

const ExperienceImage = styled.img({
  maxWidth: 350,
  marginLeft: -40,
});

const SectionBodyDetails = styled.div({
  width: 'calc(100% - 325px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
});

const DetailsTop = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  flexWrap: 'wrap'
});

const Title = styled.h4({
  display: 'flex',
  alignItems: 'center',
  fontSize: 25,
  margin: 0,
  marginTop: 5,
  paddingLeft: 10,
  color: '#2A4058',
});

const CurrentJob = styled.span({
  fontSize: 12,
  marginLeft: 30,
  color: '#21BC6F',
});

const Flag = styled.img({
  width: 40,
});

const ExperienceDate = styled.h4({
  width: '100%',
  margin: 0,
  paddingLeft: 14,
  fontSize: 12,
  color: '#2A4058'
});

const Description = styled.p({
  color: '#6F6F6F',
  lineHeight: 1.4,
  textAlign: 'justify',
  margin: 0,
  paddingLeft: 12
});

const Technologies = styled.div({
  display: 'flex',
  marginBottom: 20,
  justifyContent: 'flex-end',
});

const SingleTech = styled.div({
  color: '#7E7E7E',
  display: 'flex',
  alignItems: 'center',
  fontSize: 14,
});

const TechIcon = styled.img({
  width: 22,
  marginLeft: 20,
  marginRight: 10,
});

const TechLabel = styled.span({});

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

      <Content>
        <SectionTitle>
          <SectionTitleIcon src={Glasses} alt="glasses" />
          About me
        </SectionTitle>

        <SectionBody>
          <AboutMeDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptatibus enim soluta reprehenderit molestiae tenetur, deleniti quo similique obcaecati voluptates accusamus, at laborum minus itaque harum laboriosam numquam maxime natus?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptatibus enim soluta reprehenderit molestiae tenetur, deleniti quo similique obcaecati voluptates accusamus, at laborum minus itaque harum laboriosam numquam maxime natus?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptatibus enim soluta reprehenderit molestiae tenetur, deleniti quo similique obcaecati voluptates accusamus, at laborum minus itaque harum laboriosam numquam maxime natus?
          </AboutMeDescription>
        </SectionBody>

        <SectionTitle>
          <SectionTitleIcon src={Computer} alt="glasses" />
          Experiences
        </SectionTitle>

        <SectionBody>
          {[1, 2, 3, 4, 5].map(item => (
            <SingleExperience key={String(item)}>
              <ExperienceImage src={Vonq} alt="vonq" />

              <SectionBodyDetails>
                <DetailsTop>
                  <Title>VONQ <CurrentJob>Current job</CurrentJob></Title>

                  <Flag src={Brazil} alt="brazil" />

                  <ExperienceDate>
                    2019 - JUN
                  </ExperienceDate>
                </DetailsTop>

                <Description>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, ducimus animi non laboriosam soluta maiores tempora culpa maxime facilis! Obcaecati perferendis harum ipsa fuga voluptatibus suscipit hic officia excepturi eos?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, ducimus animi non laboriosam soluta maiores tempora culpa maxime facilis! Obcaecati perferendis harum ipsa.
                </Description>

                <Technologies>
                  <SingleTech>
                    <TechIcon src={VueIcon} alt="vue" /> <TechLabel>Vue</TechLabel>
                    <TechIcon src={VueIcon} alt="vue" /> <TechLabel>Vue</TechLabel>
                    <TechIcon src={VueIcon} alt="vue" /> <TechLabel>Vue</TechLabel>
                    <TechIcon src={VueIcon} alt="vue" /> <TechLabel>Vue</TechLabel>
                  </SingleTech>
                </Technologies>
              </SectionBodyDetails>
            </SingleExperience>
          ))}
        </SectionBody>
      </Content>
    </Container>
  );
}