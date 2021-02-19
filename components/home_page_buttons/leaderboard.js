import React from 'react';
import { View, Text, Alert } from 'react-native';
import FlatButton from '../../shared/button';

export default function Leaderboard({navigation}) {
    return(
        <View>
            <Text>
                Hello! Leaderboard will be added soon.
            </Text>
            <FlatButton 
                text = "Logout"
                onPress = {() => {
                Alert.alert("Log out", "Are you sure you want to log out?",
                    [
                        {text: "No",},
                        {text: "Yes", onPress: () => navigation.popToTop()},
                    ]
                )
                }}
            />
        </View>
    )
}