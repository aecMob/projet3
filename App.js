import React from 'react';
import Ecran from './composants/Ecran';
import Clavier from './composants/Clavier';
import { Button, SafeAreaView, StyleSheet } from 'react-native';



class App extends React.Component {
  state = { 
    equation: ' ',
    resultat: '0',
    value: null,
    attenteOperande: false,
    operateur: null
   }



   ajoutDigit = touche => {
    const { resultat, attenteOperande } = this.state;

    if (attenteOperande) {
      this.setState({
        resultat: String(touche),
        attenteOperande: false
      });
    } else {
      this.setState({
        resultat:
          resultat === "0" ? String(digit) : resultat + touche
      });
    }
  };

  ajoutPoint = () => {
    const { resultat, attenteOperande } = this.state;

    if (attenteOperande) {
      this.setState({
        resultat: ".",
        attenteOperande: false
      });
    } else if (resultat.indexOf(".") === -1) {
      this.setState({
        resultat: resultat + ".",
        attenteOperande: false
      });
    }
  };


  viderAffichage = () => {
    this.setState({
      resultat: "0",
      equation: " "
    });
  };

  posNeg = () => {
    const { resultat } = this.state;

    this.setState({
      resultat:
        resultat.charAt(0) === "-"
          ? resultat.substr(1)
          : "-" + resultat
    });
  };

  effacerDernier = () => {
    const { resultat } = this.state;
    const value = parseFloat(resultat);
    this.setState({
      resultat: String(value / 100)
    });
  };

  executerOperation = prochainOperateur => {
    const { resultat, operateur, value } = this.state;

    const nextValue = parseFloat(resultat);

    const operations = {
      "/": (prevValue, nextValue) => prevValue / nextValue,
      x: (prevValue, nextValue) => prevValue * nextValue,
      "+": (prevValue, nextValue) => prevValue + nextValue,
      "-": (prevValue, nextValue) => prevValue - nextValue,
      "=": (prevValue, nextValue) => nextValue
    };

    if (value == null) {
      this.setState({
        value: nextValue
      });
    } else if (operateur) {
      const currentValue = value || 0;
      const computedValue = operations[operateur](currentValue, nextValue);

      this.setState({
        value: computedValue,
        resultat: String(computedValue),
        equation: operateur === "=" ? " " : `${currentValue} ${operateur} ${nextValue}`
      });
    }

    this.setState({
      attenteOperande: true,
      operateur: prochainOperateur
    });
  };








  handleOnPress = (touche) => {
    // if (touche == "7") {
    //   this.setState({resultat: "7"});
    // }

    switch(touche){
      case "AC": this.viderAffichage;
                  break;
      case "<-": this.effacerDernier;
                 break;
      case "±": this.posNeg;
                break;
      case "/":
      case "x":
      case "-":
      case "+":
      case "=": this.executerOperation(touche);
                break;
      case ".": this.ajoutPoint;
                break;
      default : this.ajoutDigit(touche);

    }

    
    //alert(touche);
    //this.addNum(touche);
  }



  render() {
    const { resultat } = this.state;
    return (
      <SafeAreaView style={styles.calculatrice}>
        <Ecran equation={this.state.equation} resultat={this.state.resultat} />
        <Clavier onPress = {(touche) => {this.handleOnPress(touche)}} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  calculatrice: {
    flex: 1,
    backgroundColor: '#000'
  }
});

export default App;