
import React from 'react';
import { StyleSheet, View, Text }from 'react-native';

export default class Ecran extends React.Component {

  static defaultProps = {
    resultat: "",
    equation: "",
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.equation}>{this.props.equation}</Text>
        <Text style={styles.resultat}>{this.props.resultat}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:  { padding: 20, backgroundColor: "#45125c" },
  resultat: {
    color: "#fff",
    textAlign: "right",
    padding: 10,
    fontSize: 36
  },
  equation: {
    color: "#6191FF",
    textAlign: "right",
    padding: 10,
    fontSize: 26
  },
})