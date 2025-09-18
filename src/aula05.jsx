import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Aula05 extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.caixa1 }>MahouAkoToProSekaGaSukiDesu</View>
        <View style={ styles.caixa2 }>
          <Image 
            style={ styles.img1 }
            source={{ uri: 'https://media.tenor.com/nWpWC7Dxk8UAAAAm/pjsk-kanade.webp'}}
          />
        </View>
        <View style={ styles.caixa3 }>
          <Image 
            source={ require('../img/hiiragi_utena.avif')}
            style={ styles.img2}
          />
        </View>
      </View>
    );
  }
}

export default Aula05;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    caixa1: {
      height: 100,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: 20
    },
    caixa2: {
      flex: 1,
      backgroundColor: 'green',
      color: 'white',
      fontSize: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    caixa3: {
      backgroundColor: 'blue',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: 20
    },

    img1: {
      width: 200,
      height: 200,
    },

    img2: {
        width: 100,
        height: 200,
    },
})