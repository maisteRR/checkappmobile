import React from 'react';
import {Text, View, Image, TouchableOpacity, Alert, StatusBar, Dimensions } from 'react-native';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16) + 210;
const imageWidth = dimensions.width;

const Home= ({navigation}) => {
    return (
        <StartPage>
            <StatusBar hidden={true} />
            <AppNameContainer>
                <AppName>Check</AppName>
                <AppName style={{fontWeight:"bold"}}>App</AppName>
            </AppNameContainer>
            <StartImageContainer>
                <StartImage
                    source={require('../assets/start.png')}
                />
            </StartImageContainer>
            <BottomTextContainer>
                <BottomTitle>
                    Сумніви? Перевірте!
                </BottomTitle>
            </BottomTextContainer>
            <ButtonContainer>
                <StartButton onPress={()=> navigation.navigate('FindTab')}>
                    <AntDesign name="rightcircle" size={38} color="white" />
                </StartButton>
            </ButtonContainer>
        </StartPage>
    );
}

export default Home;

const StartPage = styled.View`
    flex: 1;
    background-color: #47D5FD;
`;
const StartImageContainer = styled.View`
    flex:0.75;
    flex-direction: row;
`;
const StartImage = styled.Image`
    height: ${imageHeight}px;
    width: ${imageWidth}px;
`;

const AppName = styled.Text`
    text-transform: uppercase;
    font-weight: normal;
    font-size: 32px;
    line-height: 32px;
    color: white;
`;
const BottomTextContainer = styled.View`
    flex: 0.05;
    padding-bottom: 5px;
`;
const BottomTitle = styled.Text`
    text-transform: uppercase;
    font-weight: normal;
    align-self: center;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
    color: black;
`
const AppNameContainer = styled.View`
    padding-left: 28px;
    padding-top: 60px;
`;
const ButtonContainer = styled.View`
    flex: 0.1;
    align-self: center;
`;
const StartButton = styled.TouchableOpacity`
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
`;