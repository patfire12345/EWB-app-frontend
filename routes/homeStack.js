import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Header from '../shared/header';
import Login from '../components/login';
import Home from '../components/home';
import Register from '../components/register';
import { createAppContainer } from 'react-navigation';
import Find_a_Water_Fountain from '../components/home_page_buttons/Find_a_Water_Fountain';
import About_Us from '../components/home_page_buttons/about_us';
import Leaderboard from '../components/home_page_buttons/leaderboard';

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
    Find_a_Water_Fountain: {
        screen: Find_a_Water_Fountain,
        navigationOptions:
            ({navigation}) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title='Find a Water Fountain'/>,
                }
            }
    },
    About_Us: {
        screen: About_Us,
        navigationOptions:
            ({navigation}) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title='About Us'/>,
                }
            }
    },
    Leaderboard: {
        screen: Leaderboard,
        navigationOptions:
            ({navigation}) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title='Leaderboard'/>,
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