import React from 'react';
import { View, StyleSheet} from 'react-native';
import BoutonClavier from './BoutonClavier';
import { LinearGradient} from 'expo';

export default class Clavier extends React.Component {

    handleOnPress = (touche) => {
     console.log(touche);
      this.props.onPress(touche);
    }
    render() {
        return (
            <View style={styles.container}>    
              <View style={styles.row}>
                <BoutonClavier
                  texte="AC"                  
                  onPress={(touche) => {this.handleOnPress(touche)}}
                />
                <BoutonClavier
                  texte="±"
                  onPress={(touche) => {this.handleOnPress(touche)}}
                />
                <BoutonClavier
                  texte="<-"
                  onPress={(touche) => {this.handleOnPress(touche)}}
                />
                <BoutonClavier
                  texte="/"
                  onPress={(touche) => {this.handleOnPress(touche)}}
                />
              </View>
    
              <View style={styles.row}>
                <BoutonClavier
                  texte="7"
                  onPress={(touche) => {this.handleOnPress("7")}}
                />
                <BoutonClavier
                  texte="8"
                  onPress={(touche) => {this.handleOnPress(touche)}}
                />
                <BoutonClavier
                  texte="9"
                  onPress={(touche) => {this.handleOnPress(touche)}}
                />
                <BoutonClavier
                  texte="x"
                  onPress={(touche) => {this.handleOnPress(touche)}}
                />
              </View>
              <View style={styles.row}>
                <BoutonClavier
                  texte="4"
                  onPress={(touche) => {this.handleOnPress(touche)}}
                />
                <BoutonClavier
                  texte="5"
                  onPress={(touche) => {this.handleOnPress(touche)}}
                />
                <BoutonClavier
                  texte="6"
                  onPress={(touche) => {this.handleOnPress(touche)}}
                />
                <BoutonClavier
                  texte="-"
                  onPress={(touche) => {this.handleOnPress(touche)}}
                />
              </View>
              <View style={styles.row}>
                <BoutonClavier
                  texte="1"
                  onPress={(touche) => {this.handleOnPress(touche)}}
                />
                <BoutonClavier
                  texte="2"
                  onPress={(touche) => {this.handleOnPress("2")}}
                />
                <BoutonClavier
                  texte="3"
                  onPress={(touche) => {this.handleOnPress(touche)}}
                />
                <BoutonClavier
                  texte="+"
                  onPress={(touche) => {this.handleOnPress(touche)}}
                />
              </View>
    
              <View style={styles.row}>
                <BoutonClavier
                  texte="0"
                  onPress={(touche) => {this.handleOnPress(touche)}}                 
                />
    
                <BoutonClavier
                  texte="."
                  onPress={(touche) => {this.handleOnPress(touche)}}
                />

                <BoutonClavier
                  texte="="
                  onPress={(touche) => {this.handleOnPress(touche)}}
                  egal= {true}
                />
                
              </View>
          </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    number: {
      color: "#fff",
      textAlign: "right",
      padding: 10,
      fontSize: 36
      // borderBottomWidth: 0.5,
      // borderColor: "#19153E"
    },
    top: {
      paddingTop: 120
    },
    bottom: {
      flex: 1
    },
    row: {
      flex: 1,
      flexDirection: "row",
      borderBottomWidth: 0.2,
      borderColor: "#19153E"
    },
    button: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    numberBTS: {
      color: "#6191FF",
      textAlign: "right",
      padding: 10,
      fontSize: 26
    }
  });


