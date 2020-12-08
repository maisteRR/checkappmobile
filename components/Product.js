import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import {getCorrectSum} from '../utils/normalize'
const Product = ({data}) => {
    const {NM, SM} = data['$'];
    return (
        <ProductWrapper>
            <NameView>
                <Text >{NM.length > 25 ? NM.substring(0, 25) + '...' : NM}</Text>
            </NameView>
            <Text>{getCorrectSum(SM)}грн.</Text>
        </ProductWrapper>
    );
}

export default Product;

const ProductWrapper = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const NameView = styled.View`
    display: flex;
    flex-direction: column;
`;