import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Header from '../shared/header';
import Login from '../components/login';
import Home from '../components/home';
import Register from '../components/register';
import { createAppContainer } from 'react-navigation';

const screens = {
    Login: {
        screen: Login,
        navigationOptions:
            ({navigation}) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title='Login'/>,
                }
            }
    },
    Home: {
        screen: Home,
        navigationOptions:
            ({navigation}) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title='Home'/>,
                }
            }
    },
    Register: {
        screen: Register,
        navigationOptions:
            ({navigation}) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title='Register'/>,
                }
            }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60, },
    }
});

export default createAppContainer(HomeStack);