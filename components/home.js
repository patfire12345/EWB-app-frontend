import React from 'react';
import { View, Text } from 'react-native';
import FlatButton from '../shared/button';

export default function Home({navigation}) {

    const userState = navigation.getParam("userState");

    return (
        <View>
            <Text>Hello {userState.firstName}!</Text>
            <FlatButton text="Logout" onPress={() => navigation.replace("Login")}/>
            <FlatButton text="Find a Water Fountain" onPress={() => navigation.navigate("Find_a_Water_Fountain")}/>
            <FlatButton text="About Us" onPress={() => navigation.navigate("About_Us")}/>
            <FlatButton text="Leaderboard" onPress={() => navigation.navigate("Leaderboard")}/>
        </View>
        
    )
}