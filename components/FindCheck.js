import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import styled from 'styled-components';
import {CheckInput, FiscalInput, DateTimeInput, CheckCard} from './index'
import Ionicons from 'react-native-vector-icons/Ionicons';
import api from '../utils/api'
import {TouchableOpacity, View, Text, Alert } from 'react-native'

const FindCheck = ({navigation}) => {
    const body = useSelector(state => state.findCheck)
    const dispatch = useDispatch()

    return (
        <FindCheckContainer>
            <HeaderText>Пошук чеку</HeaderText>
            <CheckInput/>
            <FiscalInput/>
            <DateTimeInput/>
            <SendButton onPress={() => {
                api.getCheckInfo(body).then((res)=>{
                    if(res.data.error){
                        Alert.alert(
                            "Помилка",
                            res.data.error_description,
                            [
                                {
                                    text: "Гаразд",
                                    style: "cancel"
                                }
                            ],
                            { cancelable: false });
                    }
                    else{
                        navigation.navigate('CheckCard')
                        dispatch({type: 'ADD_PRODUCTS', payload: res.data.C[0].P})
                        dispatch({type: 'ADD_CASHIER', payload: res.data.C[0].L[0]._})
                        dispatch({type: 'ADD_CHECKOUT', payload: res.data.C[0].L[1]._})
                        dispatch({type: 'ADD_CHECKSUM', payload: res.data.C[0].E[0]['$'].SM})
                        dispatch({type: 'ADD_CHECKTAX', payload: res.data.C[0].E[0]['TX'][0]['$'].TXSM})
                    }
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

const HeaderText = styled.Text`
    font-size: 24px;
    color: #47D5FD;
    font-weight: bold;
    margin-bottom: 30px;
`;

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