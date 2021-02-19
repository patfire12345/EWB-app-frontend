import React from 'react';
import { View, Text, Alert } from 'react-native';
import FlatButton from '../../shared/button';

export default function About_Us({navigation}) {
    return(
        <View>
            <Text>
                Hello! Looking to learn more about Engineers Without Borders?
            </Text>

            <FlatButton 
                text = "Logout"
                onPress = {() => {
                    Alert.alert("Log out", "Are you sure you want to log out?",
                        [
                            {text: "No",},
                            {text: "Yes", onPress: () => {
                                navigation.popToTop();
                            }},
                        ]
                    )
                }}
            />
        </View>
    )
}