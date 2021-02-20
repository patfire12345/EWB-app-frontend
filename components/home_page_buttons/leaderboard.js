import React, {useState} from 'react';
import { View, Text, Alert } from 'react-native';
import FlatButton from '../../shared/button';
import config from '../../config'

export default function Leaderboard({navigation}) {

    const IP = config.IP;

    const currentScore = navigation.getParam("score");
    const userEmail = navigation.getParam("email");

    const [score, setScore] = useState(currentScore);

    const addScore = async (email,addScore) => {
        try {

            const response = await fetch(IP + "/addScore", 
                {
                method: "POST", 
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, addScore})
                }
            );
            
            if(!response.ok) {
                throw new Error(response.messages)
            }
            
            const user = await response.json();
            
            return {
                email: user.email,
                newScore: user.score,
            }

        } catch(error) {
            console.log(error);
            return {
                user: error,
            }
        }
    }

    const buttonPress = async (email,addedScore) => {

        const user = await addScore(email,addedScore);

        console.log(user);

        setScore(user.newScore);
    }


    return(
        <View>
            <Text>
                Hello! Leaderboard will be added soon. This is your score: {score}
            </Text>
            <FlatButton 
                text = "Click this button to gain 5 points"
                onPress = {() => buttonPress(userEmail, 5)}
            />
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