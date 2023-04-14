/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {React, useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
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
import {useSelector, useDispatch} from 'react-redux';
import { Text } from 'react-native';

  const MatchCard = ({data}) => {
    const {t, i18n} = useTranslation();
  const {language} = useSelector(state => state.languageReducer);
  const dispatch = useDispatch();

  const [status, setStatus] = useState(null);
  const [dateToShow, setDateToShow] = useState(null);
  const [homeScore, setHomeScore] = useState(null);
  const [awayScore, setAwayScore] = useState(null);
  const [timeOfTheDay, setTimeOfTheDay] = useState(null);


  useEffect(() => {
    if (
      new Date(data.starting_at).getDate() < new Date().getDate() ||
      new Date(data.starting_at).setTime(
        new Date(data.starting_at).getTime() + 120 * 60 * 1000
      ) <= new Date().getTime()
    ) {
      setStatus('Passed');
      formatPastDateToShow(new Date(data.starting_at));
      parseMatchSetScore(data.events);
    } else if (new Date(data.starting_at).getTime() > new Date().getTime()) {
      setStatus('To come');
      formatPostDateToShow(new Date(data.starting_at));
    } else if (
      new Date(data.starting_at).getTime() < new Date().getTime() &&
      new Date(data.starting_at).setTime(
        new Date(data.starting_at).getTime() + 120 * 60 * 1000,
      ) >= new Date().getTime()
    ) {
      setStatus('Playing');
      formatActiveDateToShow(new Date(data.starting_at));
    }
  }, [data, awayScore, homeScore, language]);

  const parseMatchSetScore = (datas) => {
    let away = 0;
    let  home = 0;
    datas.forEach(event => {
      if (event.type.name === 'Goal'){
        if (event.participant.name === data.participants[0].name){
          home += 1;
        } else {
          away += 1;
        }
      }
    });
    setAwayScore(away);
    setHomeScore(home);
  };

  const formatActiveDateToShow = date => {
  };

  const formatPastDateToShow = (date) => {
    const baseDate = new Date();
    const dateToUse = new Date(date);
    let dateMonth =
    dateToUse.getMonth() < 8 ? `0${dateToUse.getMonth() + 1}` : dateToUse.getMonth() + 1;

    let dateDay = dateToUse.getDate() < 9 ? `0${dateToUse.getDate()}` : dateToUse.getDate();

    let hours = dateToUse.getHours() < 10 ? `0${dateToUse.getHours()}` : dateToUse.getHours();
    let minutes = dateToUse.getMinutes() < 10 ? `0${dateToUse.getMinutes()}` : dateToUse.getMinutes();

    hours = language === 'en' ? hours : setHoursInEn(hours);

    if (baseDate.getDate() === dateToUse.getDate()) {
      setDateToShow(`${t('playDateToday.message')} ${hours}:${minutes}`);
    } else {
      const condition = (baseDate.getDate() -  dateToUse.getDate());
      switch (condition){
        case 1:
          setDateToShow(`${t('playedDateMinusOneDay.message')} ${hours}:${minutes}`);
          break;
        case 2:
          setDateToShow(`${t('playedDateMinusTwoDay.message')} ${hours}:${minutes}`);
          break;
        default:
          setDateToShow(`${dateDay}/${dateMonth}/${dateToUse.getFullYear()} à ${hours}:${minutes}`);
      }
    }
  };

  const formatPostDateToShow = (date) => {
    const baseDate = new Date();
    const dateToUse = new Date(date);
    let dateMonth =
    dateToUse.getMonth() < 8 ? `0${dateToUse.getMonth() + 1}` : dateToUse.getMonth() + 1;

    let dateDay = dateToUse.getDate() < 9 ? `0${dateToUse.getDate()}` : dateToUse.getDate();

    let hours = dateToUse.getHours() < 10 ? `0${dateToUse.getHours()}` : dateToUse.getHours();
    const minutes = dateToUse.getMinutes() < 10 ? `0${dateToUse.getMinutes()}` : dateToUse.getMinutes();

    hours = language === 'en' ? hours : setHoursInEn(hours);

    if (baseDate.getDate() == dateToUse.getDate()) {
      setDateToShow(`${t('playDateToday.message')} ${hours}:${minutes}`);
    } else {
      const condition = (dateToUse.getDate() -  baseDate.getDate());
      switch (condition){
        case 1:
          setDateToShow(`${t('playDatePlusOneDay.message')} ${hours}:${minutes}`);
          break;
        case 2:
          setDateToShow(`${t('playDatePlusTwoDay.message')} ${hours}:${minutes}`);
          break;
        default:
          setDateToShow(`${dateDay}/${dateMonth}/${dateToUse.getFullYear()} à ${hours}:${minutes}`);
      }
    }

  };

  const setHoursInEn = h => {
    let toReturn = '';
    switch (h) {
      case 13:
        toReturn = '01';
        break;
      case 14:
        toReturn = '02';
        break;
      case 15:
        toReturn = '03';
        break;
      case 16:
        toReturn = '04';
        break;
      case 17:
        toReturn = '05';
        break;
      case 18:
        toReturn = '06';
        break;
      case 19:
        toReturn = '07';
        break;
      case 20:
        toReturn = '08';
        break;
      case 21:
        toReturn = '09';
        break;
      case 22:
        toReturn = '10';
        break;
      case 23:
        toReturn = '11';
        break;
      case 24:
        toReturn = '12';
        break;
      default:
        toReturn = h;
    }
    if (h >= 12){
      setTimeOfTheDay('PM');
    } else {
      setTimeOfTheDay('AM');
    }

    return toReturn;
  };
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
      {
        status === 'Playing' ? (
          <Container>
            <Container>
              {/* <Text3>27' 1ère mi-temps </Text3> */}
              <Text3>{status}</Text3>
            </Container>
            <Container>
              <Image3 source={require('../images/streaming.png')} />
            </Container>
          </Container>
        ) : (
          <Container>
            <Container>
              {/* <Text3>27' 1ère mi-temps </Text3> */}
              <Text3>
                {dateToShow}
                {
                  language === 'fr' ? (<Text> {timeOfTheDay}</Text>) : (<></>)
                }
              </Text3>
            </Container>
          </Container>
        )
      }

      <Container>
        <Container>
          <Image source={{uri: data && data.participants[0].image_path}} />
          <StyledText> {data && data.participants[0].name}</StyledText>
        </Container>
        <Container>
          {
            (homeScore !== null) ? (
              <Text4>{homeScore}</Text4>
            ) : (<></>)
          }
        </Container>
      </Container>
      <Container>
        <Container>
          <Image source={{uri: data && data.participants[1].image_path}} />
          <StyledText> {data && data.participants[1].name}</StyledText>
        </Container>
        {/* <Container> */}
          {
            (awayScore !== null) ? (
              <Container>
                <Text4>{awayScore}</Text4>
              </Container>
            ) : (<></>)
          }
        {/* </Container> */}
      </Container>
    </CardContainer>
  );
};

export default MatchCard;
