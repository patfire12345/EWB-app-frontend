import React, {useState} from 'react';
import { View,Text,TextInput,Keyboard,ScrollView } from 'react-native';
import FlatButton from "./button.js";

export default function Login({navigation}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const verifyLogin = async (email,password) => {
        try {
            const response = await fetch(IP+"/login", 
                {
                method: "POST", 
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
                }
            );
            
            if(!response.ok) {
                throw new Error(response.messages)
            }
            
            const user = await response.json();

            console.log("Logged in");
            
            return {
                user: user,
                verified: true,
                email: user.userDetails.email,
                firstName: user.userDetails.firstName,
                pets: user.userDetails.pets,
            }

        } catch(error) {
            console.log(error);
            return {
                user: error,
                verified: false
            }
        }
    }

    const login = (email,password) => {
        verifyLogin(email,password);
    }

    return (
        <View>
            <Text>Sustainable Practices App</Text>
            <TextInput 
                value = {username}
                onChangeText={(text) => setUsername(text)}
                placeholder = "Username"
            />
            <TextInput 
                value = {password}
                onChangeText={(text) => setPassword(text)}
                placeholder = "Password"
                secureTextEntry = {true}
            />
            {/* <Text>{username}</Text>
            <Text>{password}</Text> */}
            <FlatButton text="Login" onPress={() => login()}/>
            <FlatButton text="Register" />
        </View>
    )
}