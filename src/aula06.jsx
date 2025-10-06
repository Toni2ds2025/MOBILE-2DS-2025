import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class Aula06 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
        };
        this.pegaNome = this.pegaNome.bind(this);
    }

    pegaNome(texto) {
        if(texto.lenght > 0) {
            this.state.State({nome: "Bem Vindo: " + texto})
        }
        else {
            this.setState({nome:''})
        }
    }

    render () {
        return(
            <View style={StyleSheet.conteiner}>
                <TextInput 
                style={styles.imput}
                placeholder='Digite seu nome:'
                underlineColorAndroid="transparent"
                onChangeText={this.pegaNome}
                />

                <Text style={styles.texto}>{this.state.nome}</Text>
            </View>
        );
    }
}

export default Aula06;

const styles = StyleSheet.create ({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#222',
        margin: 10,
        fontSize: 20,
        padding: 10,
    },

    texto: {
        textAlign: 'center',
        fontSize: 25,
    }
});