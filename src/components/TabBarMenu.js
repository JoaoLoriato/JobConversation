import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {TabBar} from 'react-native-tab-view';

export default props => (
    <View style={{backgroundColor = "#CD853F", elevation: 4, marginBottom: 4}}>
        <StatusBar backgroundColor = "#CD853F"/>
        
        <View style={{height: 50, justifyContent: 'center'}}>
        <Text style={{color: "#fff", fontSize: 20, marginLeft: 20}}>Work Conversations</Text>
        
        </View>

        <TabBar {...props} style={{backgroundColor: "#CD853F", elevation: 0}}  />
    </View>
);