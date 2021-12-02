import React from 'react';
import { StyleSheet, Button, View, Image, SafeAreaView } from 'react-native';


const IntroPage = ({ navigation }) => {

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.espacamento}>
                <Image style={styles.image} source={require('../img/introImg.png')} />
            </View>
            <View style={styles.botao}>
                <Button title="       Iniciar      " onPress={() => navigation.navigate('Pessoas') } />
            </View>
            <View>
                <Button title="       Sobre       " onPress={() => navigation.navigate('Sobre') }/>
            </View>
        </SafeAreaView>

    )

}

export default IntroPage;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        borderRadius: 150
    }, 
    espacamento: {
        margin: 30
    },
    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
    }

});