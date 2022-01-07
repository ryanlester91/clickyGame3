import React, {Component} from "react";
import Score from "./components/Score";
import Alert from "./components/Alert";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";

class App extends Component {

  state = {
    characters: characters,
    pickedCharacters: [],
    score: 0,
    topScore: 0,
    alertMessage: ""
  }

  

  /*shuffleCharacters = () => {
    this.setState(this.state.characters = this.shuffleArray(this.state.characters))
  }*/

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      let x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
    return array;
  }

  pickCharacter = id => {
    let pickedCharacters = this.state.pickedCharacters;
    let score = this.state.score;
    let topScore = this.state.topScore;

    switch (pickedCharacters) {
      case pickedCharacters.indexOf(id) === -1:
        pickedCharacters.push(id);

        //reshuffle after each click
        this.shuffleArray();
        break;

      case this.state.score === 12:
        alert("You WON!");
        this.setState({
          score: 0,
          pickedCharacters: []
        });
        break;

      case this.setState:
        this.setState({
          score: 0,
          pickedCharacters: []
        });
        alert("You LOST! You picked a character twice");
        break;
      
        case score > topScore:
          this.setState({
            topScore: score
          });
          break;
          
          default:
    }

    if(pickedCharacters.indexOf(id) === -1){
      pickedCharacters.push(id);

      this.shuffleArray();
    }
    else if (this.state.score === 12) {
      alert("You WON!");
      this.setState({
        score: 0,
        pickedCharacters: []
      });
      alert("You LOST! You picked a character twice")
    }
    if (score > topScore) {
      this.setState({ 
        topScore: score 
      });
    }
  
}


  
render() {
  return(
    <div>
      <Wrapper>Clicky Game <Score>{this.score}</Score> <Alert>{this.alertMessage} </Alert></Wrapper>
      {this.state.characters.map(character => ( 
        <Card
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              pickCharacter ={this.pickCharacter} 
              />
        
      ))}
    </div>
  )};
      
      }

export default App;