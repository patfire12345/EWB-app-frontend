import React, {useState} from 'react';
import { View,Text,TextInput,Keyboard,ScrollView } from 'react-native';
// import env from '../env';
import FlatButton from "../shared/button";

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
            }

        } catch(error) {
            console.log(error);
            return {
                user: error,
                verified: false
            }
        }
    }

    const login = async (email,password) => {

        const user = await verifyLogin(email,password);

        if (user.verified) {
            navigation.replace("Home", {
                userState: user,
                email: user.email,
            })
        }
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
            <FlatButton text="Login" onPress={() => login(username,password)}/>
            <FlatButton text="Register" onPress={() => navigation.navigate("Register")}/>
        </View>
    )
}