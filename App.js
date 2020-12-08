import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {CheckCard, Home} from "./components";
import { Provider } from 'react-redux';
import store from './store/index'
import { createStackNavigator } from '@react-navigation/stack';
import FindTab from './components/FindTab'
const Stack = createStackNavigator();


export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen options={{headerShown: true, title: 'Чек валідний',
                        headerLeft: null, }} name="CheckCard" component={CheckCard} />
                    <Stack.Screen name="FindTab" component={FindTab} />
                </Stack.Navigator>
            </NavigationContainer>
            </Provider>
    );
}