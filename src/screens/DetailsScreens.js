/* eslint-disable prettier/prettier */
import {View, Platform, ProgressBarAndroid, Button, TouchableOpacity, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PagecontainerWhite} from '../styles/HomeScreen.styles';
import {useRoute, useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {Container, StyledText, StyledView, StyledView2, StatDefaultBar, Home, StyledStatText, StatLabel, Away, StatValueLeft, StatValueRight} from '../styles/home';
import ThemeProvider from '../components/ThemeProvider';
import Header from '../components/header';
import {useDispatch, useSelector} from 'react-redux';
import BottomNavigation from '../components/BottomNavigation';
import {useTranslation} from 'react-i18next';
import MatchCard from '../components/matchCard';
import styled from 'styled-components';
import StatDetailBlock from '../components/StatDetailBlock';


const DetailsScreens = ({}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const {isDarkMode} = useSelector(state => state.themeReducer);
  const {t, i18n} = useTranslation();
  const {data} = route.params;
  const [ homeStat, setHomeStat ] = useState({});
  const [ awayStat, setAwayStat ] = useState({});

const getStat = statistics => {
    let homeStat = statistics.filter(x => x.location === 'home');
    let awayStat = statistics.filter(x => x.location === 'away');
    let homeToSet = {};
    let awayToSet = {};

    homeStat.forEach(x => {
      homeToSet[x.type.code] = x.data.value;
    });

    awayStat.forEach(x => {
      awayToSet[x.type.code] = x.data.value;
    });

    console.log(homeToSet);
    setAwayStat(awayToSet);
    setHomeStat(homeToSet);

  };

  useEffect(() =>{
    if (data.statistics !== null || data.statistics !== undefined){
      getStat(data.statistics);

    }
  }, [data]);



  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <Header back={true}/>
      <StyledView2>
        <StyledView>
          <View>
            <TouchableOpacity
              onPress={() => navigation.goBack()}>
              <StyledText>&lt;-- {t('goBack.message')}</StyledText>
            </TouchableOpacity>
          </View>
          { data && <MatchCard data={data} />}
          <StyledStatText>{t('statText.message')}</StyledStatText>
          <ScrollViews>
            {
              (homeStat !== {} && awayStat !== {}) && (
                <>
                  <StatDetailBlock text={`${t('possession.message')}`} homeValue={homeStat['ball-possession'] + '%'} awayValue={awayStat['ball-possession'] + '%'} homeWidth={homeStat['ball-possession']} awayWidth={awayStat['ball-possession']}/>

                  <StatDetailBlock text={`${t('totalAttempt.message')}`} homeValue={homeStat['shots-total']} awayValue={awayStat['shots-total']}  homeWidth={homeStat['shots-total'] * 100 / (homeStat['shots-total'] + awayStat['shots-total'])} awayWidth={awayStat['shots-total'] * 100 / (homeStat['shots-total'] + awayStat['shots-total'])}/>

                  <StatDetailBlock text={`${t('sont.message')}`} homeValue={homeStat['shots-on-target']} awayValue={awayStat['shots-on-target']}  homeWidth={homeStat['shots-on-target'] * 100 / (homeStat['shots-on-target'] + awayStat['shots-on-target'])} awayWidth={awayStat['shots-on-target'] * 100 / (homeStat['shots-on-target'] + awayStat['shots-on-target'])}/>

                  <StatDetailBlock text={`${t('soft.message')}`} homeValue={homeStat['shots-off-target']} awayValue={awayStat['shots-off-target']}  homeWidth={homeStat['shots-off-target'] * 100 / (homeStat['shots-off-target'] + awayStat['shots-off-target'])} awayWidth={awayStat['shots-off-target'] * 100 / (homeStat['shots-off-target'] + awayStat['shots-off-target'])}/>

                  <StatDetailBlock text={`${t('penalties.message')}`} homeValue={homeStat.penalties} awayValue={awayStat.penalties}  homeWidth={homeStat.penalties * 100 / (homeStat.penalties + awayStat.penalties)} awayWidth={awayStat.penalties * 100 / (homeStat.penalties + awayStat.penalties)}/>

                  <StatDetailBlock text={`${t('yc.message')}`} homeValue={homeStat.yellowcards} awayValue={awayStat.yellowcards}  homeWidth={homeStat.yellowcards * 100 / (homeStat.yellowcards + awayStat.yellowcards)} awayWidth={awayStat.yellowcards * 100 / (homeStat.yellowcards + awayStat.yellowcards)}/>

                  <StatDetailBlock text={`${t('rc.message')}`} homeValue={homeStat.redcards} awayValue={awayStat.redcards}  homeWidth={homeStat.redcards * 100 / (homeStat.redcards + awayStat.redcards)} awayWidth={awayStat.redcards * 100 / (homeStat.redcards + awayStat.redcards)}/>

                  <StatDetailBlock text={`${t('fouls.message')}`} homeValue={homeStat.fouls} awayValue={awayStat.fouls}  homeWidth={homeStat.fouls * 100 / (homeStat.fouls + awayStat.fouls)} awayWidth={awayStat.fouls * 100 / (homeStat.fouls + awayStat.fouls)}/>
                  <StatDetailBlock text={`${t('offsides.message')}`} homeValue={homeStat.offsides} awayValue={awayStat.offsides}  homeWidth={homeStat.offsides * 100 / (homeStat.offsides + awayStat.offsides)} awayWidth={awayStat.offsides * 100 / (homeStat.offsides + awayStat.offsides)}/>
                  <StatDetailBlock text={`${t('corners.message')}`} homeValue={homeStat.corners} awayValue={awayStat.corners}  homeWidth={homeStat.corners * 100 / (homeStat.corners + awayStat.corners)} awayWidth={awayStat.corners * 100 / (homeStat.corners + awayStat.corners)}/>

                  <StatDetailBlock text={`${t('crosses.message')}`} homeValue={homeStat['total-crosses']} awayValue={awayStat['total-crosses']}  homeWidth={homeStat['total-crosses'] * 100 / (homeStat['total-crosses'] + awayStat['total-crosses'])} awayWidth={awayStat['total-crosses'] * 100 / (homeStat['total-crosses'] + awayStat['total-crosses'])}/>
                  <StatDetailBlock text={`${t('throwins.message')}`} homeValue={homeStat.throwins} awayValue={awayStat.throwins}  homeWidth={homeStat.throwins * 100 / (homeStat.throwins + awayStat.throwins)} awayWidth={awayStat.throwins * 100 / (homeStat.throwins + awayStat.throwins)}/>

                  <StatDetailBlock text={`${t('substitution.message')}`} homeValue={homeStat.substitutions} awayValue={awayStat.substitutions}  homeWidth={homeStat.substitutions * 100 / (homeStat.substitutions + awayStat.substitutions)} awayWidth={awayStat.substitutions * 100 / (homeStat.substitutions + awayStat.substitutions)}/>

                  <StatDetailBlock text={`${t('passes.message')}`} homeValue={homeStat.passes} awayValue={awayStat.passes}  homeWidth={homeStat.passes * 100 / (homeStat.passes + awayStat.passes)} awayWidth={awayStat.passes * 100 / (homeStat.passes + awayStat.passes)}/>

                </>
              )
            }
          </ScrollViews>
        </StyledView>
        <BottomNavigation
          main="yellow"
          teams="white"
          stats="white"
          live="white"
        />
      </StyledView2>
    </ThemeProvider>
  );
};

const ScrollViews = styled.ScrollView`
  margin-bottom:270px;
`;

export default DetailsScreens;
