import React from 'react';
import {
  StyledText,
  StyledView,
  StyledView2,
  Text2,
  Text3,
  Text4,
  Image,
  Image2,
  Image3,
  Container,
  CardContainer,
} from '../styles/home';

const MatchCard = ({data}) => {
  return (
    <CardContainer>
      <Container>
        <Container>
          <Image2 source={require('../images/ballon-foot.png')} />
          <Text2>
            {data && data.league.country.name} . {data && data.league.name}{' '}
          </Text2>
        </Container>
        {/* <Container>
          <Image2 source={require('../images/classement.png')} />
        </Container> */}
      </Container>
      <Container>
        <Container>
          <Text3>27' 1ère mi-temps </Text3>
        </Container>
        <Container>
          <Image3 source={require('../images/streaming.png')} />
        </Container>
      </Container>
      <Container>
        <Container>
          <Image source={{uri: data && data.participants[0].image_path}} />
          <StyledText> {data && data.participants[0].name}</StyledText>
        </Container>
        <Container>
          <Text4>0</Text4>
        </Container>
      </Container>
      <Container>
        <Container>
          <Image source={{uri: data && data.participants[1].image_path}} />
          <StyledText> {data && data.participants[1].name}</StyledText>
        </Container>
        <Container>
          <Text4>1</Text4>
        </Container>
      </Container>
    </CardContainer>
  );
};

export default MatchCard;
