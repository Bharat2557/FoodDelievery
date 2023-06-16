import React, {Component} from "react";

import {Text, View} from "react-native";

import * as Font from "expo-font";
import * as SplahScreen from 'expo-splash-screen';
SplahScreen.preventAutoHideSync();

export default class RestaurantList extends Component{
    constructor(){

    }

    render(){
        return(
            <View>
                <Text> Hi!!! This is Restaurant list screen </Text>
            </View>

        );
    }
}