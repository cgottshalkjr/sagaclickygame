import React, { Component } from "react";
import NavBar from "../NavBar";
import SagaChar from "../SagaChar";
import Wrapper from "../Wrapper";
import characters from "../../characters.json";
import "./game.css";

let correctClicks = 0;
let score = 0;
let topScore = 0;
let message;





class Game extends Component {

    state = {
        characters,
        correctClicks,
        score,
        topScore,
        message
    };

    whenClicked = char => {

        const characters = this.state.characters;

        const correctClick = characters.filter(click => click.id === char);

        if (correctClick[0].clicked) {

            score = 0;
            message = "WRONG CHOICE!!!!"

            for (let i = 0; i < characters.length; i++) {
                characters[i].clicked = false;
            }

            this.setState({ message });
            this.setState({ correctClicks });
            this.setState({ characters });

        } else if (correctClicks < 11) {


            correctClick[0].clicked = true;

            correctClicks++;

            message = "Hooray!!!!! Keep it Goin' Bucko!!!";

            if (correctClicks > topScore) {
                topScore = correctClicks;
                this.setState({ topScore });
            }

            characters.sort(function (a, b) { return 0.5 - Math.random() });

            this.setState({ characters });
            this.setState({ correctClicks });
            this.setState({ message });
        } else {

            correctClick[0].clicked = true;

            correctClicks = 0;

            message = "TOP FORM OLE SPORT! PLAY AGAIN!!!!"
            topScore = 12;
            this.setState({ topScore });

            for (let i = 0; i < characters.length; i++) {
                characters[i].clicked = false;
            }

            characters.sort(function (a, b) { return 0.5 - Math.random() });

            this.setState({ characters });
            this.setState({ correctClicks });
            this.setState({ message });

        }
    };

    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <Wrapper>
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

                    </Wrapper>
                </div>
            </div>
        );
    }
}

export default Game;