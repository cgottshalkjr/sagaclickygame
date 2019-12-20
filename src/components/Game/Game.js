import React, { Component } from "react";
import NavBar from "../NavBar";
import SagaChar from "../SagaChar";
import GameBox from "../GameBox";
import characters from "../../characters.json";
import "./game.css";

class Game extends Component {

    state = {
        characters,
        score: 0,
        topScore: 0,
        message: ""
    };

    whenClicked = char => {

        let correctClick = this.state.characters.filter(click => click.id === char);

        if (correctClick[0].clicked) {
            console.log("if 1 has been hit");
            this.setState({ score: 0 });
            this.setState({ message: "WRONG CHOICE!!!! GAME OVER!!! PLAY AGAIN!!!" });
            
            let characters = this.state.characters.map(item => {
                item.clicked = false;
                
                return item;
            });
            
            this.setState({ characters });

        } else {

            this.setState({ score: this.state.score + 1 }, () => {
                if (this.state.score > this.state.topScore) {
                    this.setState({ topScore: this.state.score });
                }

                if (this.state.score < 12) {

                    console.log("if 2 has been hit");

                    let newCharacters = this.state.characters.map(item => {
                        if (item.id === char) {
                            item.clicked = true;
                        }

                        return item;
                    });

                    newCharacters = newCharacters.sort(function (a, b) { return 0.5 - Math.random() });

                    this.setState({
                        characters: newCharacters,
                        message: "Hooray!!!!! Keep it Goin' Bucko!!!"
                    });

                } else {
                    console.log("12 has been hit")
                    console.log("if 3 has been hit");

                    let newCharacters = this.state.characters.map(item => {
                        item.clicked = false;

                        return item;
                    });

                    newCharacters.sort(function (a, b) { return 0.5 - Math.random() });

                    this.setState({
                        characters: newCharacters,
                        score: 0,
                        message: "TOP FORM OLE SPORT! PLAY AGAIN!!!!"
                    });

                }
            });
        }
    };

    render() {
        console.log(this.state);
        return (

            <div>
                <NavBar
                    score={this.state.score}
                    message={this.state.message}
                    topScore={this.state.topScore}
                />
                <GameBox>
                    <div className="container">
                        <div className="row">
                            {

                                this.state.characters.map(char => (
                                    <div className="col-3 float-left d-flex">
                                        <SagaChar
                                            id={char.id}
                                            key={char.id}
                                            name={char.name}
                                            image={char.image}
                                            whenClicked={this.whenClicked}
                                        />
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </GameBox>
            </div>
        );
    }
}

export default Game;