import React, {useState} from 'react'
import {View, TextInput, Keyboard} from 'react-native'
import {AntDesign} from "@expo/vector-icons"
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";

const DateTimeInput = () => {

    const dispatch = useDispatch();

    const stringDate = useSelector(state => state.findCheck.stringDate);
    const stringTime = useSelector(state => state.findCheck.stringTime);

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');

    const onDateInputFocus = () => {
        if (mode === 'time')
            setMode('date');

        Keyboard.dismiss(); // hide keyboard
        setShow(true);
    }
    const handleDateChange = (event, date) => {

        setShow(false);

        if (event.type === 'dismissed')
            return setShow(false);

        else if (mode === 'date') {
            setMode('time');
            setShow(true);
            dispatch({type: 'CHANGE_CHECK_DATE', payload: date.toISOString().split('T')[0]})
        } else {
            dispatch({type: 'CHANGE_CHECK_TIME', payload: date.toLocaleString().split(' ')[4]})
        }
    }

    return (
        <>
            <TextInputContainer>
                <AntDesign name="clockcircleo" size={24} color="grey"/>
                <Input
                    selectionColor="grey"
                    onFocus={onDateInputFocus}
                    placeholder="Дата та час"
                    value={stringTime ? `${stringDate} ${stringTime}` : ''}
                    editable
                />
            </TextInputContainer>
            {show && <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={handleDateChange}
            />}
        </>
    )
}

export default DateTimeInput;

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