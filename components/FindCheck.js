import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import styled from 'styled-components';
import {CheckInput, FiscalInput, DateTimeInput, CheckCard} from './components'
import Ionicons from 'react-native-vector-icons/Ionicons';
import api from './utils/api'
import {TouchableOpacity, View } from 'react-native'

const FindCheck = ({navigation}) => {
    const body = useSelector(state => state.findCheck)
    const dispatch = useDispatch()

    return (
        <FindCheckContainer>
            <CheckInput/>
            <FiscalInput/>
            <DateTimeInput/>
            <SendButton onPress={() => {
                navigation.navigate('CheckCard')
                api.getCheckInfo(body).then((res)=>{
                    dispatch({type: 'ADD_PRODUCTS', payload: res.data.C[0].P})
                })
            }}>
                <Ionicons
                    name="ios-search"
                    size={30}
                    color={"white"}
                />
            </SendButton>
        </FindCheckContainer>
    );
}
export default FindCheck;

const SendButton = styled.TouchableOpacity`
    width: 80%;
    height: 40px;
    border-radius: 8px;
    padding-top: 10px;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #47D5FD;
`;
const FindCheckContainer = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    margin-top: 40px;
`;