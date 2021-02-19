import React from 'react';
import { View, Text } from 'react-native';
import FlatButton from '../../shared/button';

export default function Find_a_Water_Fountain({navigation}) {
    return(
        <View>
            <Text>
                Hello! Looking for a water fountain?
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