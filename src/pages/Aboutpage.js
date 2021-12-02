import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

const About = () =>{

    return (
        
        <SafeAreaView style={styles.container}>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>Random people</Text>
                </View>
                <View style={styles.viewDescricao}>
                    <Text style={styles.textDescricao}>Este app tem como objetivo, consumir uma API REST e retornar em tela, uma lista de usuários.</Text>
                </View>
                <View style={styles.viewInfos}>
                    <Text>Duque de caxias - Rj</Text>
                    <Text>Raífe Ferreira</Text>
                    <Text>V0.0.1</Text>
                </View>
        </SafeAreaView>

        

    );

}

export default About;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    viewTitle:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25
    },
    title:{
        fontWeight: 'bold',
        fontSize: 23
    },
    viewDescricao: {
        margin: 20,
        marginTop: 250
    },
    textDescricao:{
        textAlign: 'center',
        fontSize: 17
    },
    viewInfos: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 250,
    }

});