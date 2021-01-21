import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import FlatButton from '../shared/button';
import config from '../config';

export default function Register({navigation}) {

    const IP = config.IP;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const addInfo = async (email,password,firstName,lastName) => {
        try {
            const response = await fetch(IP + "/signup", 
                {
                method: "POST", 
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password, firstName, lastName})
                }
            );
            
            if(!response.ok) {
                throw new Error(response.messages)
            }
            const user = await response.json();
            
            return true;

        } catch(error) {
            console.log(error);
            return false;
        }
    }

    return (
        <View>
            {/* <Text>Sustainable Practices App</Text> */}
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
            <TextInput 
                value = {firstName}
                onChangeText={(text) => setFirstName(text)}
                placeholder = "First Name"
            />
            <TextInput 
                value = {lastName}
                onChangeText={(text) => setLastName(text)}
                placeholder = "Last Name"
            />
            {/* <Text>{username}</Text>
            <Text>{password}</Text> */}
            <Text>{IP}</Text>
            <FlatButton text="Sign up" onPress={() => {
                addInfo(username,password,firstName,lastName);
                navigation.goBack();
            }}/>
        </View>
    )
}