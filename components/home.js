import React from 'react';
import { View, Text, Alert } from 'react-native';
import FlatButton from '../shared/button';

export default function Home({navigation}) {

    const userState = navigation.getParam("userState");

    return (
        <View>
            <Text>Hello {userState.firstName}!</Text>
            <FlatButton text="Find a Water Fountain" onPress={() => navigation.navigate("Find_a_Water_Fountain")}/>
            <FlatButton text="About Us" onPress={() => navigation.navigate("About_Us")}/>
            <FlatButton text="Leaderboard" onPress={() => 
                navigation.navigate("Leaderboard", 
                {email: userState.email, score: userState.user.userDetails.score})}/>
            {/* <FlatButton text="Logout" onPress={() => navigation.replace("Login")}/> */}

            <FlatButton 
                text = "Logout"
                onPress = {() => {
                Alert.alert("Log out", "Are you sure you want to log out?",
                    [
                        {text: "No",},
                        {text: "Yes", onPress: () => navigation.replace("Login")},
                    ]
                )
                }}
            />
        </View>
        
    )
}