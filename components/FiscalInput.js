import React from 'react'
import {View, TextInput} from 'react-native'
import {AntDesign} from "@expo/vector-icons"
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";

const FiscalInput = () => {

    const dispatch = useDispatch();
    const fiscalNumber = useSelector(state => state.findCheck.fiscalNumber)

    return (
        <TextInputContainer>
            <AntDesign name="edit" size={24} color="grey"/>
            <Input
                selectionColor="grey"
                keyboardType='decimal-pad'
                placeholder="Фіскальний номер чеку"
                editable
                value={fiscalNumber}
                onChangeText={(textValue)=>{dispatch({type: 'CHANGE_FISCAL_NUMBER', payload: textValue})}}
                maxLength={12}
            />
        </TextInputContainer>
    )
}

export default FiscalInput;

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