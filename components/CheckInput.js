import React from 'react'
import {View, TextInput} from 'react-native'
import {AntDesign} from "@expo/vector-icons"
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";

const CheckInput = () => {

    const dispatch = useDispatch();
    const checkNumber = useSelector(state => state.findCheck.checkNumber)
    return (
        <TextInputContainer>
            <AntDesign name="barcode" size={24} color="grey"/>
            <Input
                selectionColor="grey"
                keyboardType='decimal-pad'
                placeholder="Номер чеку"
                value={checkNumber}
                editable
                onChangeText={(textValue)=> dispatch({type: 'CHANGE_CHECK_NUMBER', payload: textValue})}
                maxLength={20}
            />
        </TextInputContainer>
    )
}

export default CheckInput;

const TextInputContainer = styled.View`
    flex-direction: row;
    align-items: center;
    width: 80%;
    border-bottom-width: 2px;
    border-color: grey;
    border-style: solid;
    margin-bottom: 20px;
`;

const Input = styled.TextInput`
    height: 40px;
    font-size: 18px;
    padding-left: 10px;
`;