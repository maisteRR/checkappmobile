import React from 'react'
import {View, TextInput} from 'react-native'
import {AntDesign} from "@expo/vector-icons"
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";

export default function CheckInput() {
    const dispatch = useDispatch();
    const checkNumber = useSelector(state => state.checkNumber)
    const handleCheckNumberChange = (textValue) =>{
        dispatch({type: 'CHECK_NUMBER_CHANGE', payload: textValue})
    }

    return (
        <TextInputContainer>
            <AntDesign name="barcode" size={24} color="grey"/>
            <Input
                selectionColor="grey"
                keyboardType='decimal-pad'
                placeholder="Номер чеку"
                editable
                value={checkNumber}
                onChangeText={handleCheckNumberChange}
                maxLength={8}
            />
        </TextInputContainer>
    )
}

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