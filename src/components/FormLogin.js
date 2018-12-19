import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default props => (

    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 25 }}>Job Conversations</Text>
        </View>
        <View style={{ flex: 2 }}>
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder='Email' />
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder='Senha' />
            <Text style={{ fontSize: 20 }}>Ainda não é cadastrado? Cadastre aqui</Text>
        </View>
        <View style={{ flex: 2 }}>
            <Button title="Acessar" color='#CD853F' onPress={() => false} />
        </View>
    </View>
);