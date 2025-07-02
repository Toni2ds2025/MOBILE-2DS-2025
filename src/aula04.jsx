import React, {Component} from "react";
import { View, Text, StyleSheet, Image } from "react-native-web";

class Aula04 extends Component{
    render() {
        return(
            <View>
                <Text>aula04 - trabalhando com imagens</Text>
                <Image 
                    style={ styles.img }
                    source={{ uri: 'https://i.ytimg.com/vi/DrSRLDgaMcE/maxresdefault.jpg'}}
                />
            </View>
        );
    }
}

export default Aula04;

const styles = StyleSheet.create({
    img: {
        width: 128,
        height: 72,
    }
})