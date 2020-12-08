import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {useSelector} from "react-redux"
import Product from "./Product";
import {getCorrectSum} from "../utils/normalize";
import Ionicons from 'react-native-vector-icons/Ionicons';

const CheckCard = () => {
    const {products, cashier, checkout, checksum, checktax} = useSelector(state => state.checkInfo)
    return (
        <>
        <CheckWrapper style={{ padding: 20}}>
            <CheckInfo>
                <Cashier  style={{fontWeight: 'bold'}}>{cashier}</Cashier>
                <Checkout>{checkout}</Checkout>
                <Products>
                    {products.length ? products.map((item, index) => <Product key={index} data={item}/>) : <Text>Завантаження...</Text>}
                </Products>
                <SumWrapper>
                    <Text>CУМА</Text>
                    <Text style={{fontWeight: 'bold'}}>{getCorrectSum(checksum)}грн.</Text>
                </SumWrapper>
                <SumWrapper>
                    <Text>Сплачений податок: </Text>
                    <Text style={{fontWeight: 'bold'}}>{getCorrectSum(checktax)}грн.</Text>
                </SumWrapper>
            </CheckInfo>
            <CheckSign>
                <Text> Дякуємо за покупку</Text>
                <Text  style={{fontWeight: 'bold'}}>ФІСКАЛЬНИЙ ЧЕК, DУ</Text>
            </CheckSign>
        </CheckWrapper>
            <ButtonsWrapper>
                <Button>
                    <ButtonText>Додати чек</ButtonText>
                    <Ionicons
                        name="ios-add"
                        size={30}
                        color={"white"}
                    />
                </Button>
                <Button>
                    <ButtonText>Скарга</ButtonText>
                    <Ionicons
                        name="md-alert"
                        size={30}
                        color={"white"}
                    />
                </Button>
            </ButtonsWrapper>
            </>
    );
}

const ButtonText = styled.Text`
    font-weight: bold;
    color: #fff;
    margin-right: 10px;
    
`;
const Button = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    width: 40%;
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
const Cashier = styled.Text`
    margin-bottom: 10px;
`;
const ButtonsWrapper = styled.View`
    display: flex;
    flex-direction: row;
    margin: 20px;
    justify-content: space-between;
    font-size: 24px;
`;
const SumWrapper = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    padding: 10px;
`;
const Checkout = styled.Text`
    margin-bottom: 10px;
`;
const Products = styled.View`
    padding: 10px;
`;
const CheckWrapper = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px;
    background-color: #47D5FD;
    border-radius: 10px;
`;
const CheckInfo = styled.View`
`;
const CheckSign = styled.View`
    align-self: center;
`;
export default CheckCard;