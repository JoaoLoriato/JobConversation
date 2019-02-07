import React from 'react';
import {View, Text, StatusBar, Image, TouchableHighlight} from 'react-native';
import {TabBar} from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import {enableInclusionContact} from '../actions/AppActions';
import firebase from 'firebase';

const TabBarMenu = props => (
    <View style={{backgroundColor: "#CD853F", elevation: 4, marginBottom: 4}}>
        <StatusBar backgroundColor = "#CD853F"/>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{height: 50, justifyContent: 'center'}}>
            <Text style={{color: "#fff", fontSize: 20, marginLeft: 20}}>Work Conversations</Text>
            </View>

            <View style={{flexDirection: 'row', marginRight: 20}}>
                <View style={{justifyContent: 'center' , width: 30, alignItems: 'center'}}>
                    <TouchableHighlight
                        onPress={() => {Actions.addContact(); props.enableInclusionContact()}}
                        underlayColor="#CD853F"
                    >
                        <Image source={require('../imgs/add_contact.png')}/>
                    </TouchableHighlight>
                </View>
                <View style={{justifyContent: 'center'}}>
                <TouchableHighlight
                        onPress={
                            () => firebase.auth().signOut().then(() => Actions.formLogin())
                        }>
                        <Text style={{fontSize: 20, color: '#fff'}}>Quit</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
        <TabBar {...props} style={{backgroundColor: "#CD853F", elevation: 0}}  />
    </View>
);

export default connect(null, {enableInclusionContact})(TabBarMenu);