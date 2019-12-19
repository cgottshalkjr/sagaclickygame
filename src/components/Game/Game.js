import React, { Component } from "react";
import NavBar from "../NavBar";
import SagaChar from "../SagaChar";
import GameBox from "../GameBox";
import characters from "../../characters.json";
import "./game.css";

let score = 0;
let topScore = 0;
let message;

class Game extends Component {

    state = {
        characters,
        score,
        topScore,
        message
    };

    whenClicked = char => {

        let characters = this.state.characters;
        console.log("click works");
        let correctClick = characters.filter(click => click.id === char);

        if (correctClick[0].clicked) {

            score = 0;
            message = "WRONG CHOICE!!!!"

            for (let i = 0; i < characters.length; i++) {
                characters[i].clicked = false;
            }

            this.setState({ message });
            this.setState({ score });
            this.setState({ characters });

        } else if (score < 12) {


            correctClick[0].clicked = true;

            score++;

            message = "Hooray!!!!! Keep it Goin' Bucko!!!";

            if (score > topScore) {
                topScore = score;
                this.setState({ topScore });
            }

            characters.sort(function (a, b) { return 0.5 - Math.random() });

            this.setState({ characters });
            this.setState({ score });
            this.setState({ message });

        } else {

            correctClick[0].clicked = true;

            score = 0;

            message = "TOP FORM OLE SPORT! PLAY AGAIN!!!!"
            topScore = 12;
            this.setState({ topScore });

            for (let i = 0; i < characters.length; i++) {
                characters[i].clicked = false;
            }

            characters.sort(function (a, b) { return 0.5 - Math.random() });

            this.setState({ characters });
            this.setState({ score });
            this.setState({ message });

        }
    };

    render() {
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