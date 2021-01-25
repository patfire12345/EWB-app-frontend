import React from 'react';
import { View, Text } from 'react-native';
import FlatButton from '../shared/button';

export default function Home({navigation}) {

    const userState = navigation.getParam("userState");

    return (
        <View>
            <Text>Hello {userState.firstName}!</Text>
            <FlatButton text="Logout" onPress={() => navigation.replace("Login")}/>
        </View>
        
    )
}