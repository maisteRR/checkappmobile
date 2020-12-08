import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FindCheck from "../components/FindCheck"

const FindTab = () =>{
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Пошук') {
                        iconName = 'ios-search';
                        focused ? color = 'black' : color = '#47D5FD';
                    }
                    if (route.name === 'Інформація') {
                        color = 'black';
                        iconName = 'ios-basket';
                        focused ? color = 'black' : color = '#47D5FD';
                    }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Пошук" component={FindCheck} />
            <Tab.Screen name="Інформація" component={FindCheck} />
        </Tab.Navigator>
    )
}
export default FindTab;