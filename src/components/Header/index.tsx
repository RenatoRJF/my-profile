import * as React from 'react';
import styled from 'styled-components';
import SocialButtons from '../SocialButtons';
import ProfilePhoto from '../../images/profile-photo.svg';
import CodeArrowLeft from '../../images/code-arrow-left.svg';
import CodeArrowRight from '../../images/code-arrow-right.svg';
import Brazil from '../../images/brazil.svg';
import Download from '../../images/download.svg';
import CircleBackground from '../../images/circle-background.svg';
import ArrowDown from '../../images/arrow-down.svg';
import Angle from '../../images/angle.svg';

interface LangButtonProps {
  active?: boolean;
}

interface MarkProps {
  color?: string;
}

const HeaderWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap'
});

const HeaderTop = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: 20,
});

const PhotoWrapper = styled.div({
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  position: 'relative',
  flexWrap: 'wrap',
  maxWidth: 350,
  paddingLeft: 90,
  marginTop: 20
});

const Photo = styled.img({
  maxWidth: 300,
  marginLeft: 20,
  marginRight: 20,
});

const ProfileFlag = styled.img({
  position: 'absolute',
  width: 50,
  left: '60%',
  bottom: 45,
  opacity: 0.7,
});

const Email = styled.p({
  width: '100%',
  fontSize: 18,
  textAlign: 'center',
});

const EmailLink = styled.a({
  textDecoration: 'none',
  color: '#FFFFFF'
});

const Mark = styled.span(({color}: MarkProps) => ({
  color: color || '#FFEF95',
}));

const LangButton = styled.button(function returnStyles({ active }: LangButtonProps) {
  return {
    color: active ? '#FFEF95' : '#FFFFFF',
    backgroundColor: 'transparent',
    border: 0,
    outline: 'none',
    cursor: 'pointer',
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
  };
});

const CodeArrow = styled.img({CircleBackground});

const LangsAndCVWrapper = styled.div({
  alignItems: 'center',
  display: 'flex'
});

const DownloadCVButton = styled.button({
  color: '#FFEF95',
  border: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.28)',
  display: 'flex',
  alignItems: 'center',
  marginRight: 20,
  padding: 10,
  fontSize: 16,
  outline: 'none',
  cursor: 'pointer',
  
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.38)',
  }
});

const DownloadIcon = styled.img({
  marginLeft: 15
});

const HeaderContent = styled.div({
  position: 'relative',
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundImage: `url(images/circle-background.svg)`,
  minHeight: 250
});

const HeaderContentWrapper =  styled.div({
  minWidth: 500,
});

const MainTech = styled.h3({
  color: '#FFEF95',
  fontSize: 30,
  fontWeight: 300,
  margin: 0,
});

const MainRole = styled.h1({
  color: '#FFFFFF',
  fontSize: 60,
  fontWeight: 300,
  margin: 0,
  marginTop: 20,
  marginBottom: 10,
});

const Frameworks = styled.p({
  color: '#FFFFFF',
  fontSize: 18,
  fontWeight: 400,
  margin: 0,
  textAlign: 'right',
});

const ArrowDownImg = styled.img({
  width: 90,
  margin: 'auto',
  position: 'relative',
  bottom: -60,
});

const HeaderAngle = styled.img({
  width: '100%',
  border: 0,
  marginBottom: -1
});

const WhoIam = styled.div({
  position: 'absolute',
  left: 50,
  top: -220
});

const Iam = styled.h2({
  color: '#C9C9C9',
  fontWeight: 300,
  fontSize: 40,
  opacity: 0.6,
  margin: 0,
});

const BigName = styled.h3({
  color: '#FFFFFF',
  fontSize: 50,
  fontWeight: 300,
  margin: 0,
  opacity: 0.6,
});

const Age = styled.h4({
  color: '#FFEF95',
  fontSize: 40,
  fontWeight: 600,
  margin: 0,
  opacity: 0.1,
});

export default function Header(): React.ReactElement {
  return (
    <HeaderWrapper>
      <HeaderTop>
        <SocialButtons />

        <PhotoWrapper>
          <ProfileFlag src={Brazil} alt="profile flag" />
          
          <CodeArrow src={CodeArrowLeft} alt="code arrow left" />

          <Photo src={ProfilePhoto} alt="profile" />

          <CodeArrow src={CodeArrowRight} alt="code arrow left" />

          <Email>
            <EmailLink href="mailto:renatoferreira.dev@gmail.com">
              <Mark>renato</Mark>ferreira.<Mark>dev</Mark>@gmail.com
            </EmailLink>
          </Email>
        </PhotoWrapper>

        <LangsAndCVWrapper>
          <DownloadCVButton>
            CV pdf
            <DownloadIcon src={Download} />
          </DownloadCVButton>

          <LangButton active>en</LangButton>
          <LangButton>pt</LangButton>
        </LangsAndCVWrapper>
      </HeaderTop>

      <HeaderContent>
        <WhoIam>
          <Iam><Mark>Hi</Mark>, I'm</Iam>
          <BigName>Renato Ferreira</BigName>
          <Age>29 years</Age>
        </WhoIam>
        
        <HeaderContentWrapper>
          <MainTech>Javascript</MainTech>
          <MainRole>Full-stack developer</MainRole>
          
          <Frameworks>
            <Mark color="#31F8F1">R</Mark>eact, <Mark color="#31F8F1">R</Mark>eact Native, <Mark color="#00E271">N</Mark>odeJS...
          </Frameworks>
        </HeaderContentWrapper>
      </HeaderContent>

      <ArrowDownImg src={ArrowDown} alt="arrow down" />

      <HeaderAngle src={Angle} alt="header angle" />
    </HeaderWrapper>
  );
}