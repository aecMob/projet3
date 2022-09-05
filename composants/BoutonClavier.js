import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class BoutonClavier extends React.Component {

  render() {
    return (
      <TouchableOpacity
        onPress={() => {this.props.onPress(this.props.texte);}}
        style={this.props.egal ? styles.double : styles.simple}
      >
        <Text style={styles.textBouton}>{this.props.texte}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  simple: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRightWidth: 0.5,
    borderColor: "#19153E"
  },
  double: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5a2075",
    borderRightWidth: 0.5,
    borderColor: "#19153E"
  },
  textBouton: {
    fontSize: 34,
    color: "#fff"
  },

});
export default BoutonClavier;